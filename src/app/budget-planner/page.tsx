"use client";

import { useState } from "react";

interface BudgetItem {
  label: string;
  value: string;
}

interface BudgetCategory {
  name: string;
  items: BudgetItem[];
}

const initialBudget: BudgetCategory[] = [
  {
    name: "Housing",
    items: [
      { label: "Rent or mortgage payment", value: "" },
      { label: "Property taxes", value: "" },
      { label: "Homeowner's/renter's insurance", value: "" },
      { label: "HOA fees", value: "" },
      { label: "Maintenance & repairs", value: "" },
      { label: "Utilities (electric, gas, water)", value: "" },
      { label: "Internet & phone", value: "" },
    ],
  },
  {
    name: "Transportation",
    items: [
      { label: "Car payment", value: "" },
      { label: "Car insurance", value: "" },
      { label: "Gas / charging", value: "" },
      { label: "Maintenance & repairs", value: "" },
      { label: "Parking & tolls", value: "" },
    ],
  },
  {
    name: "Healthcare",
    items: [
      { label: "Health insurance premium", value: "" },
      { label: "Prescriptions", value: "" },
      { label: "Doctor copays & visits", value: "" },
      { label: "Dental care", value: "" },
      { label: "Vision care", value: "" },
      { label: "Therapy / counseling", value: "" },
    ],
  },
  {
    name: "Daily Living",
    items: [
      { label: "Groceries", value: "" },
      { label: "Dining out", value: "" },
      { label: "Clothing", value: "" },
      { label: "Personal care / salon", value: "" },
      { label: "Gym / fitness", value: "" },
    ],
  },
  {
    name: "Insurance & Financial",
    items: [
      { label: "Life insurance", value: "" },
      { label: "Long-term care insurance", value: "" },
      { label: "Retirement savings (monthly)", value: "" },
      { label: "Emergency fund savings", value: "" },
      { label: "Credit card minimum payments", value: "" },
      { label: "Student loan payments", value: "" },
      { label: "Other debt payments", value: "" },
    ],
  },
  {
    name: "Personal & Lifestyle",
    items: [
      { label: "Subscriptions (streaming, apps)", value: "" },
      { label: "Travel / vacations", value: "" },
      { label: "Hobbies & entertainment", value: "" },
      { label: "Gifts & charity", value: "" },
      { label: "Pet expenses", value: "" },
      { label: "Education / courses", value: "" },
    ],
  },
  {
    name: "Divorce-Related Costs",
    items: [
      { label: "Attorney fees (monthly estimate)", value: "" },
      { label: "Mediator / collaborative process fees", value: "" },
      { label: "Financial advisor fees", value: "" },
      { label: "Moving expenses (one-time, amortized)", value: "" },
      { label: "New household setup costs (amortized)", value: "" },
    ],
  },
];

