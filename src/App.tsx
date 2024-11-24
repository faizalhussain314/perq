import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import EMIs from './pages/EMIs';
import Profile from './pages/Profile';
import Withdraw from './pages/salary/Withdraw';
import Repay from './pages/salary/Repay';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <Header onMenuClick={toggleSidebar} />
        <main className="pt-16 lg:pl-64">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/emis" element={<EMIs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/salary/withdraw" element={<Withdraw />} />
              <Route path="/salary/repay" element={<Repay />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;