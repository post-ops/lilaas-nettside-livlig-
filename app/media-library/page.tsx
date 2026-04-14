import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import Link from "next/link";
import { PremiumImage } from "@/components/premium-image";
import { products } from "@/lib/site-data";

type MediaItem = {
  src: string;
  title: string;
  filename: string;
  hash: string;
  verification: "Verified model (lilaas.no)" | "Reference / unverified model";
};

function titleFromCuratedName(filename: string): { title: string; verification: MediaItem["verification"] } {
  const name = filename.toLowerCase();
  if (name.includes("lf80")) return { title: "LF80 Rudder Control", verification: "Verified model (lilaas.no)" };
  if (name.includes("lf150")) return { title: "LF150 Rudder Control Unit", verification: "Verified model (lilaas.no)" };
  if (name.includes("lf90") || name.includes("lf120")) return { title: "LF90 / LF120 Control Lever Reference", verification: "Verified model (lilaas.no)" };
  if (name.includes("maritime")) return { title: "Maritime Operations Reference", verification: "Reference / unverified model" };
  if (name.includes("boat-at-sea")) return { title: "Boat at Sea Reference", verification: "Reference / unverified model" };
  if (name.includes("hospital")) return { title: "Medical Environment Reference", verification: "Reference / unverified model" };
  if (name.includes("thruster")) return { title: "Thruster Concept Reference", verification: "Reference / unverified model" };
  if (name.includes("joystick")) return { title: "Joystick Concept Reference", verification: "Reference / unverified model" };
  if (name.includes("precision")) return { title: "Precision Mechanics Reference", verification: "Reference / unverified model" };
  if (name.includes("steering")) return { title: "Steering Panel Reference", verification: "Reference / unverified model" };
  if (name.includes("console")) return { title: "Control Console Reference", verification: "Reference / unverified model" };
  if (name.includes("bilde_nettside_lilaas")) return { title: "Lilaas Product Family Reference", verification: "Reference / unverified model" };
  if (name.includes("image-")) return { title: "Lilaas Reference Image", verification: "Reference / unverified model" };
  return { title: "", verification: "Reference / unverified model" };
}

function toTitle(filename: string, index: number): { title: string; verification: MediaItem["verification"] } {
  const direct = titleFromCuratedName(filename);
  if (direct.title) return direct;

  const name = filename.toLowerCase();
  if (name.includes("untitled")) {
    return { title: `Lilaas Product Render ${String(index + 1).padStart(2, "0")}`, verification: "Reference / unverified model" };
  }
  if (name.startsWith("asset-")) {
    return { title: `Lilaas Asset ${name.replace("asset-", "").replace(".png", "")}`, verification: "Reference / unverified model" };
  }
  return { title: `Lilaas Image ${String(index + 1).padStart(2, "0")}`, verification: "Reference / unverified model" };
}

async function fileSha1(path: string): Promise<string> {
  const buffer = await readFile(path);
  return createHash("sha1").update(buffer).digest("hex");
}

async function loadMedia(): Promise<MediaItem[]> {
  const folders = [
    { dir: join(process.cwd(), "public", "images", "curated"), prefix: "/images/curated/" },
    { dir: join(process.cwd(), "public", "images", "imported"), prefix: "/images/imported/" }
  ];

  const items: MediaItem[] = [];
  const seenHashes = new Set<string>();
  const curatedByHash = new Map<string, { title: string; verification: MediaItem["verification"] }>();

  const curatedDirFiles = await readdir(folders[0].dir).catch(() => []);
  const curatedFiles = curatedDirFiles
    .filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b));

  for (let index = 0; index < curatedFiles.length; index += 1) {
    const file = curatedFiles[index];
    const fullPath = join(folders[0].dir, file);
    const hash = await fileSha1(fullPath);
    curatedByHash.set(hash, toTitle(file, index));
  }

  for (const folder of folders) {
    const files = await readdir(folder.dir).catch(() => []);
    const imageFiles = files.filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file)).sort((a, b) => a.localeCompare(b));

    for (let index = 0; index < imageFiles.length; index += 1) {
      const file = imageFiles[index];
      const fullPath = join(folder.dir, file);

      let named = toTitle(file, index);
      const hash = await fileSha1(fullPath);

      if (seenHashes.has(hash)) {
        continue;
      }
      seenHashes.add(hash);

      if (folder.prefix === "/images/imported/") {
        const curatedMatch = curatedByHash.get(hash);
        if (curatedMatch) {
          named = curatedMatch;
        }
      }

      items.push({
        src: `${folder.prefix}${file}`,
        filename: file,
        title: named.title,
        hash,
        verification: named.verification
      });
    }
  }

  return items;
}

export default async function MediaLibraryPage() {
  const media = await loadMedia();
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="page-shell">
      <p className="eyebrow">Media Library</p>
      <h1 className="hero-title">All uploaded images and references</h1>
      <p className="hero-lead">
        Complete image set provided for the project. Model labels are only marked as verified when directly matched against lilaas.no model pages.
      </p>
      <p className="mt-2 text-sm text-slate-400">{media.length} images available</p>

      <section className="section-divider mt-8 pt-8">
        <h2 className="text-2xl font-semibold text-slate-100 md:text-3xl">Specific Products</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-300">Concrete models shown separately for faster product lookup.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.slug} className="info-panel p-4">
              <PremiumImage src={product.image} alt={product.name} variant="product" />
              <p className="mt-3 text-sm font-semibold text-slate-100">{product.name}</p>
              <p className="mt-1 text-xs text-slate-400">{product.category}</p>
              <Link href={`/products#${product.slug}`} className="mt-3 inline-block text-sm text-link hover:text-linkHover">
                Open product
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <article key={item.src} className="info-panel p-4">
            <PremiumImage src={item.src} alt={item.title} variant="product" />
            <p className="mt-3 text-sm text-slate-300">{item.title}</p>
            <p className="mt-1 text-xs text-slate-400 break-all">{item.filename}</p>
            <p className="mt-1 text-[11px] text-slate-500">{item.hash.slice(0, 10)}</p>
            <p className="mt-2 text-xs font-semibold text-accentSoft">{item.verification}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
