export default function AboutPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Company</p>
      <h1 className="hero-title">Engineering confidence for critical maritime operations</h1>
      <p className="hero-lead">
        Lilaas develops and delivers premium control solutions where predictable response, uptime and long service life are essential.
        We partner with shipyards, integrators and OEM teams from early concept through commissioning and lifecycle support.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="info-panel">
          <h2 className="text-xl font-semibold">Positioning</h2>
          <p className="mt-3 text-sm text-slate-300">Premium supplier of marine control units, system integration and precision mechanics.</p>
          <p className="mt-2 text-sm text-slate-400">Focused on high-duty operations where reliability directly impacts vessel performance.</p>
        </article>
        <article className="info-panel">
          <h2 className="text-xl font-semibold">Delivery scope</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>- Control levers and joysticks</li>
            <li>- Thruster control systems</li>
            <li>- Precision mechanics and engineered assemblies</li>
            <li>- Engineering collaboration and commissioning support</li>
          </ul>
        </article>
        <article className="info-panel">
          <h2 className="text-xl font-semibold">Core markets</h2>
          <p className="mt-3 text-sm text-slate-300">Maritime, defence, medical and space-related technology programs.</p>
          <p className="mt-2 text-sm text-slate-400">Typical use cases include bridge systems, propulsion control desks and specialized operator interfaces.</p>
        </article>
        <article className="info-panel">
          <h2 className="text-xl font-semibold">Engineering principles</h2>
          <p className="mt-3 text-sm text-slate-300">Design for repeatability, maintainability and stable operator response under load.</p>
          <p className="mt-2 text-sm text-slate-400">Built to perform in continuous-duty and harsh-environment installations.</p>
        </article>
      </div>
    </main>
  );
}
