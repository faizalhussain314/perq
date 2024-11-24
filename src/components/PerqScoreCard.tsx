interface PerqScoreCardProps {
  score: number;
  availableLimit: number;
  monthlySalary: number;
}

export default function PerqScoreCard({ score, availableLimit, monthlySalary }: PerqScoreCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Your Perq Score</h2>
        <span className="text-3xl font-bold text-indigo-600">{score}</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Available Limit</span>
            <span className="font-medium">₹{availableLimit.toLocaleString()}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-indigo-600 rounded-full" 
              style={{ width: `${(availableLimit / (monthlySalary * 12)) * 100}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-between pt-4 border-t">
          <div>
            <p className="text-sm text-gray-600">Monthly Salary</p>
            <p className="text-lg font-semibold">₹{monthlySalary.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Annual Limit</p>
            <p className="text-lg font-semibold">₹{(monthlySalary * 12).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}