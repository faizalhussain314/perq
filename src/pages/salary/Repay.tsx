import { useState } from 'react';
import { SalaryWithdrawal, RepaymentHistory } from '../../types';

const withdrawals: SalaryWithdrawal[] = [
  {
    id: "1",
    amount: 42500,
    date: "2024-03-15",
    status: "approved",
    daysWorked: 15,
    repaymentDate: "2024-03-31"
  }
];

const repayments: RepaymentHistory[] = [
  {
    id: "1",
    withdrawalId: "1",
    amount: 42500,
    date: "2024-03-31",
    status: "pending"
  }
];

export default function Repay() {
  const [selectedWithdrawal, setSelectedWithdrawal] = useState<string>("");

  const totalPending = withdrawals.reduce((sum, w) => 
    w.status === "approved" ? sum + w.amount : sum, 0
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Salary Repayment</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Pending Repayment</h3>
        <p className="text-3xl font-bold text-indigo-600">₹{totalPending.toLocaleString()}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Withdrawals</h3>
        
        <div className="space-y-4">
          {withdrawals.map(withdrawal => (
            <div 
              key={withdrawal.id}
              className="border rounded-lg p-4 space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">₹{withdrawal.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">
                    Withdrawn on {new Date(withdrawal.date).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  withdrawal.status === 'approved' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {withdrawal.status.charAt(0).toUpperCase() + withdrawal.status.slice(1)}
                </span>
              </div>

              <div className="text-sm text-gray-600">
                <p>Days Worked: {withdrawal.daysWorked}</p>
                <p>Repayment Due: {new Date(withdrawal.repaymentDate).toLocaleDateString()}</p>
              </div>

              <button
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Repay Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Repayment History</h3>
        
        <div className="space-y-4">
          {repayments.map(repayment => (
            <div 
              key={repayment.id}
              className="border rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">₹{repayment.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">
                  {new Date(repayment.date).toLocaleDateString()}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                repayment.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {repayment.status.charAt(0).toUpperCase() + repayment.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}