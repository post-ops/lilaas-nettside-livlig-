import { applicationAreas } from "@/lib/site-data";

export default function ApplicationsPage() {
  return (
    <main className="page-shell lively-section">
      <p className="eyebrow">Applications</p>
      <h1 className="hero-title">Operational environments where control quality defines outcomes</h1>
      <p className="hero-lead">
        Lilaas solutions are built for industries where operator confidence, repeatable response and long service windows are mandatory.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lively-grid">
        {applicationAreas.map((area) => (
          <article key={area.title} className="info-panel">
            <h2 className="text-xl font-semibold">{area.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{area.whatItIs}</p>
            <p className="mt-2 text-sm text-slate-400">Used in {area.usedIn}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
