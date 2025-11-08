'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { ChevronDown, Plus, TrendingUp, Users, ShoppingCart, Package } from 'lucide-react';

const chartData = [
  { date: 'Sept 10', value: 211 },
  { date: 'Sept 11', value: 84 },
  { date: 'Sept 12', value: 154 },
  { date: 'Sept 13', value: 51 },
  { date: 'Sept 14', value: 196 },
  { date: 'Sept 15', value: 106 },
  { date: 'Sept 16', value: 196 },
];

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: string;
  variant?: 'default' | 'primary';
  fullWidth?: boolean;
}

function MetricCard({
  icon,
  label,
  value,
  change,
  variant = 'default',
  fullWidth = false,
}: MetricCardProps) {
  const isPrimary = variant === 'primary';

  return (
    <Card
      className={`${
        isPrimary ? 'bg-blue-500 text-white border-0' : 'bg-white'
      } ${fullWidth ? 'w-full' : ''}`}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div
            className={`p-2 rounded-lg ${
              isPrimary
                ? 'bg-white/20'
                : 'bg-blue-50'
            }`}
          >
            <div className={isPrimary ? 'text-white' : 'text-blue-500'}>
              {icon}
            </div>
          </div>
          <select
            className={`text-xs border-0 bg-transparent ${
              isPrimary ? 'text-blue-100' : 'text-gray-400'
            } outline-none cursor-pointer`}
          >
            <option>This Week</option>
          </select>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {Array.isArray(label) ? (
            (label as any).map((item, idx) => (
              <div key={idx}>
                <div className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-600'}`}>
                  {item}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xl font-semibold ${
                      isPrimary ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {Array.isArray(value) ? value[idx] : value}
                  </span>
                  <span className="text-xs text-green-600">+0.00%</span>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className={`text-sm ${isPrimary ? 'text-blue-100' : 'text-gray-600'}`}>
                {label}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-2xl font-semibold ${
                    isPrimary ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {value}
                </span>
                <span className={`text-xs ${isPrimary ? 'text-blue-100' : 'text-green-600'}`}>
                  {change || '+0.00%'}
                </span>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <div className="flex-1 ml-72 p-6 bg-gray-50 min-h-screen">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8e8126f6da85a4782f6fd5d9792dd14a1ee2d26f?width=64"
          alt="Profile"
          className="w-8 h-8 rounded-lg"
        />
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          icon={<TrendingUp size={20} />}
          label="Sales"
          value="$0.00"
          change="+0.00%"
        />
        <MetricCard
          icon={<ShoppingCart size={20} />}
          label="Volume"
          value="0"
          change="+0.00%"
        />
        <MetricCard
          icon={<Users size={20} />}
          label="Customers"
          value="0"
          change="+0.00%"
        />
        <MetricCard
          icon={<Package size={20} />}
          label="Active"
          value="0"
          change="+0.00%"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <MetricCard
          icon={<Package size={20} />}
          label={['All Products', 'Active']}
          value={['0', '0']}
          variant="primary"
        />
        <MetricCard
          icon={<ShoppingCart size={20} />}
          label={['Abandoned Cart', 'Customers']}
          value={['0%', '0']}
        />
      </div>

      {/* Main Content - Chart and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <Card className="lg:col-span-2 bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Summary</h2>
                <select className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-sm border-0 outline-none cursor-pointer">
                  <option>Sales</option>
                </select>
              </div>
              <select className="text-xs text-gray-700 border-0 bg-transparent outline-none cursor-pointer">
                <option>Last 7 Days</option>
              </select>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fill: '#bec0ca', fontSize: 12 }} />
                <YAxis tick={{ fill: '#a6a8b1', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e1e2e9',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="#eef0fa" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Orders Section */}
        <Card className="bg-white flex flex-col">
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center gap-6 py-12">
            <div className="w-32 h-32 rounded-full border-2 border-gray-200 bg-gray-50 flex items-center justify-center">
              <ShoppingCart size={48} className="text-gray-400" />
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">No Orders Yet?</h3>
              <p className="text-sm text-gray-600 max-w-xs">
                Add products to your store and start selling to see orders here.
              </p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
              <Plus size={20} />
              New Product
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
