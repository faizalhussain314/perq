export interface Product {
  id: string;
  name: string;
  price: number;
  dealer: string;
  category: string;
  imageUrl: string;
}

export interface EMI {
  id: string;
  productName: string;
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  monthlyPayment: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'pending';
}

export interface UserProfile {
  name: string;
  employeeId: string;
  department: string;
  perqScore: number;
  monthlySalary: number;
  availableLimit: number;
  email: string;
  joinDate: string;
  daysWorked: number;
  availableWithdrawal: number;
  pendingRepayment: number;
}

export interface SalaryWithdrawal {
  id: string;
  amount: number;
  date: string;
  status: 'pending' | 'approved' | 'completed';
  daysWorked: number;
  repaymentDate: string;
}

export interface RepaymentHistory {
  id: string;
  withdrawalId: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed';
}