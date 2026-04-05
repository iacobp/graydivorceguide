import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-warm-bg mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold text-accent mb-2">GrayDivorceGuide</p>
            <p className="text-sm text-muted">
              Free financial planning tools for women navigating midlife divorce.
              Because 91% shouldn&apos;t go through this alone.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">Tools</p>
            <ul className="space-y-1 text-sm text-muted">
              <li>
                <Link href="/asset-checklist" className="hover:text-foreground">
                  Asset Checklist
                </Link>
              </li>
              <li>
                <Link
                  href="/settlement-calculator"
                  className="hover:text-foreground"
                >
                  Settlement Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/lawyer-questions"
                  className="hover:text-foreground"
                >
                  Questions for Your Lawyer
                </Link>
              </li>
              <li>
                <Link href="/budget-planner" className="hover:text-foreground">
                  Budget Planner
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Important</p>
            <p className="text-sm text-muted">
              This site provides general financial education, not legal or
              financial advice. Always consult qualified professionals for your
              specific situation.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} GrayDivorceGuide. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
