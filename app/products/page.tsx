import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";
import type { ProductItem } from "@/lib/site-data";
import { KEY_DATA_LINE, products } from "@/lib/site-data";

const categories = ["Control Levers", "Joysticks", "Thruster Control", "Precision Mechanics"];

function productExploreLink(product: ProductItem) {
  if (product.category === "Thruster Control") {
    return { href: "/thruster" as const, label: "Explore Thruster Control" as const };
  }
  return { href: `/products#${product.slug}` as const, label: "Explore Product" as const };
}

export default function ProductsPage() {
  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Products</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Control components for marine and industrial use.</h1>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category} className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 text-sm text-slate-300">
            {category}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {products.map((product) => {
          const { href, label } = productExploreLink(product);
          return (
            <article key={product.name} id={product.slug} className="scroll-mt-28 rounded-xl border border-slate-700 bg-surface p-5">
              <PremiumImage src={product.image} alt={product.name} variant="product" />
              <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
              <p className="mt-3 text-sm text-slate-300">{product.whatItIs}</p>
              <p className="mt-2 text-sm text-slate-400">Used in {product.usedIn}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {product.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <Link href={href} className="mt-4 inline-block text-sm text-blue-300 hover:text-blue-200">
                {label}
              </Link>
            </article>
          );
        })}
      </div>
      <p className="mt-8 text-sm text-slate-300">Key Data: {KEY_DATA_LINE}</p>
      <a href="#" className="mt-4 inline-block text-sm text-blue-300 hover:text-blue-200">
        Download Specification Sheet
      </a>
    </main>
  );
}
