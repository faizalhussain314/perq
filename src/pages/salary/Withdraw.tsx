import { useState } from 'react';
import { UserProfile } from '../../types';
import WithdrawModal from '../../components/WithdrawModal';

const profile: UserProfile = {
  name: "John Doe",
  employeeId: "EMP123",
  department: "Engineering",
  perqScore: 750,
  monthlySalary: 85000,
  availableLimit: 680000,
  email: "john.doe@company.com",
  joinDate: "2022-01-15",
  daysWorked: 15,
  availableWithdrawal: 42500,
  pendingRepayment: 0
};

export default function Withdraw() {
  const [amount, setAmount] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const maxAmount = profile.availableWithdrawal;
  const progress = (profile.daysWorked / 30) * 100;

  const handleWithdraw = () => {
    setShowModal(true);
    setAmount(0);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Salary Withdrawal</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Days Worked</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{profile.daysWorked}/30 days ({progress.toFixed(0)}%)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Available for Withdrawal</h3>
            <p className="text-3xl font-bold text-indigo-600">
              ₹{profile.availableWithdrawal.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Based on {profile.daysWorked} days worked this month
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Request Withdrawal</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount to Withdraw
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">₹</span>
              </div>
              <input
                type="number"
                max={maxAmount}
                value={amount}
                onChange={(e) => setAmount(Math.min(Number(e.target.value), maxAmount))}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Withdrawal Terms</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Amount will be credited within 24 hours</li>
              <li>• Repayment will be deducted from your next salary</li>
              <li>• Early repayment is available through the Repay section</li>
            </ul>
          </div>

          <button
            onClick={handleWithdraw}
            disabled={amount <= 0 || amount > maxAmount}
            className={`w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
              ${amount > 0 && amount <= maxAmount
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-300 cursor-not-allowed'
              }`}
          >
            Request Withdrawal
          </button>
        </div>
      </div>

      <WithdrawModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}