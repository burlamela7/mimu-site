import { useRouter } from "next/router";
import { products } from "../../products";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === id);

  if (!product) return <div className="max-w-6xl mx-auto px-6 py-20">未找到该商品</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
      <h1 className="text-3xl font-light mt-6">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">扫码联系下单</h3>
        <img src={product.qr} alt="QR Code" className="w-48 h-48" />
      </div>
    </div>
  );
}
