import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  ShoppingBag, 
  CreditCard, 
  User, 
  Wallet,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

interface MenuItem {
  icon: JSX.Element;
  label: string;
  path?: string;
  submenu?: { label: string; path: string }[];
}

export default function Sidebar({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      icon: <Home size={20} />,
      label: 'Dashboard',
      path: '/'
    },
    {
      icon: <ShoppingBag size={20} />,
      label: 'Purchase',
      path: '/purchase'
    },
    {
      icon: <CreditCard size={20} />,
      label: 'EMIs',
      path: '/emis'
    },
    {
      icon: <Wallet size={20} />,
      label: 'Salary',
      submenu: [
        { label: 'Withdraw', path: '/salary/withdraw' },
        { label: 'Repay', path: '/salary/repay' }
      ]
    },
    {
      icon: <User size={20} />,
      label: 'Profile',
      path: '/profile'
    }
  ];

  const isActive = (path: string) => location.pathname === path;
  const isSubmenuActive = (submenu?: { label: string; path: string }[]) => 
    submenu?.some(item => location.pathname === item.path);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onToggle}
      />
      <div className={`w-64 bg-white h-screen fixed left-0 top-0 shadow-lg transform transition-transform duration-200 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">perq</span>
            </Link>
            <button 
              onClick={onToggle}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                      className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isSubmenuActive(item.submenu)
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          expandedMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedMenu === item.label && (
                      <div className="ml-9 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              isActive(subItem.path)
                                ? 'bg-indigo-50 text-indigo-600'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path!)
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}