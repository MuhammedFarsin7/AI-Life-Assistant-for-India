"use client";

import { Button } from "@/components/ui/Button";

const questions = [
  "How do I apply for a Passport?",
  "How can I update my Aadhaar card?",
  "What documents are required for a PAN Card?",
  "How do I apply for a Driving Licence?",
  "Am I eligible for PM Awas Yojana?",
  "How do I get an Income Certificate?",
];

export default function SuggestedQuestions() {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Suggested Questions
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {questions.map((question) => (
          <Button
            key={question}
            variant="outline"
            className="justify-start rounded-xl p-6 text-left hover:bg-slate-800"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}