import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import SuggestedQuestions from "@/components/government/SuggestedQuestions";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function GovernmentAssistantPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div>
            <h1 className="text-2xl font-bold">
              Government AI Assistant
            </h1>

            <p className="text-slate-400">
              AI Life Assistant for India
            </p>
          </div>

          <Badge variant="success">
            Online
          </Badge>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl p-8">

        <Card>

          <CardHeader>

            <CardTitle className="text-3xl">
              Ask anything about Indian Government Services
            </CardTitle>

          </CardHeader>

          <CardContent>

            <p className="text-slate-400">
              Passport, Aadhaar, PAN Card, Driving Licence,
              Government Schemes and many more.
            </p>

          </CardContent>

        </Card>
        <SuggestedQuestions />

      </main>

    </div>
  );
}