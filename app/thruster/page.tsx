import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";
import { KEY_DATA_LINE } from "@/lib/site-data";

export default function ThrusterPage() {
  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Thruster Control</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Thruster Control Systems</h1>
      <p className="mt-4 max-w-3xl text-slate-300">Integrated thruster control systems for propulsion and maneuvering.</p>

      <section className="mt-10 rounded-xl border border-cyan-700/30 bg-surface p-6">
        <h2 className="text-2xl font-semibold">System Overview</h2>
        <div className="mt-6">
          <PremiumImage src="/images/thruster-system.jpg" alt="Thruster control overview" variant="section" />
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-5">
          <h3 className="text-xl font-semibold">System Overview</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Control interface</li>
            <li>- Signal processing</li>
            <li>- Redundant outputs</li>
            <li>- Integration with propulsion</li>
          </ul>
        </article>
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-5">
          <h3 className="text-xl font-semibold">Typical Use</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Offshore vessels</li>
            <li>- Dynamic positioning</li>
            <li>- High-load maneuvering</li>
          </ul>
        </article>
      </section>

      <section className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h3 className="text-xl font-semibold">Architecture</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Dual command paths</li>
            <li>- Fault-aware signal handling</li>
            <li>- Interface points for vessel automation</li>
          </ul>
        </article>
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h3 className="text-xl font-semibold">Where It Is Used</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Offshore support vessels</li>
            <li>- Commercial marine bridge systems</li>
            <li>- High-duty maneuvering operations</li>
          </ul>
        </article>
      </section>

      <section className="mt-8 rounded-xl border border-cyan-700/30 bg-surface p-6">
        <h3 className="text-xl font-semibold">Why It Matters</h3>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>- Reduces variation in operator input response</li>
          <li>- Supports safer vessel handling in constrained operations</li>
          <li>- Improves control continuity under demanding duty cycles</li>
        </ul>
        <div className="mt-6">
          <PremiumImage src="/images/offshore-control.jpg" alt="Offshore vessel operation" variant="section" />
        </div>
      </section>

      <p className="mt-8 text-sm text-slate-300">Key Data: {KEY_DATA_LINE}</p>
      <Link href="/contact" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
        Request Specification Sheet
      </Link>

      <div className="mt-8">
        <Link href="/contact" className="inline-block w-full md:w-auto rounded-md bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-accentHover">
          Contact Engineering
        </Link>
      </div>
    </main>
  );
}
