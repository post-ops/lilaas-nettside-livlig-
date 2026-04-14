import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";
import { KEY_DATA_LINE } from "@/lib/site-data";

export default function ThrusterPage() {
  return (
    <main className="page-shell lively-section">
      <p className="eyebrow">Thruster Control</p>
      <h1 className="hero-title">Thruster control systems built for stable maneuvering</h1>
      <p className="hero-lead">
        Integrated control architecture for propulsion and maneuvering in operations where response stability and redundancy are essential.
      </p>

      <section className="info-panel mt-10 lively-section">
        <h2 className="text-2xl font-semibold">System Overview</h2>
        <div className="mt-6">
          <PremiumImage src="/images/thruster-system.jpg" alt="Thruster control overview" variant="section" />
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 lively-grid">
        <article className="info-panel p-5">
          <h3 className="text-xl font-semibold">Core Architecture</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Operator control interface with calibrated response</li>
            <li>- Fault-aware signal processing</li>
            <li>- Redundant command outputs</li>
            <li>- Integration with propulsion and automation layers</li>
          </ul>
        </article>
        <article className="info-panel p-5">
          <h3 className="text-xl font-semibold">Operational Fit</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Offshore support vessels</li>
            <li>- Dynamic positioning operations</li>
            <li>- High-load maneuvering in constrained waters</li>
          </ul>
        </article>
      </section>

      <section className="mt-5 grid gap-4 md:grid-cols-2 lively-grid">
        <article className="info-panel">
          <h3 className="text-xl font-semibold">Architecture</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Dual command paths</li>
            <li>- Fault-aware signal handling</li>
            <li>- Interface points for vessel automation</li>
          </ul>
        </article>
        <article className="info-panel">
          <h3 className="text-xl font-semibold">Where It Is Used</h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>- Offshore support vessels</li>
            <li>- Commercial marine bridge systems</li>
            <li>- High-duty maneuvering operations</li>
          </ul>
        </article>
      </section>

      <section className="info-panel mt-8 lively-section">
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
        Request Thruster Specification Sheet
      </Link>

      <div className="mt-8">
        <Link href="/contact" className="cta-primary w-full text-center md:w-auto">
          Book Thruster Engineering Call
        </Link>
      </div>
    </main>
  );
}
