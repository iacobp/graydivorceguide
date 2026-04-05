"use client";

import { useState } from "react";

interface AssetRow {
  name: string;
  value: string;
  owner: "joint" | "yours" | "spouse";
}

interface DebtRow {
  name: string;
  value: string;
  owner: "joint" | "yours" | "spouse";
}

export default function SettlementCalculator() {
  const [assets, setAssets] = useState<AssetRow[]>([
    { name: "Primary home equity", value: "", owner: "joint" },
    { name: "Retirement accounts (yours)", value: "", owner: "yours" },
    { name: "Retirement accounts (spouse)", value: "", owner: "spouse" },
    { name: "Savings & investments", value: "", owner: "joint" },
    { name: "Vehicles", value: "", owner: "joint" },
  ]);

  const [debts, setDebts] = useState<DebtRow[]>([
    { name: "Mortgage remaining", value: "", owner: "joint" },
    { name: "Credit card debt", value: "", owner: "joint" },
    { name: "Auto loans", value: "", owner: "joint" },
    { name: "Other debts", value: "", owner: "joint" },
  ]);

  const [splitPercent, setSplitPercent] = useState(50);

  const addAsset = () =>
    setAssets([...assets, { name: "", value: "", owner: "joint" }]);
  const addDebt = () =>
    setDebts([...debts, { name: "", value: "", owner: "joint" }]);

  const updateAsset = (idx: number, field: keyof AssetRow, val: string) => {
    setAssets((prev) =>
      prev.map((a, i) => (i === idx ? { ...a, [field]: val } : a))
    );
  };

  const updateDebt = (idx: number, field: keyof DebtRow, val: string) => {
    setDebts((prev) =>
      prev.map((d, i) => (i === idx ? { ...d, [field]: val } : d))
    );
  };

  const removeAsset = (idx: number) =>
    setAssets((prev) => prev.filter((_, i) => i !== idx));
  const removeDebt = (idx: number) =>
    setDebts((prev) => prev.filter((_, i) => i !== idx));

  const parseVal = (v: string) => {
    const n = parseFloat(v.replace(/[^0-9.-]/g, ""));
    return isNaN(n) ? 0 : n;
  };

  const totalAssets = assets.reduce((sum, a) => sum + parseVal(a.value), 0);
  const totalDebts = debts.reduce((sum, d) => sum + parseVal(d.value), 0);
  const netMarital = totalAssets - totalDebts;
  const yourShare = netMarital * (splitPercent / 100);
  const spouseShare = netMarital * ((100 - splitPercent) / 100);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Settlement Calculator</h1>
      <p className="text-muted mb-8">
        Estimate how assets and debts might be divided. This is a starting point
        for understanding — not legal advice. Your state&apos;s laws and your
        specific circumstances will determine the actual split.
      </p>

      {/* Assets */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Assets</h2>
        <div className="space-y-3">
          {assets.map((asset, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Asset name"
                value={asset.name}
                onChange={(e) => updateAsset(idx, "name", e.target.value)}
                className="flex-1 border border-border rounded-lg px-3 py-2 text-sm bg-card-bg"
              />
              <div className="relative">
                <span className="absolute left-3 top-2 text-muted text-sm">$</span>
                <input
                  type="text"
                  placeholder="0"
                  value={asset.value}
                  onChange={(e) => updateAsset(idx, "value", e.target.value)}
                  className="w-32 border border-border rounded-lg pl-7 pr-3 py-2 text-sm bg-card-bg"
                />
              </div>
              <select
                value={asset.owner}
                onChange={(e) =>
                  updateAsset(idx, "owner", e.target.value)
                }
                className="border border-border rounded-lg px-2 py-2 text-sm bg-card-bg"
              >
                <option value="joint">Joint</option>
                <option value="yours">Yours</option>
                <option value="spouse">Spouse</option>
              </select>
              <button
                onClick={() => removeAsset(idx)}
                className="text-muted hover:text-red-500 text-sm px-1"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addAsset}
          className="mt-3 text-sm text-accent hover:underline"
        >
          + Add asset
        </button>
      </div>

      {/* Debts */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Debts</h2>
        <div className="space-y-3">
          {debts.map((debt, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Debt name"
                value={debt.name}
                onChange={(e) => updateDebt(idx, "name", e.target.value)}
                className="flex-1 border border-border rounded-lg px-3 py-2 text-sm bg-card-bg"
              />
              <div className="relative">
                <span className="absolute left-3 top-2 text-muted text-sm">$</span>
                <input
                  type="text"
                  placeholder="0"
                  value={debt.value}
                  onChange={(e) => updateDebt(idx, "value", e.target.value)}
                  className="w-32 border border-border rounded-lg pl-7 pr-3 py-2 text-sm bg-card-bg"
                />
              </div>
              <select
                value={debt.owner}
                onChange={(e) =>
                  updateDebt(idx, "owner", e.target.value)
                }
                className="border border-border rounded-lg px-2 py-2 text-sm bg-card-bg"
              >
                <option value="joint">Joint</option>
                <option value="yours">Yours</option>
                <option value="spouse">Spouse</option>
              </select>
              <button
                onClick={() => removeDebt(idx)}
                className="text-muted hover:text-red-500 text-sm px-1"
              >
                x
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addDebt}
          className="mt-3 text-sm text-accent hover:underline"
        >
          + Add debt
        </button>
      </div>

      {/* Split slider */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Division Split</h2>
        <p className="text-sm text-muted mb-3">
          Most states use &quot;equitable distribution&quot; (fair, not necessarily 50/50).
          Community property states default to 50/50. Adjust the slider to model
          different scenarios.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted w-16">You: {splitPercent}%</span>
          <input
            type="range"
            min={0}
            max={100}
            value={splitPercent}
            onChange={(e) => setSplitPercent(Number(e.target.value))}
            className="flex-1 accent-accent"
          />
          <span className="text-sm text-muted w-20">
            Spouse: {100 - splitPercent}%
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="bg-warm-bg rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold mb-4">Estimated Settlement</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-muted">Total Assets</p>
            <p className="text-2xl font-bold text-foreground">{fmt(totalAssets)}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Total Debts</p>
            <p className="text-2xl font-bold text-red-600">{fmt(totalDebts)}</p>
          </div>
          <div>
            <p className="text-sm text-muted">Net Marital Estate</p>
            <p className={`text-2xl font-bold ${netMarital >= 0 ? "text-success" : "text-red-600"}`}>
              {fmt(netMarital)}
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <div className="bg-card-bg rounded-lg p-4 border border-border">
            <p className="text-sm text-muted">Your Estimated Share</p>
            <p className="text-3xl font-bold text-accent">{fmt(yourShare)}</p>
            <p className="text-xs text-muted mt-1">{splitPercent}% of net estate</p>
          </div>
          <div className="bg-card-bg rounded-lg p-4 border border-border">
            <p className="text-sm text-muted">Spouse&apos;s Estimated Share</p>
            <p className="text-3xl font-bold text-foreground">{fmt(spouseShare)}</p>
            <p className="text-xs text-muted mt-1">{100 - splitPercent}% of net estate</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-card-bg rounded-xl border border-border">
        <h3 className="font-semibold mb-2">Important context</h3>
        <ul className="text-sm text-muted space-y-2 list-disc list-inside">
          <li>
            This is a simplified estimate. Real settlements consider
            earning capacity, length of marriage, health, and more.
          </li>
          <li>
            Retirement accounts may require a QDRO (Qualified Domestic
            Relations Order) to divide — ask your lawyer.
          </li>
          <li>
            Hidden assets are common in gray divorce. If numbers don&apos;t
            add up, your lawyer can request financial discovery.
          </li>
          <li>
            Use our{" "}
            <a href="/asset-checklist" className="text-accent underline">
              Asset Checklist
            </a>{" "}
            to make sure you haven&apos;t missed anything.
          </li>
        </ul>
      </div>
    </div>
  );
}
