 "use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { ContactForm } from "@/components/contact-form";
import { PremiumImage } from "@/components/premium-image";
import type { ProductItem } from "@/lib/site-data";
import { KEY_DATA_LINE, products } from "@/lib/site-data";

function productExploreLink(product: ProductItem) {
  if (product.category === "Thruster Control") {
    return { href: "/thruster" as const, label: "Explore Thruster Control" as const };
  }
  return { href: `/products#${product.slug}` as const, label: "Explore Product" as const };
}

export function HomeLanding() {
  const featuredProducts = products.slice(0, 4);
  const trustStats = [
    { label: "Founded", value: "1933" },
    { label: "Product families", value: "15+" },
    { label: "Global projects", value: "40+" },
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
      <section className="section-container section-spacing lively-section hero-ambient min-h-[68vh]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-7">
            <p className="eyebrow">Marine Control Expertise</p>
            <h1 className="hero-title">We deliver high quality control levers and systems, seamlessly integrated</h1>
            <p className="hero-lead">
              Lilaas develops maritime control solutions that combine mechanical precision, stable operator response and engineering support from concept to commissioning.
            </p>
            <div className="info-panel-subtle">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Quality in command</p>
              <p className="mt-1 text-sm text-slate-200">Built for propulsion, steering, thrusters and complex bridge integration.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="cta-primary w-full text-center md:w-auto">
                Request for Quote
              </Link>
              <Link href="/products" className="cta-secondary w-full text-center md:w-auto">
                Explore Control Units
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-cyan-700/35 bg-surface/80 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Built for</p>
                <p className="mt-1 text-sm text-slate-200">Commercial and offshore fleets</p>
              </div>
              <div className="rounded-lg border border-cyan-700/35 bg-surface/80 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Delivery model</p>
                <p className="mt-1 text-sm text-slate-200">Concept to lifecycle support</p>
              </div>
              <div className="rounded-lg border border-cyan-700/35 bg-surface/80 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Operating focus</p>
                <p className="mt-1 text-sm text-slate-200">Reliability and seamless integration</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-cyan-500/25 bg-surface shadow-card">
              <PremiumImage src="/images/bridge-control.jpg" alt="Bridge control system" variant="hero" priority />
              <div className="border-t border-cyan-800/40 px-5 py-4 md:px-6 md:py-5">
                <p className="text-xs text-slate-400">Bridge-installed control architecture for propulsion and maneuvering operations.</p>
                <p className="mt-1 text-xs text-slate-400">Engineered for uptime in demanding vessel programs.</p>
              </div>
            </div>
            <div className="rounded-xl border border-cyan-700/35 bg-field/70 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Trust baseline</p>
              <p className="mt-2 text-sm text-slate-300">ISO 9001 quality mindset • DNV-aligned engineering practice • Global marine programs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container section-spacing section-divider lively-section band-surface">
        <p className="eyebrow">Quality in command since 1933</p>
        <h2 className="section-title">Control technology for propulsion, steering and thrusters</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {trustStats.map((stat) => (
            <article key={stat.label} className="info-panel">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container section-spacing section-divider lively-section">
        <p className="eyebrow">Next-level control</p>
        <h2 className="section-title">Three core solution areas</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lively-grid">
          {solutionColumns.map((column, index) => (
            <article
              key={column.title}
              style={{ "--delay": `${index * 120}ms` } as CSSProperties}
              className="info-panel transition hover:border-accentMid/55"
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

      <section className="section-container section-spacing section-divider lively-section">
        <p className="eyebrow">Control units</p>
        <h2 className="section-title">Feel in control with reliable operator interfaces</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="info-panel rounded-2xl">
            <h3 className="text-2xl font-semibold">System fit first, model selection second</h3>
            <p className="mt-4 text-slate-300">
              Start from vessel profile, control architecture and duty cycle, then select the lever or joystick family that provides stable maneuvering and maintainable integration.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>- Control behavior tuned to operational context</li>
              <li>- Hardware and interface options aligned with bridge layout</li>
              <li>- Clear path from specification to commissioning support</li>
            </ul>
            <Link href="/products" className="cta-primary mt-6">
              Compare Product Families
            </Link>
          </article>
          <div className="grid gap-4">
            {featuredProducts.slice(0, 2).map((product) => {
              const { href, label } = productExploreLink(product);
              return (
                <article key={product.name} className="info-panel p-5 transition hover:border-accentMid/55">
                  <PremiumImage src={product.image} alt={product.name} variant="product" />
                  <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{product.whatItIs}</p>
                  <Link href={href} className="mt-3 inline-block text-sm text-link hover:text-linkHover">
                    {label}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
        <p className="mt-8 text-sm text-slate-300">{KEY_DATA_LINE}</p>
      </section>

      <section className="section-container section-spacing section-divider lively-section band-surface">
        <p className="eyebrow">Innovative synergy</p>
        <h2 className="section-title">Measured results in demanding vessel programs</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlightedCases.map((item) => (
            <article key={item.title} className="info-panel">
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

      <section className="section-container section-spacing section-divider lively-section">
        <p className="eyebrow">How can we assist you?</p>
        <h2 className="section-title">Talk directly with a marine control specialist</h2>
        <p className="mt-4 text-slate-300">From first concept to commissioning, our engineering team helps you define the right control solution and delivery plan.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="info-panel">
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
          <div className="info-panel">
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
