import { Product } from "../products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      </div>
    </div>
  );
}
