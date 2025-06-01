import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "120K+",
    label: "Registered Users",
  },
  {
    value: "$5.4B+",
    label: "Total Savings",
  },
  {
    value: "99.95%",
    label: "System Reliability",
  },
  {
    value: "4.8/5",
    label: "Customer Satisfaction",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Real-Time Expense Tracking",
    description:
      "Monitor your expenses instantly and get alerts on unusual spending patterns.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-green-600" />,
    title: "AI Receipt Recognition",
    description:
      "Snap a picture and automatically log your receipts with precise data extraction.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "Goal-Oriented Budgeting",
    description:
      "Set personal financial goals and get smart tips to stay on track effortlessly.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-green-600" />,
    title: "Integrated Bill Payments",
    description:
      "Pay bills directly from the app and never miss a due date again.",
  },
  {
    icon: <Globe className="h-8 w-8 text-green-600" />,
    title: "Global Currency Exchange",
    description:
      "Seamlessly convert currencies with live rates for your international transactions.",
  },
  {
    icon: <Zap className="h-8 w-8 text-green-600" />,
    title: "Smart Financial Alerts",
    description:
      "Receive proactive alerts on bills, budget limits, and investment opportunities.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-green-600" />,
    title: "Step 1: Sign Up Securely",
    description:
      "Create an account with bank-grade security and get started immediately.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-green-600" />,
    title: "Step 2: Connect Your Accounts",
    description:
      "Link all your financial accounts to get a complete spending overview.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "Step 3: Optimize & Grow",
    description:
      "Use AI-driven recommendations to maximize savings and investment growth.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Ayesha Patel",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "This app revolutionized my cash flow management. The instant expense tracking is a lifesaver!",
  },
  {
    name: "David Kim",
    role: "Consultant",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    quote:
      "With AI-powered budgeting, I finally stick to my goals and save more than ever before.",
  },
  {
    name: "Olivia Brown",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    quote:
      "The multi-currency feature is perfect for my international portfolio. Highly recommend!",
  },
];
