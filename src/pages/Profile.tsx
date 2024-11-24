import { UserProfile } from '../types';

// Mock data - replace with actual API calls
const profile: UserProfile = {
  name: "John Doe",
  employeeId: "EMP123",
  department: "Engineering",
  perqScore: 750,
  monthlySalary: 85000,
  availableLimit: 680000,
  email: "john.doe@company.com",
  joinDate: "2022-01-15"
};

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Profile</h1>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-6 mb-8">
              <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-indigo-600">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-gray-600">{profile.department}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Employee ID</label>
                    <p className="mt-1 text-gray-900">{profile.employeeId}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <p className="mt-1 text-gray-900">{profile.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Join Date</label>
                    <p className="mt-1 text-gray-900">
                      {new Date(profile.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Perq Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Perq Score</label>
                    <p className="mt-1 text-2xl font-bold text-indigo-600">{profile.perqScore}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Monthly Salary</label>
                    <p className="mt-1 text-gray-900">₹{profile.monthlySalary.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Available Limit</label>
                    <p className="mt-1 text-gray-900">₹{profile.availableLimit.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}