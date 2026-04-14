import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";

const cases = [
  {
    title: "Ship Bridge Control Modernization",
    image: "/images/thruster-system.jpg",
    problem: "Operator inconsistency during docking under variable sea states.",
    solution: "Calibrated control response and redundant sensing architecture.",
    outcome: "Improved maneuvering precision during low-speed critical operations."
  },
  {
    title: "Offshore Command Integration",
    image: "/images/offshore-control.jpg",
    problem: "Control instability in high-duty offshore operations.",
    solution: "Custom joystick and console integration tuned to duty profile.",
    outcome: "Higher continuity and confidence during heavy-duty offshore operations."
  }
];

export default function CasesPage() {
  return (
    <main className="page-shell lively-section">
      <Link href="/" className="text-sm text-slate-400 hover:text-linkHover">
        ← Back to overview
      </Link>
      <p className="eyebrow">Case Studies</p>
      <h1 className="hero-title">Real delivery programs and measurable outcomes</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lively-grid">
        {cases.map((c) => (
          <article key={c.title} className="info-panel">
            <h2 className="text-2xl font-semibold">{c.title}</h2>
            <div className="mt-4">
              <PremiumImage src={c.image} alt={c.title} variant="product" />
            </div>
            <p className="mt-4 text-slate-300">
              <span className="font-medium text-white">Problem:</span> {c.problem}
            </p>
            <p className="mt-2 text-slate-300">
              <span className="font-medium text-white">Solution:</span> {c.solution}
            </p>
            <p className="mt-2 text-slate-300">
              <span className="font-medium text-white">Outcome:</span> {c.outcome}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