export default function BudgetPlanner() {
  const [income, setIncome] = useState("");
  const [alimony, setAlimony] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [budget, setBudget] = useState<BudgetCategory[]>(initialBudget);

  const updateItem = (catIdx: number, itemIdx: number, val: string) => {
    setBudget((prev) =>
      prev.map((cat, ci) =>
        ci !== catIdx
          ? cat
          : {
              ...cat,
              items: cat.items.map((item, ii) =>
                ii === itemIdx ? { ...item, value: val } : item
              ),
            }
      )
    );
  };

  const parseVal = (v: string) => {
    const n = parseFloat(v.replace(/[^0-9.-]/g, ""));
    return isNaN(n) ? 0 : n;
  };

  const totalIncome =
    parseVal(income) + parseVal(alimony) + parseVal(otherIncome);

  const totalExpenses = budget.reduce(
    (sum, cat) => sum + cat.items.reduce((s, item) => s + parseVal(item.value), 0),
    0
  );

  const surplus = totalIncome - totalExpenses;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Post-Divorce Budget Planner</h1>
      <p className="text-muted mb-8">
        Map out your monthly expenses on a single income. This helps you
        understand what you truly need — and what to negotiate for in your
        settlement.
      </p>

      {/* Income Section */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Monthly Income</h2>
        <div className="space-y-3">
          {[
            { label: "Your salary / wages (after tax)", val: income, set: setIncome },
            { label: "Expected alimony / spousal support", val: alimony, set: setAlimony },
            { label: "Other income (rental, freelance, etc.)", val: otherIncome, set: setOtherIncome },
          ].map((field) => (
            <div key={field.label} className="flex items-center gap-3">
              <label className="flex-1 text-sm">{field.label}</label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-muted text-sm">$</span>
                <input
                  type="text"
                  placeholder="0"
                  value={field.val}
                  onChange={(e) => field.set(e.target.value)}
                  className="w-32 border border-border rounded-lg pl-7 pr-3 py-2 text-sm bg-card-bg"
                />
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <span className="flex-1 text-sm font-semibold">Total Monthly Income</span>
            <span className="text-lg font-bold text-accent w-32 text-right">
              {fmt(totalIncome)}
            </span>
          </div>
        </div>
      </div>

      {/* Expense Categories */}
      <div className="space-y-8 mb-10">
        <h2 className="text-lg font-semibold">Monthly Expenses</h2>
        {budget.map((cat, catIdx) => {
          const catTotal = cat.items.reduce((s, i) => s + parseVal(i.value), 0);
          return (
            <div key={cat.name}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">{cat.name}</h3>
                <span className="text-sm text-muted">{fmt(catTotal)}</span>
              </div>
              <div className="space-y-2">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-3">
                    <label className="flex-1 text-sm text-muted">
                      {item.label}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-muted text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        placeholder="0"
                        value={item.value}
                        onChange={(e) =>
                          updateItem(catIdx, itemIdx, e.target.value)
                        }
                        className="w-28 border border-border rounded-lg pl-7 pr-3 py-2 text-sm bg-card-bg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="bg-warm-bg rounded-xl border border-border p-6 sticky bottom-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-muted">Monthly Income</p>
            <p className="text-xl font-bold text-success">{fmt(totalIncome)}</p>
          </div>
          <div>
            <p className="text-xs text-muted">Monthly Expenses</p>
            <p className="text-xl font-bold text-red-600">{fmt(totalExpenses)}</p>
          </div>
          <div>
            <p className="text-xs text-muted">
              {surplus >= 0 ? "Monthly Surplus" : "Monthly Shortfall"}
            </p>
            <p
              className={`text-xl font-bold ${
                surplus >= 0 ? "text-success" : "text-red-600"
              }`}
            >
              {fmt(surplus)}
            </p>
          </div>
        </div>
        {surplus < 0 && (
          <p className="text-sm text-red-600 text-center mt-3">
            You have a monthly shortfall. This is critical information for
            negotiating alimony and asset division.
          </p>
        )}
      </div>

      <div className="mt-8 p-6 bg-card-bg rounded-xl border border-border">
        <h3 className="font-semibold mb-2">How to use this budget</h3>
        <ul className="text-sm text-muted space-y-2 list-disc list-inside">
          <li>
            Print this and bring it to your lawyer — it demonstrates your
            genuine financial needs
          </li>
          <li>
            If you show a shortfall, it strengthens your case for spousal
            support
          </li>
          <li>
            Don&apos;t forget to include health insurance — if you&apos;re on
            your spouse&apos;s plan, you&apos;ll need your own
          </li>
          <li>
            Budget for therapy — divorce is emotionally expensive too, and it&apos;s
            money well spent
          </li>
          <li>
            Run the{" "}
            <a href="/settlement-calculator" className="text-accent underline">
              Settlement Calculator
            </a>{" "}
            to see how asset division might cover gaps
          </li>
        </ul>
      </div>
    </div>
  );
}
