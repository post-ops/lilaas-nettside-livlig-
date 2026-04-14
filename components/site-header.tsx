import Link from "next/link";

const navItems = [
  { href: "/products", label: "Control Units" },
  { href: "/thruster", label: "Systems" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "Company" },
  { href: "/media-library", label: "Library" },
  { href: "/contact", label: "Service" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-500/40 bg-background/95">
      <div className="section-container flex min-h-20 items-center justify-between gap-6 py-3">
        <div className="flex items-end gap-4">
          <Link href="/" className="text-lg font-semibold tracking-[0.03em] text-slate-100">
            Lilaas
          </Link>
          <p className="hidden pb-0.5 text-[11px] uppercase tracking-[0.22em] text-slate-300/90 md:block">Quality in command</p>
        </div>
        <nav className="hidden items-center justify-end gap-x-6 text-[13px] text-slate-200/90 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="uppercase tracking-[0.08em] transition hover:text-orange-300">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="cta-primary px-4 py-2 text-xs uppercase tracking-[0.1em]">
            Request Quote
          </Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-orange-500/60 bg-orange-500/10 px-3 py-2 text-xs uppercase tracking-[0.1em] text-slate-100">
            Menu
          </summary>
          <div className="menu-panel absolute right-0 mt-2 min-w-56 rounded-lg border border-slate-500/60 bg-field/95 p-3 shadow-card">
            <div className="flex flex-col gap-2 text-sm text-slate-100/95">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-2 py-1.5 transition hover:bg-slate-500/20 hover:text-slate-100">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="cta-primary mt-1 text-center text-xs uppercase tracking-[0.1em]">
                Request Quote
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
