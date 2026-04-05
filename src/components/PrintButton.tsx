"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-block mb-10 text-sm text-accent border border-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors print:hidden cursor-pointer"
    >
      Print this page
    </button>
  );
}
