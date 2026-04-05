import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Questions for Your Lawyer — GrayDivorceGuide",
  description:
    "Printable question scripts organized by topic for your divorce attorney meetings.",
};

interface QuestionSection {
  title: string;
  context: string;
  questions: string[];
}

const sections: QuestionSection[] = [
  {
    title: "First Consultation",
    context:
      "These questions help you evaluate whether this attorney is right for your case and understand what to expect.",
    questions: [
      "What percentage of your practice focuses on divorce cases for people over 45?",
      "Are you familiar with QDROs and dividing retirement accounts?",
      "What is your fee structure — hourly, retainer, flat fee? What's a realistic total cost estimate?",
      "How long does a gray divorce typically take in our state/county?",
      "Do you recommend mediation, collaborative divorce, or litigation for my situation?",
      "Who else might I need on my team — financial advisor, forensic accountant, therapist?",
      "What should I absolutely NOT do right now that could hurt my case?",
      "How will we communicate, and how quickly can I expect responses?",
    ],
  },
  {
    title: "Assets & Property Division",
    context:
      "Make sure nothing is hidden or undervalued. These questions protect your financial interests.",
    questions: [
      "Is our state a community property or equitable distribution state? What does that mean for me?",
      "How do we determine the current value of the marital home? Do we need an appraisal?",
      "My spouse owns a business — how do we determine its value? Do we need a forensic accountant?",
      "What happens to assets I brought into the marriage or inherited during it?",
      "How are stock options, RSUs, and deferred compensation handled?",
      "I suspect my spouse may be hiding assets. What can we do?",
      "Should I keep the house or sell it? What are the financial implications of each?",
      "How do we handle jointly owned investment or brokerage accounts?",
      "What about frequent flyer miles, reward points, or cryptocurrency?",
    ],
  },
  {
    title: "Retirement & Social Security",
    context:
      "For women over 45, retirement accounts are often the largest marital asset. Don't leave money on the table.",
    questions: [
      "Am I entitled to a portion of my spouse's 401(k), IRA, or pension?",
      "What is a QDRO, and when do we need one? Who prepares it?",
      "If I've been married 10+ years, can I claim Social Security benefits based on my spouse's record?",
      "How do we value a defined benefit pension plan?",
      "What are the tax implications of dividing retirement accounts?",
      "Should I take a lump sum or keep my share in the retirement account?",
      "What happens to my health insurance coverage from my spouse's employer?",
    ],
  },
  {
    title: "Alimony / Spousal Support",
    context:
      "If you earned less or stayed home during the marriage, spousal support can be critical for your financial stability.",
    questions: [
      "Am I likely to receive spousal support? For how long?",
      "How is the amount of alimony calculated in our state?",
      "What factors does the court consider — length of marriage, age, health, earning capacity?",
      "Is there a difference between temporary and permanent alimony?",
      "Can alimony be modified later if circumstances change?",
      "What happens to alimony if my ex-spouse retires?",
      "Should alimony be structured as a lump sum or monthly payments? What are the tax differences?",
      "If I haven't worked in years, will the court expect me to find a job? How soon?",
    ],
  },
  {
    title: "Tax Implications",
    context:
      "Divorce has major tax consequences that are easy to overlook. Ask these before you agree to any settlement terms.",
    questions: [
      "What are the tax implications of selling the marital home?",
      "How should we file taxes during the divorce — jointly or separately?",
      "Who claims dependents if we have adult children still in college?",
      "Is alimony taxable income for me or deductible for my spouse?",
      "What are the capital gains implications of dividing investment accounts?",
      "Should we consider the after-tax value of assets when dividing property?",
      "Do I need my own tax advisor, or can we use the same one?",
    ],
  },
  {
    title: "Protecting Yourself",
    context:
      "These questions address safety, urgency, and common mistakes women make during gray divorce.",
    questions: [
      "Should I open my own bank account and credit card now?",
      "What if my spouse cuts off access to joint accounts?",
      "Should I change beneficiaries on life insurance and retirement accounts?",
      "How do I protect my credit score during the divorce?",
      "What documents should I copy or secure right away?",
      "Is there anything my spouse could do to dissipate marital assets? How do I prevent it?",
      "If I feel financially controlled or pressured, what are my legal options?",
      "What are the biggest mistakes you see women my age make during divorce?",
    ],
  },
];

export default function LawyerQuestions() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Questions for Your Lawyer</h1>
      <p className="text-muted mb-4">
        Organized by topic so you can prepare for each meeting. Print this page
        or save it to your phone.
      </p>
      <PrintButton />

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-sm text-muted mb-4">{section.context}</p>
            <ol className="space-y-3">
              {section.questions.map((q, i) => (
                <li key={i} className="flex gap-3 p-3 bg-card-bg border border-border rounded-lg">
                  <span className="text-accent font-semibold text-sm shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-sm">{q}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-warm-bg rounded-xl border border-border print:hidden">
        <h3 className="font-semibold mb-2">Tips for your meetings</h3>
        <ul className="text-sm text-muted space-y-2 list-disc list-inside">
          <li>
            Bring your{" "}
            <a href="/asset-checklist" className="text-accent underline">
              Asset Checklist
            </a>{" "}
            progress — it shows your lawyer what you&apos;ve found and what&apos;s
            missing
          </li>
          <li>Take notes or ask if you can record the meeting</li>
          <li>
            Don&apos;t be afraid to say &quot;I don&apos;t understand&quot; — a
            good lawyer will explain in plain language
          </li>
          <li>
            If something feels wrong or unfair in their answer, get a second
            opinion
          </li>
        </ul>
      </div>
    </div>
  );
}
