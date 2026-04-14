import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";

export default function EngineeringPage() {
  return (
    <main className="page-shell lively-section">
      <Link href="/" className="text-sm text-slate-400 hover:text-linkHover">
        ← Back to overview
      </Link>
      <p className="eyebrow">Engineering</p>
      <h1 className="hero-title">Engineering architecture built for uptime</h1>
      <div className="info-panel mt-8">
        <PremiumImage src="/images/thruster-system.jpg" alt="Thruster control system overview" variant="section" />
        <p className="mt-3 text-sm text-slate-400">
          Thruster control system overview with modular architecture and redundant control network.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lively-grid">
        <div className="info-panel">
          <p className="text-sm font-semibold text-white">Hardware architecture</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- Modular IO and control nodes</li>
            <li>- Multi-position control capability</li>
            <li>- Integration with existing automation</li>
          </ul>
        </div>
        <div className="info-panel">
          <p className="text-sm font-semibold text-white">Signal and redundancy</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- Dual network strategy</li>
            <li>- Redundant control paths</li>
            <li>- Fault-aware signal handling</li>
          </ul>
        </div>
        <div className="info-panel">
          <p className="text-sm font-semibold text-white">Lifecycle engineering</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- {">10M"} cycle-oriented component choices</li>
            <li>- IP-rated hardware options</li>
            <li>- Designed for long lifecycle programs</li>
          </ul>
        </div>
        <div className="info-panel">
          <p className="text-sm font-semibold text-white">Compliance mindset</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- Class-aligned design process</li>
            <li>- Verification-oriented delivery</li>
            <li>- Documentation-ready integration</li>
          </ul>
        </div>
      </div>
      <div className="info-panel mt-10 lively-section">
        <p className="text-lg font-semibold text-white">Operational impact</p>
        <ul className="mt-3 space-y-1 text-sm text-slate-300">
          <li>- Reduced operator error in critical operations</li>
          <li>- Predictable system behavior under load</li>
          <li>- Lower long-term maintenance risk</li>
        </ul>
      </div>
    </main>
  );
}
