import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-500/35 bg-field/35">
      <div className="section-container grid gap-10 py-14 text-sm text-slate-400 md:grid-cols-4">
        <div>
          <p className="text-base font-semibold text-slate-100">Lilaas</p>
          <p className="mt-3">Control levers, integrated systems and engineering support for demanding maritime operations.</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-300">Quality in command</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-100/90">Solutions</p>
          <div className="mt-3 space-y-2">
            <Link href="/products" className="block hover:text-linkHover">Control Units</Link>
            <Link href="/thruster" className="block hover:text-linkHover">Systems</Link>
            <Link href="/applications" className="block hover:text-linkHover">Applications</Link>
            <Link href="/media-library" className="block hover:text-linkHover">Media Library</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-100/90">Company</p>
          <div className="mt-3 space-y-2">
            <Link href="/about" className="block hover:text-linkHover">About Lilaas</Link>
            <Link href="/engineering" className="block hover:text-linkHover">Engineering</Link>
            <Link href="/cases" className="block hover:text-linkHover">Case Studies</Link>
            <Link href="/contact" className="block hover:text-linkHover">Service and Support</Link>
            <Link href="/process" className="block hover:text-linkHover">How We Start</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-100/90">Contact</p>
          <p className="mt-3">
            Phone: <a href="tel:+4741633000" className="hover:text-linkHover">+47 416 33 000</a>
          </p>
          <p className="mt-2">
            Email: <a href="mailto:lilaas@lilaas.no" className="hover:text-linkHover">lilaas@lilaas.no</a>
          </p>
          <p className="mt-2">Kongeveien 75, 3188 Horten, Norway</p>
          <p className="mt-3 text-xs text-slate-500">Mon-Fri 08:00-16:00 CET</p>
        </div>
      </div>

      <div className="section-container border-t border-slate-500/25 py-5 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Lilaas. Marine control systems, engineering support and precision mechanics.</p>
      </div>
    </footer>
  );
}
