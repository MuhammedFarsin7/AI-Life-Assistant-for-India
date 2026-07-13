import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

const featureCards = [
  {
    icon: "🏛",
    title: "Government Services",
    description: "Track public support options and service updates with clarity.",
  },
  {
    icon: "🏥",
    title: "Medical Reports",
    description: "Understand reports and medical summaries in a simpler format.",
  },
  {
    icon: "📄",
    title: "Resume Review",
    description: "Improve your resume structure and content for better opportunities.",
  },
  {
    icon: "🎓",
    title: "Career Guidance",
    description: "Explore study and career directions tailored to your goals.",
  },
  {
    icon: "⚖",
    title: "Legal Assistant",
    description: "Review important documents with plain-language support.",
  },
  {
    icon: "💰",
    title: "Finance",
    description: "Manage personal finance questions with confidence and clarity.",
  },
  {
    icon: "🌐",
    title: "Translator",
    description: "Bridge language gaps for multilingual conversations and documents.",
  },
  {
    icon: "🎤",
    title: "Voice Assistant",
    description: "Speak naturally and receive helpful guidance in return.",
  },
];

const activityItems = [
  { title: "Resume review completed", time: "10 mins ago", status: "Ready" },
  { title: "Medical report summary opened", time: "35 mins ago", status: "Updated" },
  { title: "Finance guidance requested", time: "1 hr ago", status: "Viewed" },
];

const quickActions = [
  { title: "Upload PDF", icon: "📤" },
  { title: "Ask AI", icon: "💬" },
  { title: "Translate Text", icon: "📝" },
  { title: "Voice Chat", icon: "🎙" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(248,250,252,1))] text-foreground transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,1))]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="w-full border-b border-border/70 bg-background/80 p-6 backdrop-blur-xl lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between lg:block">
            <div>
              <p className="text-lg font-semibold">AI Life Assistant</p>
              <p className="text-sm text-muted-foreground">India</p>
            </div>
            <Badge variant="outline" className="lg:mt-4">Premium</Badge>
          </div>

          <nav className="mt-8 space-y-1" aria-label="Sidebar navigation">
            {[
              ["🏠", "Dashboard"],
              ["🏛", "Government Services"],
              ["🏥", "Medical Report Analyzer"],
              ["📄", "Resume Review"],
              ["🎓", "Career Guidance"],
              ["⚖", "Legal Assistant"],
              ["💰", "Personal Finance"],
              ["🌐", "Translator"],
              ["🎤", "Voice Assistant"],
              ["⚙", "Settings"],
              ["🚪", "Logout"],
            ].map(([icon, label]) => (
              <button
                key={label}
                type="button"
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors ${
                  label === "Dashboard"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <span className="text-base">{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="flex-1">
          <header className="border-b border-border/70 bg-background/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <label className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm">
                <span>🔎</span>
                <input
                  type="search"
                  placeholder="Search assistant"
                  className="w-full bg-transparent outline-none placeholder:text-muted-foreground md:w-64"
                  aria-label="Search"
                />
              </label>

              <div className="flex items-center gap-3">
                <button type="button" className="rounded-full border border-border/70 bg-background/70 p-2.5 text-muted-foreground transition-colors hover:text-foreground" aria-label="Notifications">
                  🔔
                </button>
                <div className="flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-3 py-2 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-medium">Muhammed</p>
                    <p className="text-xs text-muted-foreground">Premium User</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="p-4 sm:p-6 lg:p-8">
            <section className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.2)] backdrop-blur">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <Badge variant="success">Active workspace</Badge>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Welcome back, Muhammed
                  </h1>
                  <p className="mt-2 text-lg text-muted-foreground">
                    How can AI help you today?
                  </p>
                </div>
                <Button size="lg">Open Assistant</Button>
              </div>
            </section>

            <section className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Featured Assistants</h2>
                <p className="text-sm text-muted-foreground">Choose your next task</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {featureCards.map((card) => (
                  <Card key={card.title} className="group border-border/70 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(15,23,42,0.2)]">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-2xl">
                        {card.icon}
                      </div>
                      <CardTitle className="mt-4">{card.title}</CardTitle>
                      <CardDescription className="mt-2">{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="outline" className="w-full">
                        Open Assistant
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Activity</h2>
                  <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                    View all
                  </a>
                </div>
                <div className="space-y-3">
                  {activityItems.map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/60 px-4 py-3">
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                      <Badge variant="secondary">{item.status}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Quick Actions</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {quickActions.map((action) => (
                    <Button key={action.title} variant="outline" className="justify-start gap-2">
                      <span className="text-lg">{action.icon}</span>
                      {action.title}
                    </Button>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
