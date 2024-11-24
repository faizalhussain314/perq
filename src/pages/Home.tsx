import { UserProfile, EMI } from '../types';
import PerqScoreCard from '../components/PerqScoreCard';
import EMICard from '../components/EMICard';

// Mock data - replace with actual API calls
const userProfile: UserProfile = {
  name: "John Doe",
  employeeId: "EMP123",
  department: "Engineering",
  perqScore: 750,
  monthlySalary: 85000,
  availableLimit: 680000,
  email: "john.doe@company.com",
  joinDate: "2022-01-15"
};

const recentEMIs: EMI[] = [
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
  // Add more EMIs as needed
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Welcome back, {userProfile.name}!
          </h1>
          
          <PerqScoreCard 
            score={userProfile.perqScore}
            availableLimit={userProfile.availableLimit}
            monthlySalary={userProfile.monthlySalary}
          />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Active EMIs</h2>
            <div className="space-y-6">
              {recentEMIs.map(emi => (
                <EMICard key={emi.id} emi={emi} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Employee ID</p>
                <p className="font-medium">{userProfile.employeeId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Department</p>
                <p className="font-medium">{userProfile.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Join Date</p>
                <p className="font-medium">
                  {new Date(userProfile.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}