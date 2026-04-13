import Link from "next/link";
import type { CSSProperties } from "react";
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
  const trustPillars = [
    "Engineering partner for marine OEM and integrators",
    "Type-approved product families for demanding duty cycles",
    "From concept and design support to commissioning",
    "Service-first lifecycle mindset for long operational uptime"
  ];
  const trustStats = [
    { label: "Product families", value: "15+" },
    { label: "Primary markets", value: "4" },
    { label: "Support focus", value: "Lifecycle" },
    { label: "Engineering model", value: "DNV-aligned" }
  ];
  const solutionColumns = [
    {
      title: "Control Units",
      body: "Marine control levers and joysticks with predictable response, robust mechanics and project-ready interface options.",
      cta: "Explore Control Units",
      href: "/products?category=Control%20Levers"
    },
    {
      title: "Systems",
      body: "Integrated thruster and propulsion control systems built for stable maneuvering, redundancy and bridge-level confidence.",
      cta: "Explore Systems",
      href: "/thruster"
    },
    {
      title: "Service",
      body: "Engineering collaboration, commissioning support and long-term technical follow-up to keep vessels operational.",
      cta: "Talk to Service Team",
      href: "/contact"
    }
  ];
  const highlightedCases = [
    {
      title: "Offshore support vessel upgrade",
      result: "Reduced control response variance during low-speed maneuvering.",
      scope: "Integrated bridge lever retrofit with commissioning support."
    },
    {
      title: "Newbuild bridge integration program",
      result: "Shorter integration timeline through early engineering alignment.",
      scope: "Control units, panel interfaces and handover documentation."
    },
    {
      title: "Multi-vessel lifecycle support",
      result: "Higher operational uptime with predictable service planning.",
      scope: "Spare strategy, technical follow-up and service coordination."
    }
  ];

  return (
    <main className="overflow-x-hidden">
      <section className="section-container section-spacing lively-section hero-ambient">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Marine Control Expertise</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Premium control systems for vessels where reliability is non-negotiable
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Lilaas delivers control units, integrated systems and engineering support for commercial marine, offshore and mission-critical applications.
            </p>
            <ul className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
              {trustPillars.map((pillar) => (
                <li key={pillar}>- {pillar}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="w-full md:w-auto text-center rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accentHover">
                Request Engineering Consultation
              </Link>
              <Link href="/products" className="w-full md:w-auto text-center rounded-md border border-cyan-700/35 px-6 py-3 text-sm font-medium text-slate-300 hover:border-accentMid/55">
                Explore Product Portfolio
              </Link>
            </div>
            <p className="text-sm text-slate-300">ISO 9001 quality mindset • DNV-aligned engineering practice • Global marine programs</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-cyan-500/25 bg-surface shadow-card">
            <PremiumImage src="/images/bridge-control.jpg" alt="Bridge control system" variant="hero" priority />
            <div className="border-t border-cyan-800/40 px-5 py-4 md:px-6 md:py-5">
              <p className="text-xs text-slate-400">Bridge-installed control architecture for propulsion and maneuvering operations.</p>
              <p className="mt-1 text-xs text-slate-400">Built for uptime in commercial marine and offshore environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35 lively-section band-surface">
        <p className="eyebrow">Trusted Delivery Model</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Built for Critical Operations</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {trustStats.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-cyan-700/30 bg-surface p-6">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35 lively-section">
        <p className="eyebrow">Solutions</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Control Units, Systems and Service in One Delivery Chain</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lively-grid">
          {solutionColumns.map((column, index) => (
            <article
              key={column.title}
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              className="rounded-xl border border-cyan-800/35 bg-surface p-6 transition hover:scale-[1.02] hover:border-accentMid/55"
            >
              <h3 className="text-xl font-semibold">{column.title}</h3>
              <p className="mt-3 text-slate-300">{column.body}</p>
              <Link href={column.href} className="mt-4 inline-block text-sm text-link hover:text-linkHover">
                {column.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35 lively-section">
        <p className="eyebrow">Featured Products</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Selected Systems and Control Units</h2>
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
          Compare Product Families
        </Link>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35 lively-section band-surface">
        <p className="eyebrow">Proof</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Measured Results in Real Delivery Programs</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlightedCases.map((item) => (
            <article key={item.title} className="rounded-xl border border-cyan-700/30 bg-surface p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.result}</p>
              <p className="mt-2 text-sm text-slate-400">{item.scope}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-8 rounded-xl border border-cyan-700/30 bg-field p-6 text-slate-300">
          "Lilaas combines mechanical quality with responsive engineering support. That combination is critical when delivery windows are tight."
          <footer className="mt-3 text-sm text-slate-400">- Senior project engineer, marine integration partner</footer>
        </blockquote>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35 lively-section">
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

      <section className="section-container section-spacing border-t border-cyan-800/35 lively-section">
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
            Request System Architecture Review
          </Link>
          <Link href="/thruster" className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accentHover">
            Explore Thruster Systems
          </Link>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-cyan-800/35 lively-section">
        <p className="eyebrow">Specialist Support</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Talk to a Marine Control Specialist</h2>
        <p className="mt-4 text-slate-300">From first concept to commissioning, our engineering team helps you define the right control solution and delivery plan.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-700/30 bg-surface p-6">
            <p className="text-sm text-slate-400">Primary contact</p>
            <h3 className="mt-2 text-xl font-semibold">Arie Gerrits</h3>
            <p className="mt-1 text-sm text-slate-400">Control Systems Specialist</p>
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
