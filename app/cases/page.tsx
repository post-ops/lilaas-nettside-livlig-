import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";

const cases = [
  {
    title: "Ship Bridge Control Modernization",
    image: "/images/thruster-system.jpg",
    problem: "Operator inconsistency during docking under variable sea states.",
    solution: "Calibrated control response and redundant sensing architecture.",
    outcome: "Reduced operator error and improved maneuvering predictability."
  },
  {
    title: "Offshore Command Integration",
    image: "/images/offshore-control.jpg",
    problem: "Control instability in high-duty offshore operations.",
    solution: "Custom joystick and console integration tuned to duty profile.",
    outcome: "Lower operational uncertainty and higher continuity."
  }
];

export default function CasesPage() {
  return (
    <main className="section-container section-spacing">
      <Link href="/" className="text-sm text-slate-400 hover:text-white">
        ← Back to overview
      </Link>
      <p className="eyebrow">Case Studies</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Real-world Applications</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <article key={c.title} className="rounded-xl border border-slate-800 bg-surface p-6">
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
