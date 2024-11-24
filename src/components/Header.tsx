import { Bell, Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm fixed top-0 right-0 left-0 z-30">
      <div className="h-16 px-4 flex items-center justify-between lg:justify-end">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>

          <Link 
            to="/purchase" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Purchase New Item
          </Link>
          
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
            <User className="h-5 w-5 text-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}