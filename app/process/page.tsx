import Link from "next/link";

const steps = [
  "Initial Technical Assessment",
  "Requirement Alignment",
  "Engineering Proposal"
];

const outputs = [
  "Technical consultation with engineering scope",
  "System evaluation and integration alignment",
  "Specification path and implementation recommendation"
];

export default function ProcessPage() {
  return (
    <main className="page-shell lively-section">
      <Link href="/" className="text-sm text-slate-400 hover:text-linkHover">
        ← Back to overview
      </Link>
      <p className="eyebrow">Engagement</p>
      <h1 className="hero-title">How collaboration starts</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3 lively-grid">
        {steps.map((step, i) => (
          <div key={step} className="info-panel">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step {i + 1}</p>
            <p className="mt-3 text-lg font-semibold">{step}</p>
          </div>
        ))}
      </div>
      <h2 className="mt-12 text-2xl font-semibold md:text-3xl">What you receive in the first phase</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lively-grid">
        {outputs.map((item) => (
          <div key={item} className="info-panel">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
