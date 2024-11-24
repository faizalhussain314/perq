import { useState } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

// Mock data - replace with actual API calls
const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    price: 134900,
    dealer: "Croma",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    name: "MacBook Air M2",
    price: 114900,
    dealer: "Amazon",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    name: "Royal Enfield Classic 350",
    price: 190000,
    dealer: "Royal Enfield",
    category: "Vehicles",
    imageUrl: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Samsung QLED 4K TV",
    price: 89900,
    dealer: "Samsung Store",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    name: "Sony PlayStation 5",
    price: 54900,
    dealer: "Croma",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    name: "Honda Activa 6G",
    price: 75000,
    dealer: "Honda",
    category: "Vehicles",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "7",
    name: "iPad Pro 12.9",
    price: 119900,
    dealer: "Apple Store",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "8",
    name: "Dell XPS 15",
    price: 224900,
    dealer: "Dell Store",
    category: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "9",
    name: "Yamaha R15 V4",
    price: 180000,
    dealer: "Yamaha",
    category: "Vehicles",
    imageUrl: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&q=80&w=800"
  }
];

const categories = ["All", "Electronics", "Vehicles", "Furniture", "Appliances"];
const dealers = ["All", "Croma", "Amazon", "Apple Store", "Samsung Store", "Honda", "Yamaha", "Royal Enfield", "Dell Store"];

export default function Purchase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDealer, setSelectedDealer] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesDealer = selectedDealer === "All" || product.dealer === selectedDealer;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDealer && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Purchase New Item</h1>
      
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dealer</label>
            <select
              value={selectedDealer}
              onChange={(e) => setSelectedDealer(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {dealers.map(dealer => (
                <option key={dealer} value={dealer}>{dealer}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}