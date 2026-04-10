import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";

export default function EngineeringPage() {
  return (
    <main className="section-container section-spacing">
      <Link href="/" className="text-sm text-slate-400 hover:text-white">
        ← Back to overview
      </Link>
      <p className="eyebrow">Engineering</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Engineering Depth</h1>
      <div className="mt-8 rounded-xl border border-slate-800 bg-surface p-6">
        <PremiumImage src="/images/thruster-system.jpg" alt="Thruster control system overview" variant="section" />
        <p className="mt-3 text-sm text-slate-400">
          Thruster control system overview with modular architecture and redundant control network.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-surface p-6">
          <p className="text-sm font-semibold text-white">Hardware architecture</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- Modular IO and control nodes</li>
            <li>- Multi-position control capability</li>
            <li>- Integration with existing automation</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-surface p-6">
          <p className="text-sm font-semibold text-white">Signal and redundancy</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- Dual network strategy</li>
            <li>- Redundant control paths</li>
            <li>- Fault-aware signal handling</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-surface p-6">
          <p className="text-sm font-semibold text-white">Lifecycle engineering</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- {">10M"} cycle-oriented component choices</li>
            <li>- IP-rated hardware options</li>
            <li>- Designed for long lifecycle programs</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-surface p-6">
          <p className="text-sm font-semibold text-white">Compliance mindset</p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>- Class-aligned design process</li>
            <li>- Verification-oriented delivery</li>
            <li>- Documentation-ready integration</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 rounded-xl border border-slate-800 bg-surface p-6">
        <p className="text-lg font-semibold text-white">What this means in practice</p>
        <ul className="mt-3 space-y-1 text-sm text-slate-300">
          <li>- Reduced operator error in critical operations</li>
          <li>- Predictable system behavior under load</li>
          <li>- Lower long-term maintenance risk</li>
        </ul>
      </div>
    </main>
  );
}
