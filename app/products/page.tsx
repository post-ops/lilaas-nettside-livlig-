import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";
import type { ProductItem } from "@/lib/site-data";
import { KEY_DATA_LINE, products } from "@/lib/site-data";

const categories = ["All", "Control Levers", "Joysticks", "Thruster Control", "Precision Mechanics"] as const;
type Category = (typeof categories)[number];
type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

function productExploreLink(product: ProductItem) {
  if (product.category === "Thruster Control") {
    return { href: "/thruster" as const, label: "Explore Thruster Control" as const };
  }
  return { href: `/products#${product.slug}` as const, label: "Explore Product" as const };
}

function resolveCategory(value?: string): Category {
  if (value && categories.includes(value as Category)) {
    return value as Category;
  }
  return "All";
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const activeCategory = resolveCategory(params.category);
  const filteredProducts = products.filter((product) => activeCategory === "All" || product.category === activeCategory);
  const visibleCategories = activeCategory === "All" ? categories.filter((c) => c !== "All") : [activeCategory];
  const resultLabel = `${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"} available`;

  return (
    <main className="page-shell lively-section">
      <p className="eyebrow">Products</p>
      <h1 className="hero-title">Control units built for maritime performance and reliability</h1>
      <p className="hero-lead">
        Select a category to compare product families, then request engineering guidance for system fit, integration scope and delivery timeline.
      </p>
      <p className="mt-2 text-sm text-slate-400">
        Built for repeatable response, maintainability and long lifecycle performance across vessel classes.
      </p>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <Link
            key={category}
            href={category === "All" ? "/products" : `/products?category=${encodeURIComponent(category)}`}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              activeCategory === category
                ? "border-accent bg-accent/25 text-slate-100 shadow-[0_0_16px_rgba(148,163,184,0.35)]"
                : "border-slate-500/35 bg-field/90 text-slate-200 hover:border-accentMid/80"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-400">{resultLabel}</p>
      <section className="section-divider mt-8 pt-8">
        <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">Product Categories</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.filter((c) => c !== "All").map((category) => {
            const count = products.filter((p) => p.category === category).length;
            return (
              <article key={`category-${category}`} className="info-panel p-4">
                <p className="text-sm uppercase tracking-[0.1em] text-slate-400">{category}</p>
                <p className="mt-2 text-sm text-slate-300">{count} products</p>
                <Link
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="mt-3 inline-block text-sm font-medium text-link hover:text-linkHover"
                >
                  Open category
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <div className="info-panel-subtle mt-6 text-sm text-slate-300">
        Need help narrowing options? Share vessel type and control scope, and we recommend the most relevant product path.
        <Link href="/contact" className="ml-1 font-medium text-link hover:text-linkHover">
          Talk to engineering.
        </Link>
      </div>

      <div className="mt-10 space-y-10">
        {visibleCategories.map((category) => {
          const categoryProducts = filteredProducts.filter((product) => product.category === category);
          if (!categoryProducts.length) return null;

          return (
            <section key={category} className="section-divider pt-8">
              <div className="mb-5 flex items-end justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">{category}</h2>
                <p className="text-sm text-slate-400">{categoryProducts.length} products</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lively-grid">
                {categoryProducts.map((product) => {
                  const { href, label } = productExploreLink(product);
                  return (
                    <article key={product.name} id={product.slug} className="info-panel scroll-mt-28 p-5 transition hover:border-accentMid/55">
                      <PremiumImage src={product.image} alt={product.name} variant="product" />
                      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                      <p className="mt-3 text-sm text-slate-300">{product.whatItIs}</p>
                      <p className="mt-2 text-sm text-slate-400">Used in {product.usedIn}</p>
                      <ul className="mt-3 space-y-1 text-sm text-slate-300">
                        {product.specs.map((spec) => (
                          <li key={spec}>{spec}</li>
                        ))}
                      </ul>
                      <details className="mt-4 rounded-md border border-slate-500/35 bg-field/70 p-3 text-sm text-slate-200">
                        <summary className="cursor-pointer font-medium text-accentSoft">Read Technical Notes</summary>
                        <p className="mt-2 text-slate-300">
                          {product.name} is configured for {product.usedIn.toLowerCase()}
                        </p>
                        <p className="mt-1 text-slate-400">
                          Contact engineering to receive model-specific electrical options, panel cut-out details, and integration support.
                        </p>
                      </details>
                      <Link href={href} className="mt-4 inline-block text-sm font-medium text-link hover:text-linkHover">
                        {label}
                      </Link>
                      <Link
                        href="/contact"
                        className="mt-3 inline-block rounded-md border border-accentMid/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-accentSoft hover:border-accent hover:text-slate-100"
                      >
                        Request Engineering Quote
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <p className="mt-8 text-sm text-slate-300">Key Data: {KEY_DATA_LINE}</p>
      <Link href="/contact" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
        Request Product Specification Pack
      </Link>
    </main>
  );
}
