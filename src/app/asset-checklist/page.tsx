"use client";

import { useState } from "react";

interface CheckItem {
  label: string;
  checked: boolean;
}

interface Category {
  name: string;
  items: CheckItem[];
}

const initialCategories: Category[] = [
  {
    name: "Bank Accounts",
    items: [
      { label: "Joint checking accounts (all banks)", checked: false },
      { label: "Joint savings accounts", checked: false },
      { label: "Your individual checking/savings", checked: false },
      { label: "Spouse's individual accounts (if known)", checked: false },
      { label: "Money market accounts", checked: false },
      { label: "CDs (Certificates of Deposit)", checked: false },
      { label: "Last 3-5 years of bank statements", checked: false },
    ],
  },
  {
    name: "Retirement & Investments",
    items: [
      { label: "401(k) / 403(b) accounts — yours", checked: false },
      { label: "401(k) / 403(b) accounts — spouse's", checked: false },
      { label: "IRA accounts (Traditional and Roth)", checked: false },
      { label: "Pension plans and benefit statements", checked: false },
      { label: "Brokerage / investment accounts", checked: false },
      { label: "Stock options or RSUs", checked: false },
      { label: "Annuities", checked: false },
      { label: "Social Security statements (both spouses)", checked: false },
    ],
  },
  {
    name: "Real Estate",
    items: [
      { label: "Primary home — deed, mortgage statement, current value", checked: false },
      { label: "Vacation / second homes", checked: false },
      { label: "Rental properties", checked: false },
      { label: "Vacant land", checked: false },
      { label: "Timeshares", checked: false },
      { label: "Home equity line of credit (HELOC) statements", checked: false },
      { label: "Property tax records", checked: false },
    ],
  },
  {
    name: "Vehicles & Personal Property",
    items: [
      { label: "Cars — titles, loan statements, current value", checked: false },
      { label: "Boats, RVs, motorcycles", checked: false },
      { label: "Jewelry (especially high-value pieces)", checked: false },
      { label: "Art, antiques, collectibles", checked: false },
      { label: "Furniture and household items inventory", checked: false },
      { label: "Electronics and equipment", checked: false },
    ],
  },
  {
    name: "Business Interests",
    items: [
      { label: "Business ownership documents", checked: false },
      { label: "Partnership agreements", checked: false },
      { label: "Business tax returns (3-5 years)", checked: false },
      { label: "Business bank account statements", checked: false },
      { label: "Business valuation (if available)", checked: false },
    ],
  },
  {
    name: "Debts & Liabilities",
    items: [
      { label: "Mortgage balance(s)", checked: false },
      { label: "Credit card statements — joint accounts", checked: false },
      { label: "Credit card statements — individual accounts", checked: false },
      { label: "Auto loans", checked: false },
      { label: "Student loans", checked: false },
      { label: "Personal loans", checked: false },
      { label: "Medical debt", checked: false },
      { label: "Tax debt (IRS or state)", checked: false },
      { label: "Lines of credit", checked: false },
    ],
  },
  {
    name: "Insurance Policies",
    items: [
      { label: "Health insurance policy details", checked: false },
      { label: "Life insurance — policies and beneficiaries", checked: false },
      { label: "Long-term care insurance", checked: false },
      { label: "Disability insurance", checked: false },
      { label: "Homeowner's / renter's insurance", checked: false },
      { label: "Auto insurance", checked: false },
      { label: "Umbrella policy", checked: false },
    ],
  },
  {
    name: "Legal & Tax Documents",
    items: [
      { label: "Marriage certificate", checked: false },
      { label: "Prenuptial or postnuptial agreement", checked: false },
      { label: "Joint tax returns (last 3-5 years)", checked: false },
      { label: "W-2s and 1099s (both spouses)", checked: false },
      { label: "Wills and trusts", checked: false },
      { label: "Powers of attorney", checked: false },
      { label: "Any existing court orders", checked: false },
    ],
  },
  {
    name: "Income Documentation",
    items: [
      { label: "Recent pay stubs (both spouses)", checked: false },
      { label: "Bonus and commission records", checked: false },
      { label: "Freelance or side income documentation", checked: false },
      { label: "Rental income records", checked: false },
      { label: "Alimony/child support from prior marriage", checked: false },
      { label: "Trust distributions or inheritance records", checked: false },
    ],
  },
];

export default function AssetChecklist() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const toggle = (catIdx: number, itemIdx: number) => {
    setCategories((prev) => {
      const next = prev.map((cat, ci) => {
        if (ci !== catIdx) return cat;
        return {
          ...cat,
          items: cat.items.map((item, ii) =>
            ii === itemIdx ? { ...item, checked: !item.checked } : item
          ),
        };
      });
      return next;
    });
  };

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
  const checkedItems = categories.reduce(
    (sum, c) => sum + c.items.filter((i) => i.checked).length,
    0
  );
  const progress = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Divorce Asset Checklist</h1>
      <p className="text-muted mb-8">
        Check off each item as you locate it. Nothing is saved — this runs
        entirely in your browser.
      </p>

      {/* Progress bar */}
      <div className="bg-warm-bg rounded-full h-4 mb-2 overflow-hidden">
        <div
          className="bg-accent h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-muted mb-10">
        {checkedItems} of {totalItems} items located ({progress}%)
      </p>

      <div className="space-y-8">
        {categories.map((cat, catIdx) => {
          const catChecked = cat.items.filter((i) => i.checked).length;
          return (
            <div key={cat.name}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">{cat.name}</h2>
                <span className="text-xs text-muted">
                  {catChecked}/{cat.items.length}
                </span>
              </div>
              <div className="space-y-2">
                {cat.items.map((item, itemIdx) => (
                  <label
                    key={itemIdx}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      item.checked
                        ? "bg-green-50 border-green-200"
                        : "bg-card-bg border-border hover:border-accent"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggle(catIdx, itemIdx)}
                      className="w-4 h-4 rounded accent-accent"
                    />
                    <span
                      className={`text-sm ${
                        item.checked ? "line-through text-muted" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-warm-bg rounded-xl border border-border">
        <h3 className="font-semibold mb-2">What to do with this list</h3>
        <ul className="text-sm text-muted space-y-2 list-disc list-inside">
          <li>
            Print or screenshot your progress — bring it to your first lawyer
            consultation
          </li>
          <li>
            Items you can&apos;t locate may need to be requested through legal
            discovery
          </li>
          <li>
            Don&apos;t worry if you can&apos;t check everything — knowing
            what&apos;s missing is just as valuable
          </li>
          <li>
            See our{" "}
            <a href="/lawyer-questions" className="text-accent underline">
              Questions for Your Lawyer
            </a>{" "}
            for what to ask about missing items
          </li>
        </ul>
      </div>
    </div>
  );
}
