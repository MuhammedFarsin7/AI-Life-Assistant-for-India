export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] rounded-2xl border border-slate-700/80 bg-slate-800/90 px-4 py-3 shadow-lg shadow-slate-950/20">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="font-medium text-slate-200">
            AI Assistant is typing
          </span>

          <span className="flex items-center gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-sky-400 [animation-delay:0ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-sky-400 [animation-delay:160ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-sky-400 [animation-delay:320ms]" />
          </span>
        </div>
      </div>
    </div>
  );
}