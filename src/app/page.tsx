import Link from "next/link";

const tools = [
  {
    href: "/asset-checklist",
    title: "Know What You Own",
    description:
      "An interactive checklist of every asset, account, and document. No more guessing — walk into every conversation with full clarity.",
    icon: "clipboard",
  },
  {
    href: "/settlement-calculator",
    title: "See What You&apos;re Owed",
    description:
      "Model how assets and debts divide. Understand equitable distribution on your terms, not someone else's summary.",
    icon: "calculator",
  },
  {
    href: "/lawyer-questions",
    title: "Ask the Right Questions",
    description:
      "Printable question scripts by topic. Walk into every meeting as the most prepared person in the room.",
    icon: "chat",
  },
  {
    href: "/budget-planner",
    title: "Design Your New Life",
    description:
      "Map out your real monthly needs. See exactly what your independent life costs — and what it makes possible.",
    icon: "chart",
  },
];

const icons: Record<string, React.ReactNode> = {
  clipboard: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  calculator: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  chat: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

const stories = [
  {
    quote:
      "I spent 28 years not knowing what we had. When I finally sat down and listed everything, I realized I wasn't starting from zero — I was starting from a position of strength I didn't know I had.",
    name: "Margaret, 54",
    detail: "Divorced after 30 years of marriage",
  },
  {
    quote:
      "My lawyer said I was the most prepared client she'd ever had on a first meeting. I wasn't smarter than anyone else — I just knew what questions to ask.",
    name: "Diana, 49",
    detail: "Navigated a complex settlement with business assets",
  },
  {
    quote:
      "Everyone told me I'd struggle financially. Instead, I built a budget for the life I actually wanted — not the one I'd been living by default for 25 years.",
    name: "Susan, 58",
    detail: "Rebuilt her finances in 18 months",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-sm uppercase tracking-widest text-accent-light mb-4">
            Free Financial Tools for Your Next Chapter
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-balance leading-tight mb-6">
            You&apos;re not starting over.
            <br />
            <span className="text-accent">
              You&apos;re starting to choose.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Divorce after 45 isn&apos;t the end of your story — it&apos;s the
            part where you finally write it yourself. These free tools give you
            the financial clarity to take control, ask the right questions, and
            design the life you actually want.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/asset-checklist"
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors"
            >
              Take Control — Start the Checklist
            </Link>
            <Link
              href="/settlement-calculator"
              className="inline-block border border-accent text-accent px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-colors"
            >
              See What You&apos;re Owed
            </Link>
          </div>
        </div>
      </section>

      {/* The reality — reframed */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-3">
          The numbers they don&apos;t want you to know
        </h2>
        <p className="text-sm text-muted text-center mb-10 max-w-xl mx-auto">
          Knowledge isn&apos;t just power — it&apos;s protection. Here&apos;s
          why knowing your finances isn&apos;t optional.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-card-bg border border-border rounded-xl p-6">
            <p className="text-4xl font-bold text-accent">45%</p>
            <p className="text-sm text-muted mt-2">
              drop in standard of living for women after gray divorce — vs. 21%
              for men
            </p>
            <p className="text-xs text-accent mt-3 font-medium">
              Closing that gap starts with knowing your numbers
            </p>
          </div>
          <div className="bg-card-bg border border-border rounded-xl p-6">
            <p className="text-4xl font-bold text-accent">91%</p>
            <p className="text-sm text-muted mt-2">
              of divorcing midlife women never seek financial advice
            </p>
            <p className="text-xs text-accent mt-3 font-medium">
              You&apos;re already ahead by being here
            </p>
          </div>
          <div className="bg-card-bg border border-border rounded-xl p-6">
            <p className="text-4xl font-bold text-accent">60%</p>
            <p className="text-sm text-muted mt-2">
              of all wealth is controlled by women over 50
            </p>
            <p className="text-xs text-accent mt-3 font-medium">
              You have more power than you think
            </p>
          </div>
        </div>
        <p className="text-xs text-muted text-center mt-6">
          Sources: CNBC / Bowling Green State University, Mishcon de Reya / NOON
          2025, McKinsey
        </p>
      </section>

      {/* Tools Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-3">
          Four tools. Four steps to clarity.
        </h2>
        <p className="text-sm text-muted text-center mb-10 max-w-lg mx-auto">
          Free, private, no account needed. Nothing is stored — your
          information stays in your browser and nowhere else.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block bg-card-bg border border-border rounded-xl p-6 hover:border-accent transition-colors group"
            >
              <div className="text-accent mb-3">{icons[tool.icon]}</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-muted">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Women's stories */}
      <section className="bg-warm-bg border-t border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-3">
            Women who chose themselves
          </h2>
          <p className="text-sm text-muted text-center mb-10 max-w-lg mx-auto">
            The hardest part isn&apos;t the divorce. It&apos;s believing you
            can do this. You can.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-card-bg rounded-xl border border-border p-6"
              >
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-accent">
                    {story.name}
                  </p>
                  <p className="text-xs text-muted">{story.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your next chapter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          What your next chapter looks like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-muted text-sm uppercase tracking-wide">
              Before clarity
            </h3>
            <ul className="space-y-3">
              {[
                "Overwhelmed by paperwork you've never seen",
                "Afraid of what you don't know about your own finances",
                "Feeling dependent on someone else's decisions",
                "Walking into meetings unprepared and anxious",
                "Accepting whatever is offered because you don't know better",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-red-400 mt-0.5 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-accent text-sm uppercase tracking-wide">
              After clarity
            </h3>
            <ul className="space-y-3">
              {[
                "A complete picture of every asset, account, and debt",
                "Confidence in what you're entitled to — backed by numbers",
                "Financial independence you designed, not defaulted into",
                "Walking into every room as the most prepared person there",
                "A budget built around the life you actually want to live",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-success mt-0.5 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            You&apos;ve spent years taking care of everyone else.
            <br />
            This is where you start taking care of you.
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Every woman who came out the other side of this says the same
            thing: &ldquo;I wish I&apos;d started sooner.&rdquo; Start now. It
            takes five minutes.
          </p>
          <Link
            href="/asset-checklist"
            className="inline-block bg-white text-accent px-8 py-3 rounded-lg text-sm font-semibold hover:bg-warm-bg transition-colors"
          >
            Start Your Checklist — Free, Private, Yours
          </Link>
        </div>
      </section>

      {/* Trust / who this is for */}
      <section className="bg-warm-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Built by women, for women in midlife
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-muted">
            <div>
              <p className="text-2xl mb-2">100% Free</p>
              <p>
                No paywalls, no &ldquo;premium tiers,&rdquo; no upsells. Every
                tool is fully accessible right now.
              </p>
            </div>
            <div>
              <p className="text-2xl mb-2">Completely Private</p>
              <p>
                Nothing is stored on our servers. Your financial data stays in
                your browser and disappears when you close the tab.
              </p>
            </div>
            <div>
              <p className="text-2xl mb-2">No Account Needed</p>
              <p>
                No sign-up, no email required, no marketing list. Just open
                the tools and use them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
