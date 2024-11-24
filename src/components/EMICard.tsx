import { EMI } from '../types';

interface EMICardProps {
  emi: EMI;
}

export default function EMICard({ emi }: EMICardProps) {
  const progress = (emi.paidAmount / emi.totalAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{emi.productName}</h3>
          <p className="text-sm text-gray-600">
            EMI: ₹{emi.monthlyPayment.toLocaleString()}/month
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          emi.status === 'active' ? 'bg-green-100 text-green-800' :
          emi.status === 'completed' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {emi.status.charAt(0).toUpperCase() + emi.status.slice(1)}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{progress.toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Paid Amount</p>
          <p className="font-semibold">₹{emi.paidAmount.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Remaining</p>
          <p className="font-semibold">₹{emi.remainingAmount.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-600">Start Date</p>
          <p className="font-semibold">{new Date(emi.startDate).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-gray-600">End Date</p>
          <p className="font-semibold">{new Date(emi.endDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}