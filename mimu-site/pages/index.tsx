import Link from "next/link";
import { products } from "../products";
import ProductCard from "../components/ProductCard";

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center py-10">
        <h1 className="text-4xl font-light mb-4">mimu</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          手工 · 轻奢 — 每件作品皆由匠心制成。选用天然材料，简约而精致。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-medium mb-6">精选产品</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <a><ProductCard product={p} /></a>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/contact"><a className="btn">扫码联系购买</a></Link>
        </div>
      </section>
    </div>
  );
}
