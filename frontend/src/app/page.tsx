import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageContainer } from "@/components/layout/PageContainer";

const services = [
  {
    icon: "🏛️",
    title: "Government Services",
    description: "Find clear guidance for common public service needs and documentation support.",
  },
  {
    icon: "🩺",
    title: "Medical Report Explainer",
    description: "Understand reports and health information in simple, everyday language.",
  },
  {
    icon: "💼",
    title: "Career Guidance",
    description: "Explore career paths, study options, and practical next steps with confidence.",
  },
  {
    icon: "📝",
    title: "Resume Review",
    description: "Improve resumes for better job applications with concise, actionable feedback.",
  },
  {
    icon: "⚖️",
    title: "Legal Assistant",
    description: "Get plain-language help understanding common legal documents and processes.",
  },
  {
    icon: "💰",
    title: "Personal Finance",
    description: "Learn budgeting, savings, and financial planning tips in a simple format.",
  },
  {
    icon: "🗣️",
    title: "Regional Language Translator",
    description: "Translate and communicate smoothly across different languages and regions.",
  },
  {
    icon: "🎙️",
    title: "Voice Assistant",
    description: "Use voice-friendly support for quick guidance whenever hands-free help is useful.",
  },
];

const highlights = [
  {
    title: "Fast AI Assistance",
    description: "Get useful answers quickly with a smooth and thoughtful experience.",
  },
  {
    title: "Secure & Private",
    description: "Your information stays protected with privacy-first design principles.",
  },
  {
    title: "Easy to Use",
    description: "A clean and intuitive experience for people of all ages and backgrounds.",
  },
  {
    title: "Available in Multiple Languages",
    description: "Support that feels natural for diverse communities across India.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(248,250,252,1))] text-foreground transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(15,23,42,1))]">
      <Navbar />

      <main id="home">
        <PageContainer className="grid gap-16 py-16 lg:py-24">
          <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl space-y-6">
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">
                Everyday support, simplified
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Your Personal AI Assistant for Everyday Life in India
                </h1>
                <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                  Get help with government schemes, medical reports, career guidance, resume reviews, legal documents, finance, translation, and voice assistance—all in one place.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            <Card className="border-border/70 bg-card/80 p-6 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.25)] backdrop-blur">
              <CardHeader className="p-0">
                <Badge variant="success" className="w-fit">
                  Premium experience
                </Badge>
                <CardTitle className="mt-4 text-2xl">A calm, helpful companion for daily decisions</CardTitle>
                <CardDescription className="mt-2 text-base">
                  Designed to make essential information easier to understand and act on.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Fast guidance",
                    "Multilingual support",
                    "Clear explanations",
                    "Accessible design",
                  ].map((item) => (
                    <div key={item} className="rounded-lg border border-border/70 bg-background/70 p-3 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="services" className="space-y-8">
            <div className="max-w-2xl space-y-3">
              <Badge variant="outline">Services</Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Support for the moments that matter most
              </h2>
              <p className="text-lg text-muted-foreground">
                A thoughtfully curated set of helpful services designed for everyday life in India.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group h-full border-border/70 bg-card/80 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(15,23,42,0.2)]"
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-2xl">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                    <CardDescription className="mt-2">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section id="about" className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              <Badge variant="outline">Why Choose Us</Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A simple, premium experience built for real life
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item) => (
                <Card key={item.title} className="border-border/70 bg-card/80 p-6 shadow-sm">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </Card>
              ))}
            </div>
          </section>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
