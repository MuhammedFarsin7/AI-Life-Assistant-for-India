import { Fragment } from "react";

interface ChatMessageProps {
  role: "user" | "assistant";
  message: string;
}

function formatInlineText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

function renderMessageContent(text: string) {
  const lines = text.split(/\r?\n/);
  const elements: Array<React.ReactNode> = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let isOrderedList = false;

  const flushParagraph = () => {
    if (paragraphLines.length) {
      elements.push(
        <p key={`paragraph-${elements.length}`} className="whitespace-pre-wrap leading-7 text-slate-100">
          {formatInlineText(paragraphLines.join(" "))}
        </p>,
      );
      paragraphLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length) {
      if (isOrderedList) {
        elements.push(
          <ol key={`list-${elements.length}`} className="ml-5 list-decimal space-y-2 leading-7 text-slate-100">
            {listItems.map((item, index) => (
              <li key={`${item}-${index}`}>{formatInlineText(item)}</li>
            ))}
          </ol>,
        );
      } else {
        elements.push(
          <ul key={`list-${elements.length}`} className="ml-5 list-disc space-y-2 leading-7 text-slate-100">
            {listItems.map((item, index) => (
              <li key={`${item}-${index}`}>{formatInlineText(item)}</li>
            ))}
          </ul>,
        );
      }
      listItems = [];
      isOrderedList = false;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      const headingClass =
        level === 1
          ? "text-lg font-semibold text-white"
          : level === 2
            ? "text-base font-semibold text-slate-200"
            : "text-sm font-semibold uppercase tracking-[0.2em] text-slate-300";
      elements.push(
        <h3 key={`heading-${elements.length}`} className={`mt-1 ${headingClass}`}>
          {formatInlineText(headingMatch[2])}
        </h3>,
      );
      return;
    }

    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    if (numberedMatch) {
      flushParagraph();
      if (!isOrderedList) {
        flushList();
      }
      isOrderedList = true;
      listItems.push(numberedMatch[2]);
      return;
    }

    const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);
    if (bulletMatch) {
      flushParagraph();
      if (isOrderedList) {
        flushList();
      }
      listItems.push(bulletMatch[1]);
      return;
    }

    flushList();
    paragraphLines.push(trimmed);
  });

  flushParagraph();
  flushList();

  return elements;
}

export default function ChatMessage({ role, message }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-lg shadow-slate-950/20 sm:px-5 sm:py-4 ${
          isUser
            ? "bg-gradient-to-r from-sky-600 to-cyan-500 text-white"
            : "border border-slate-700/80 bg-slate-800/90 text-slate-100"
        }`}
      >
        <div className="space-y-2">
          {renderMessageContent(message)}
        </div>
      </div>
    </div>
  );
}