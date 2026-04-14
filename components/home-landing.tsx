 "use client";

import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";
import { products } from "@/lib/site-data";

export function HomeLanding() {
  const featuredUnits = products.filter((item) => item.category === "Control Levers").slice(0, 2);

  return (
    <main className="overflow-x-hidden">
      <section className="section-container section-spacing lively-section hero-ambient min-h-[68vh]">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-7">
            <p className="eyebrow">Beyond excellence</p>
            <h1 className="hero-title">We deliver high quality control levers and systems, seamlessly integrated</h1>
            <p className="hero-lead">
              Lilaas develops maritime control solutions that combine mechanical precision, stable operator response and engineering support from concept to commissioning.
            </p>
            <div className="info-panel-subtle flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Scroll</p>
                <p className="mt-1 text-sm text-slate-200">Built for propulsion, steering, thrusters and complex bridge integration.</p>
              </div>
              <span className="live-chip">
                <span className="live-dot" />
                Live
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="cta-primary w-full text-center md:w-auto">
                Request for Quote
              </Link>
              <Link href="/products" className="cta-secondary w-full text-center md:w-auto">
                Explore Control Units
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="hero-image-live relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-surface shadow-card">
              <div className="hero-orbit" />
              <div className="hero-orbit-fast" />
              <div className="hero-orbit-slow" />
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
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="info-panel">
            <p className="text-slate-300">
              Founded in 1933, Lilaas is a Norwegian manufacturer of high-quality control solutions for maritime operations.
              We deliver proven systems for propulsion, steering and thrusters, with strong focus on reliability and integration quality.
            </p>
          </div>
          <blockquote className="info-panel">
            <p className="text-slate-300">
              "We selected Lilaas as a strategic supplier based on collaboration, reliability and innovation."
            </p>
            <footer className="mt-3 text-sm text-slate-400">- Marine integration partner</footer>
          </blockquote>
        </div>
      </section>

      <section className="section-container section-spacing section-divider lively-section">
        <p className="eyebrow">Next-level control</p>
        <h2 className="section-title">Maximize efficiency through systems, synergy and control units</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Unlock vessel performance with integrated solutions where every component works in harmony.
        </p>
        <div className="mt-8 overflow-hidden border-y border-cyan-900/45 bg-field/65 py-3">
          <div className="signal-marquee whitespace-nowrap text-sm uppercase tracking-[0.12em] text-cyan-100/90">
            <span className="mx-8">Mission-critical vessel operations</span>
            <span className="mx-8">Integrated control levers and systems</span>
            <span className="mx-8">Engineering-led delivery and support</span>
            <span className="mx-8">Mission-critical vessel operations</span>
            <span className="mx-8">Integrated control levers and systems</span>
            <span className="mx-8">Engineering-led delivery and support</span>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="info-panel">
            <h3 className="text-xl font-semibold">Systems</h3>
            <p className="mt-3 text-slate-300">Optimized performance with integrated propulsion and thruster architecture.</p>
            <Link href="/thruster" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
              Read more
            </Link>
          </article>
          <article className="info-panel">
            <h3 className="text-xl font-semibold">Synergy</h3>
            <p className="mt-3 text-slate-300">Everything is connected across bridge controls, operator interfaces and service lifecycle.</p>
            <Link href="/engineering" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
              Read more
            </Link>
          </article>
          <article className="info-panel">
            <h3 className="text-xl font-semibold">Control units</h3>
            <p className="mt-3 text-slate-300">Feel in control with robust marine levers and joystick families for demanding duty cycles.</p>
            <Link href="/products?category=Control%20Levers" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
              Read more
            </Link>
          </article>
        </div>
      </section>

      <section className="section-container section-spacing section-divider lively-section">
        <p className="eyebrow">Arie Gerrits</p>
        <h2 className="section-title">How can I assist you?</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="info-panel">
            <p className="text-slate-300">
              With market expertise and project insight, our team helps you select the right control levers tailored to your vessel and integration scope.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="cta-primary">
                Request for quote
              </Link>
              <Link href="/contact" className="cta-secondary">
                Frequently Asked Questions
              </Link>
            </div>
          </article>
          <article className="info-panel">
            <p className="text-sm text-slate-400">Primary contact</p>
            <h3 className="mt-2 text-xl font-semibold">Arie Gerrits</h3>
            <p className="mt-1 text-sm text-slate-400">Control Systems Specialist</p>
            <p className="mt-3 text-slate-300">
              Phone: <a href="tel:+4741633000" className="text-link hover:text-linkHover">+47 416 33 000</a>
            </p>
            <p className="mt-2 text-slate-300">
              Email: <a href="mailto:lilaas@lilaas.no" className="text-link hover:text-linkHover">lilaas@lilaas.no</a>
            </p>
          </article>
        </div>
      </section>

      <section className="section-container section-spacing section-divider lively-section band-surface">
        <p className="eyebrow">Research & Development</p>
        <h2 className="section-title">Innovations to boost tomorrow's maritime solutions</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="info-panel">
            <PremiumImage src="/images/offshore-control.jpg" alt="Maritime innovation" variant="section" />
          </div>
          <div className="info-panel">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Experienced innovators</p>
            <h3 className="mt-2 text-2xl font-semibold">Our passion for technology drives highest quality</h3>
            <p className="mt-4 text-slate-300">
              Lilaas continuously develops reliable and high-performance control solutions that meet evolving maritime demands.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className="cta-secondary">
                More about us
              </Link>
              <Link href="/cases" className="cta-secondary">
                Latest news
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container section-spacing section-divider lively-section">
        <p className="eyebrow">Thrusted by many</p>
        <h2 className="section-title">Trusted delivery in mission-critical maritime programs</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredUnits.map((product) => (
            <article key={product.slug} className="info-panel">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{product.whatItIs}</p>
              <Link href={`/products#${product.slug}`} className="mt-4 inline-block text-sm text-link hover:text-linkHover">
                Explore product
              </Link>
            </article>
          ))}
          <article className="info-panel">
            <h3 className="text-xl font-semibold">Talk directly with engineering</h3>
            <p className="mt-3 text-sm text-slate-300">
              Share vessel profile, integration scope and timeline to receive tailored recommendation.
            </p>
            <Link href="/contact" className="cta-primary mt-5">
              Contact team
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
