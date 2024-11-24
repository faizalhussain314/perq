import { useState } from 'react';
import { EMI } from '../types';
import EMICard from '../components/EMICard';

// Mock data - replace with actual API calls
const allEMIs: EMI[] = [
  {
    id: "1",
    productName: "iPhone 15 Pro",
    totalAmount: 120000,
    paidAmount: 40000,
    remainingAmount: 80000,
    monthlyPayment: 10000,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "active"
  },
  {
    id: "2",
    productName: "MacBook Air M2",
    totalAmount: 99900,
    paidAmount: 99900,
    remainingAmount: 0,
    monthlyPayment: 8325,
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    status: "completed"
  },
  {
    id: "3",
    productName: "Royal Enfield Classic 350",
    totalAmount: 190000,
    paidAmount: 0,
    remainingAmount: 190000,
    monthlyPayment: 15834,
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    status: "pending"
  }
];

export default function EMIs() {
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'completed' | 'pending'>('all');
  
  const filteredEMIs = allEMIs.filter(emi => 
    statusFilter === 'all' || emi.status === statusFilter
  );

  const totalEMIAmount = allEMIs.reduce((sum, emi) => sum + emi.totalAmount, 0);
  const totalPaidAmount = allEMIs.reduce((sum, emi) => sum + emi.paidAmount, 0);
  const totalRemainingAmount = allEMIs.reduce((sum, emi) => sum + emi.remainingAmount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">EMI Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500">Total EMI Amount</h3>
          <p className="text-2xl font-bold text-gray-900">₹{totalEMIAmount.toLocaleString()}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Paid</h3>
          <p className="text-2xl font-bold text-green-600">₹{totalPaidAmount.toLocaleString()}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Remaining</h3>
          <p className="text-2xl font-bold text-indigo-600">₹{totalRemainingAmount.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All EMIs</option>
          <option value="active">Active EMIs</option>
          <option value="completed">Completed EMIs</option>
          <option value="pending">Pending EMIs</option>
        </select>
      </div>
      
      <div className="space-y-6">
        {filteredEMIs.map(emi => (
          <EMICard key={emi.id} emi={emi} />
        ))}
      </div>
    </div>
  );
}