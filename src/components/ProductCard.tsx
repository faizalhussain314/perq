import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.dealer}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">
            ₹{product.price.toLocaleString()}
          </span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}