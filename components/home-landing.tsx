import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PremiumImage } from "@/components/premium-image";
import type { ProductItem } from "@/lib/site-data";
import { applicationAreas, KEY_DATA_LINE, products } from "@/lib/site-data";

function productExploreLink(product: ProductItem) {
  if (product.category === "Thruster Control") {
    return { href: "/thruster" as const, label: "Explore Thruster Control" as const };
  }
  return { href: `/products#${product.slug}` as const, label: "Explore Product" as const };
}

export function HomeLanding() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="overflow-x-hidden">
      <section className="section-container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Industrial Control Systems</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Control levers, joysticks and thruster control systems for marine and offshore operations
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Built for precise control, high-load environments and long operational life.
            </p>
            <p className="text-sm text-slate-300">
              Used in commercial vessels, offshore operations and specialized industrial systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="w-full md:w-auto text-center rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accentHover">
                Explore Products
              </Link>
              <Link href="/contact" className="w-full md:w-auto text-center rounded-md border border-cyan-700/35 px-6 py-3 text-sm font-medium text-slate-300 hover:border-accentMid/55">
                Contact Engineering
              </Link>
            </div>
            <p className="text-sm text-slate-300">ISO 9001 Certified • DNV-Aligned • Used in Global OEM Programs</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-cyan-500/25 bg-surface shadow-card">
            <PremiumImage src="/images/bridge-control.jpg" alt="Bridge control system" variant="hero" priority />
            <div className="border-t border-cyan-800/40 px-5 py-4 md:px-6 md:py-5">
              <p className="text-xs text-slate-400">Bridge-installed control interface for vessel maneuvering.</p>
              <p className="mt-1 text-xs text-slate-400">Used in commercial and offshore vessel operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35">
        <p className="eyebrow">Core Areas</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">What We Build</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-cyan-800/35 bg-surface p-6 transition hover:scale-[1.02] hover:border-accentMid/55">
            <h3 className="text-xl font-semibold">Control Levers</h3>
            <p className="mt-3 text-slate-300">Control levers for propulsion and maneuvering systems.</p>
            <p className="mt-2 text-sm text-slate-400">Used in bridge control and vessel operations.</p>
            <Link href="/products?category=Control%20Levers" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
              Explore Products
            </Link>
          </article>
          <article className="rounded-xl border border-cyan-800/35 bg-surface p-6 transition hover:scale-[1.02] hover:border-accentMid/55">
            <h3 className="text-xl font-semibold">Precision Mechanics</h3>
            <p className="mt-3 text-slate-300">Precision mechanical assemblies for control interfaces.</p>
            <p className="mt-2 text-sm text-slate-400">Used in bridge consoles and operator stations.</p>
            <Link href="/products?category=Precision%20Mechanics" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
              Explore Products
            </Link>
          </article>
          <article className="rounded-xl border border-cyan-800/35 bg-surface p-6 transition hover:scale-[1.02] hover:border-accentMid/55">
            <h3 className="text-xl font-semibold">Thruster Control</h3>
            <p className="mt-3 text-slate-300">Integrated thruster control system.</p>
            <p className="mt-2 text-sm text-slate-400">Used in offshore and commercial marine propulsion.</p>
            <Link href="/thruster" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
              Explore Thruster Control
            </Link>
          </article>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35">
        <p className="eyebrow">Featured Products</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Selected Products</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProducts.map((product) => {
            const { href, label } = productExploreLink(product);
            return (
              <article key={product.name} className="rounded-xl border border-cyan-700/30 bg-surface p-5 transition hover:scale-[1.02] hover:border-accentMid/55">
                <PremiumImage src={product.image} alt={product.name} variant="product" />
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-sm text-slate-300">{product.whatItIs}</p>
                <p className="mt-2 text-sm text-slate-400">Used in {product.usedIn}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  {product.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <Link href={href} className="mt-4 inline-block text-sm text-link hover:text-linkHover">
                  {label}
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-slate-300">{KEY_DATA_LINE}</p>
        <Link href="/products" className="mt-8 inline-block w-full md:w-auto rounded-md bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-accentHover">
          Explore Products
        </Link>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35">
        <p className="eyebrow">Application Areas</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Where Our Systems Are Used</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {applicationAreas.map((area) => (
            <article key={area.title} className="rounded-xl border border-cyan-700/30 bg-surface p-6">
              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{area.whatItIs}</p>
              <p className="mt-2 text-sm text-slate-400">Used in {area.usedIn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35">
        <p className="eyebrow">Thruster Control</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Thruster Control Systems</h2>
        <div className="mt-8 rounded-xl border border-cyan-700/30 bg-surface p-6">
          <ul className="space-y-2 text-slate-300">
            <li>- Integrated control for propulsion and maneuvering</li>
            <li>- Stable response under high load conditions</li>
            <li>- Designed for offshore and marine environments</li>
            <li>- Interfaces for bridge and vessel control architecture</li>
          </ul>
          <div className="mt-6">
            <PremiumImage src="/images/thruster-system.jpg" alt="Thruster control system" variant="section" />
          </div>
          <p className="mt-5 text-sm text-slate-300">{KEY_DATA_LINE}</p>
          <Link href="/contact" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
            Request Specification Sheet
          </Link>
          <Link href="/thruster" className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accentHover">
            Explore Thruster Control
          </Link>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Contact Lilaas</h2>
        <p className="mt-4 text-slate-300">For technical inquiries, contact our engineering team directly.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-700/30 bg-surface p-6">
            <p className="text-slate-300">
              Phone: <a href="tel:+4741633000" className="text-link hover:text-linkHover">+47 416 33 000</a>
            </p>
            <p className="mt-3 text-slate-300">
              Email: <a href="mailto:lilaas@lilaas.no" className="text-link hover:text-linkHover">lilaas@lilaas.no</a>
            </p>
            <p className="mt-3 text-slate-300">Address: Kongeveien 75, 3188 Horten, Norway</p>
          </div>
          <div className="rounded-xl border border-cyan-700/30 bg-surface p-6">
            <p className="text-sm text-slate-300">Send Technical Request</p>
            <div className="mt-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
