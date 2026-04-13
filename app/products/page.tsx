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
  const resultLabel = `${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"} shown`;

  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Products</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Control components for marine and industrial use.</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Select a category to review product families, then open a product card for technical notes and next-step contact.
      </p>
      <p className="mt-2 text-sm text-slate-400">
        Product naming aligned with provided lilaas.no references (including L01, LF70, LE90, LF120, LF180, L04, LF50, LF60).
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={category === "All" ? "/products" : `/products?category=${encodeURIComponent(category)}`}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              activeCategory === category
                ? "border-accent bg-accentSoft text-orange-100"
                : "border-cyan-700/30 bg-field/90 text-slate-300 hover:border-accentMid/55"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-400">{resultLabel}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filteredProducts.map((product) => {
          const { href, label } = productExploreLink(product);
          return (
            <article
              key={product.name}
              id={product.slug}
              className="scroll-mt-28 rounded-xl border border-cyan-700/30 bg-surface p-5 transition hover:border-accentMid/55"
            >
              <PremiumImage src={product.image} alt={product.name} variant="product" />
              <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
              <p className="mt-3 text-sm text-slate-300">{product.whatItIs}</p>
              <p className="mt-2 text-sm text-slate-400">Used in {product.usedIn}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {product.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <details className="mt-4 rounded-md border border-cyan-800/35 bg-field/70 p-3 text-sm text-slate-300">
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
                className="mt-3 inline-block rounded-md border border-accentMid/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-accentSoft hover:border-accent hover:text-orange-100"
              >
                Request Quote
              </Link>
            </article>
          );
        })}
      </div>
      <p className="mt-8 text-sm text-slate-300">Key Data: {KEY_DATA_LINE}</p>
      <Link href="/contact" className="mt-4 inline-block text-sm text-link hover:text-linkHover">
        Request Specification Sheet
      </Link>
    </main>
  );
}
