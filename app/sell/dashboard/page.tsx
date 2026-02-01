'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { BarChart3, ShoppingBag, Users, TrendingUp, Plus, Settings, LogOut } from 'lucide-react';

export default function SellerDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      label: 'Total Sales',
      value: '₦245,000',
      change: '+12%',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      label: 'Active Products',
      value: '48',
      change: '+3 this week',
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      label: 'Total Orders',
      value: '127',
      change: '+8 this month',
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      label: 'Visitors',
      value: '3,420',
      change: '+24%',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const recentOrders = [
    {
      id: '#12345',
      customer: 'Sarah Adeyemi',
      product: 'Blue Ankara Dress',
      amount: '₦35,000',
      status: 'Delivered',
      date: '2 days ago',
    },
    {
      id: '#12344',
      customer: 'Chioma Okafor',
      product: 'Gold Jewelry Set',
      amount: '₦28,500',
      status: 'Processing',
      date: '5 days ago',
    },
    {
      id: '#12343',
      customer: 'Zainab Hassan',
      product: 'Leather Handbag',
      amount: '₦42,000',
      status: 'Shipped',
      date: '1 week ago',
    },
    {
      id: '#12342',
      customer: 'Grace Obi',
      product: 'Beaded Necklace',
      amount: '₦15,900',
      status: 'Delivered',
      date: '2 weeks ago',
    },
  ];

  const topProducts = [
    {
      id: 1,
      name: 'Blue Ankara Dress',
      sales: 23,
      revenue: '₦805,000',
      views: 1240,
    },
    {
      id: 2,
      name: 'Gold Jewelry Set',
      sales: 18,
      revenue: '₦513,000',
      views: 1050,
    },
    {
      id: 3,
      name: 'Leather Handbag',
      sales: 15,
      revenue: '₦630,000',
      views: 892,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back, Sarah's Designs</p>
          </div>
          <div className="flex gap-4">
            <Link href="/sell/dashboard/products/new">
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                <Plus className="w-5 h-5" />
                Add Product
              </button>
            </Link>
            <Link href="/sell/dashboard/settings">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Settings className="w-5 h-5" />
                Settings
              </button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-green-600 text-sm mt-2">{stat.change}</p>
                </div>
                <div className="text-gray-400">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'orders'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Recent Orders
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'products'
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Top Products
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg text-gray-600">
              <p>Chart visualization would be displayed here</p>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Order ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Product</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm font-medium text-black">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Product</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Sales</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Revenue</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Views</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {topProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm font-medium text-black">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.sales}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{product.revenue}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{product.views}</td>
                      <td className="px-6 py-4 text-sm">
                        <Link href={`/sell/dashboard/products/${product.id}`} className="text-black hover:underline font-medium">
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
