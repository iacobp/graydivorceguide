import Link from "next/link";

const tools = [
  {
    href: "/asset-checklist",
    title: "Asset Checklist",
    description:
      "An interactive checklist of every asset, account, and document you need to locate before settlement talks begin.",
    icon: "clipboard",
  },
  {
    href: "/settlement-calculator",
    title: "Settlement Calculator",
    description:
      "Estimate how assets and debts might be divided. Understand what equitable distribution actually means for your situation.",
    icon: "calculator",
  },
  {
    href: "/lawyer-questions",
    title: "Questions for Your Lawyer",
    description:
      "Printable scripts organized by topic. Walk into every meeting prepared with the right questions.",
    icon: "chat",
  },
  {
    href: "/budget-planner",
    title: "Post-Divorce Budget Planner",
    description:
      "Map out your new financial life. Calculate your real monthly needs on a single income.",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-sm uppercase tracking-widest text-accent-light mb-4">
            Free Financial Tools for Gray Divorce
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-balance leading-tight mb-6">
            91% of divorcing midlife women get zero financial advice.
            <br />
            <span className="text-accent">You won&apos;t be one of them.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Divorce after 45 is a financial earthquake. These free tools help
            you understand what you own, what you&apos;re owed, what to ask, and
            how to plan your next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/asset-checklist"
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors"
            >
              Start with the Asset Checklist
            </Link>
            <Link
              href="/settlement-calculator"
              className="inline-block border border-accent text-accent px-6 py-3 rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-colors"
            >
              Try the Settlement Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-accent">91%</p>
            <p className="text-sm text-muted mt-1">
              of divorcing midlife women don&apos;t seek financial advice
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">65%</p>
            <p className="text-sm text-muted mt-1">
              fear for their finances post-divorce
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">29%</p>
            <p className="text-sm text-muted mt-1">
              understood their financial situation before the split
            </p>
          </div>
        </div>
        <p className="text-xs text-muted text-center mt-6">
          Source: Mishcon de Reya / NOON 2025 study on midlife divorce
        </p>
      </section>

      {/* Tools Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Four free tools. Zero jargon.
        </h2>
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

      {/* Who this is for */}
      <section className="bg-warm-bg border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Built for women going through this right now
          </h2>
          <div className="space-y-4 text-muted">
            <p>
              If you&apos;re a woman over 45 facing divorce — whether you
              initiated it or not — the financial side can feel paralyzing.
              Where do you even start?
            </p>
            <p>
              Most resources either require expensive advisors or bury you in
              legal jargon. These tools are different: they&apos;re free,
              private (nothing is stored), and designed to give you clarity
              before your first meeting with a lawyer or financial advisor.
            </p>
            <p>
              <strong>You don&apos;t need to have all the answers.</strong> You
              just need to know the right questions. Start with the{" "}
              <Link href="/asset-checklist" className="text-accent underline">
                Asset Checklist
              </Link>{" "}
              to see everything you need to gather.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
