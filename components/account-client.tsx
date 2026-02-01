'use client';

import React from "react"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { User, MapPin, Lock, ShoppingBag, LogOut } from 'lucide-react';

export function AccountClient() {
  const [activeTab, setActiveTab] = useState<
    'profile' | 'addresses' | 'password'
  >('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+234 801 234 5678',
  });

  const [addresses, setAddresses] = useState([
    {
      id: '1',
      type: 'home',
      name: 'John Doe',
      address: '123 Main Street',
      city: 'Lagos',
      state: 'Lagos',
      postalCode: '100001',
      country: 'Nigeria',
      isDefault: true,
    },
  ]);

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    toast.success('Password changed successfully');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'password', label: 'Password', icon: Lock },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">My Account</h1>
      <p className="text-gray-600 mb-8">Manage your profile and preferences</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(
                      tab.id as 'profile' | 'addresses' | 'password'
                    )
                  }
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === tab.id
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
            <Link href="/orders">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                <ShoppingBag size={20} />
                <span>My Orders</span>
              </button>
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition text-red-600">
              <LogOut size={20} />
              <span>Log Out</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={profileData.firstName}
                    onChange={handleProfileChange}
                    className="border-gray-300"
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={profileData.lastName}
                    onChange={handleProfileChange}
                    className="border-gray-300"
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="border-gray-300"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  className="border-gray-300"
                />
                <Button
                  type="submit"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800"
                >
                  Save Changes
                </Button>
              </form>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && (
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Saved Addresses</h2>
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  Add New Address
                </Button>
              </div>

              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="bg-white rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-semibold text-lg">{address.name}</p>
                        <p className="text-sm text-gray-600 capitalize">
                          {address.type}
                        </p>
                      </div>
                      {address.isDefault && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-2">{address.address}</p>
                    <p className="text-gray-700 mb-4">
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs bg-transparent"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-red-600 bg-transparent"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Password Tab */}
          {activeTab === 'password' && (
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Change Password</h2>
              <form onSubmit={handlePasswordSubmit} className="space-y-4 max-w-md">
                <Input
                  type="password"
                  placeholder="Current Password"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      currentPassword: e.target.value,
                    }))
                  }
                  className="border-gray-300"
                />
                <Input
                  type="password"
                  placeholder="New Password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      newPassword: e.target.value,
                    }))
                  }
                  className="border-gray-300"
                />
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  className="border-gray-300"
                />
                <Button
                  type="submit"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800"
                >
                  Update Password
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
