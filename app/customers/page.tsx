'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Plus,
  Search,
  Filter,
  Calendar,
  Send,
  Copy,
  ChevronDown,
  Users,
  ShoppingBag,
} from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  orderTotal: string;
  customerSince: string;
  status: 'Active' | 'Inactive';
}

const sampleCustomers: Customer[] = [
  {
    id: '1',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '6',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '7',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '8',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '9',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
  {
    id: '10',
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    phone: '+2348065650633',
    orders: 10,
    orderTotal: '$250,000.00',
    customerSince: '12 Aug 2022 - 12:25 am',
    status: 'Active',
  },
];

interface SummaryMetric {
  label: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative';
}

interface SummaryCardProps {
  icon: 'users' | 'bag';
  metrics: SummaryMetric[];
}

function SummaryCard({ icon, metrics }: SummaryCardProps) {
  return (
    <Card className="rounded-xl border-gray-100 flex-1">
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center">
              {icon === 'users' ? (
                <Users className="w-5 h-5 text-gray-900" />
              ) : (
                <ShoppingBag className="w-5 h-5 text-gray-900" />
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">This Week</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="flex gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-2 flex-1">
                <div className="text-sm text-gray-600">{metric.label}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-gray-900">
                    {metric.value}
                  </span>
                  <span
                    className={`text-xs font-normal ${
                      metric.changeType === 'positive'
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CustomersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const filteredCustomers = sampleCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex-1 ml-72 min-h-screen bg-gray-50">
      {/* Top Nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-medium text-gray-900">Customers</h1>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b4f35bf26cdf5ee2d0a27c107b023596d365143e?width=64"
            alt="Profile"
            className="w-8 h-8 rounded-lg"
          />
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium text-gray-900">
            Customers Summary
          </h2>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2 rounded-xl h-9 px-4">
            <Plus size={20} />
            Add a New Customer
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="flex gap-5">
          <SummaryCard
            icon="users"
            metrics={[
              {
                label: 'All Customers',
                value: '1,250',
                change: '+15.80%',
                changeType: 'positive',
              },
              {
                label: 'Active',
                value: '1,180',
                change: '+85%',
                changeType: 'positive',
              },
              {
                label: 'In-Active',
                value: '70',
                change: '-10%',
                changeType: 'negative',
              },
            ]}
          />
          <SummaryCard
            icon="bag"
            metrics={[
              {
                label: 'New Customers',
                value: '30',
                change: '-20%',
                changeType: 'negative',
              },
              {
                label: 'Purchasing',
                value: '657',
                change: '+0.00%',
                changeType: 'positive',
              },
              {
                label: 'Abandoned Carts',
                value: '5',
                change: '+0.00%',
                changeType: 'positive',
              },
            ]}
          />
        </div>

        {/* Customer Table */}
        <Card className="rounded-xl border-gray-100">
          <CardContent className="p-6">
            {/* Table Header */}
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-base font-medium text-gray-900">Customers</h3>
              <div className="flex items-center gap-2">
                {/* Search */}
                <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1.5 h-7">
                  <Search size={16} className="text-gray-600" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="text-xs outline-none bg-transparent w-24"
                  />
                </div>

                {/* Filter Buttons */}
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs gap-2 h-7 px-2 border-gray-800 text-gray-800"
                >
                  <Filter size={14} />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs gap-2 h-7 px-2 border-gray-800 text-gray-800"
                >
                  <Calendar size={14} />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs gap-2 h-7 px-2 border-gray-800 text-gray-800"
                >
                  <Send size={14} />
                  Share
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs gap-2 h-7 px-2 border-gray-800 text-gray-800"
                    >
                      Bulk Action
                      <ChevronDown size={14} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Delete Selected</DropdownMenuItem>
                    <DropdownMenuItem>Export Selected</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-y border-gray-200">
                  <tr className="h-13">
                    <th className="text-left px-0 py-3.5 font-normal text-gray-900">
                      <Checkbox className="rounded-lg" />
                    </th>
                    <th className="text-left px-3 py-3.5 font-normal text-gray-900">
                      <div className="flex items-center gap-2">
                        Customer Name
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.33366 11.8335H6.66699C6.39366 11.8335 6.16699 11.6068 6.16699 11.3335C6.16699 11.0602 6.39366 10.8335 6.66699 10.8335H9.33366C9.60699 10.8335 9.83366 11.0602 9.83366 11.3335C9.83366 11.6068 9.60699 11.8335 9.33366 11.8335Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left px-3 py-3.5 font-normal text-gray-900">
                      <div className="flex items-center gap-2">
                        Email
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.33366 11.8335H6.66699C6.39366 11.8335 6.16699 11.6068 6.16699 11.3335C6.16699 11.0602 6.39366 10.8335 6.66699 10.8335H9.33366C9.60699 10.8335 9.83366 11.0602 9.83366 11.3335C9.83366 11.6068 9.60699 11.8335 9.33366 11.8335Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left px-3 py-3.5 font-normal text-gray-900">
                      <div className="flex items-center gap-2">
                        Phone
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.33366 11.8335H6.66699C6.39366 11.8335 6.16699 11.6068 6.16699 11.3335C6.16699 11.0602 6.39366 10.8335 6.66699 10.8335H9.33366C9.60699 10.8335 9.83366 11.0602 9.83366 11.3335C9.83366 11.6068 9.60699 11.8335 9.33366 11.8335Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left px-3 py-3.5 font-normal text-gray-900">
                      <div className="flex items-center gap-2">
                        Orders
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.33366 11.8335H6.66699C6.39366 11.8335 6.16699 11.6068 6.16699 11.3335C6.16699 11.0602 6.39366 10.8335 6.66699 10.8335H9.33366C9.60699 10.8335 9.83366 11.0602 9.83366 11.3335C9.83366 11.6068 9.60699 11.8335 9.33366 11.8335Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left px-3 py-3.5 font-normal text-gray-900">
                      <div className="flex items-center gap-2">
                        Order Total
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.33366 11.8335H6.66699C6.39366 11.8335 6.16699 11.6068 6.16699 11.3335C6.16699 11.0602 6.39366 10.8335 6.66699 10.8335H9.33366C9.60699 10.8335 9.83366 11.0602 9.83366 11.3335C9.83366 11.6068 9.60699 11.8335 9.33366 11.8335Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left px-3 py-3.5 font-normal text-gray-900">
                      <div className="flex items-center gap-2">
                        Customer Since
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.33366 11.8335H6.66699C6.39366 11.8335 6.16699 11.6068 6.16699 11.3335C6.16699 11.0602 6.39366 10.8335 6.66699 10.8335H9.33366C9.60699 10.8335 9.83366 11.0602 9.83366 11.3335C9.83366 11.6068 9.60699 11.8335 9.33366 11.8335Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left px-3 py-3.5 font-normal text-gray-900">
                      <div className="flex items-center gap-2">
                        Status
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-gray-900"
                        >
                          <path
                            d="M14 5.1665H2C1.72667 5.1665 1.5 4.93984 1.5 4.6665C1.5 4.39317 1.72667 4.1665 2 4.1665H14C14.2733 4.1665 14.5 4.39317 14.5 4.6665C14.5 4.93984 14.2733 5.1665 14 5.1665Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                            fill="currentColor"
                          />
                          <path
                            d="M9.33366 11.8335H6.66699C6.39366 11.8335 6.16699 11.6068 6.16699 11.3335C6.16699 11.0602 6.39366 10.8335 6.66699 10.8335H9.33366C9.60699 10.8335 9.83366 11.0602 9.83366 11.3335C9.83366 11.6068 9.60699 11.8335 9.33366 11.8335Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b border-gray-100 h-12">
                      <td className="px-0 py-3">
                        <Checkbox
                          checked={selectedRows.includes(customer.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedRows([...selectedRows, customer.id]);
                            } else {
                              setSelectedRows(
                                selectedRows.filter((id) => id !== customer.id)
                              );
                            }
                          }}
                          className="rounded-lg"
                        />
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm">
                        {customer.name}
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700 text-sm">
                            {customer.email}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto hover:bg-transparent"
                            onClick={() => copyToClipboard(customer.email)}
                          >
                            <Copy size={16} className="text-gray-600" />
                          </Button>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700 text-sm">
                            {customer.phone}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-0 h-auto hover:bg-transparent"
                            onClick={() => copyToClipboard(customer.phone)}
                          >
                            <Copy size={16} className="text-gray-600" />
                          </Button>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm">
                        {customer.orders}
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm">
                        {customer.orderTotal}
                      </td>
                      <td className="px-3 py-3 text-gray-700 text-sm">
                        {customer.customerSince}
                      </td>
                      <td className="px-3 py-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100 rounded-lg px-3 py-1">
                          {customer.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(val) => {
                    setItemsPerPage(parseInt(val));
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-16 h-6 text-xs bg-gray-100 border-0 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-400">Items per page</span>
                <span className="text-sm text-gray-600">
                  {startIdx + 1}-
                  {Math.min(startIdx + itemsPerPage, filteredCustomers.length)}{' '}
                  of {filteredCustomers.length} items
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Select
                    value={currentPage.toString()}
                    onValueChange={(val) => setCurrentPage(parseInt(val))}
                  >
                    <SelectTrigger className="w-12 h-6 text-xs bg-gray-100 border-0 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-gray-600">
                    of {totalPages || 1} pages
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-gray-600"
                    >
                      <path
                        d="M10.4721 11.5289C10.7324 11.7893 10.7324 12.2114 10.4721 12.4717C10.2117 12.7321 9.7896 12.7321 9.52925 12.4717L5.52925 8.47173C5.27686 8.21934 5.26803 7.81295 5.50922 7.54984L9.17588 3.54984C9.42468 3.27843 9.84639 3.2601 10.1178 3.50889C10.3892 3.75768 10.4076 4.1794 10.1588 4.45081L6.92341 7.98028L10.4721 11.5289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-gray-600"
                    >
                      <path
                        d="M5.52794 4.47108C5.26759 4.21073 5.26759 3.78862 5.52794 3.52827C5.78829 3.26792 6.2104 3.26792 6.47075 3.52827L10.4708 7.52827C10.7231 7.78066 10.732 8.18705 10.4908 8.45016L6.82412 12.4502C6.57532 12.7216 6.15361 12.7399 5.8822 12.4911C5.61079 12.2423 5.59245 11.8206 5.84125 11.5492L9.07659 8.01973L5.52794 4.47108Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
