'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BarChart3, Users, TrendingUp, Activity } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '2,543', icon: Users, change: '+12.3%' },
  { label: 'Revenue', value: '$45,231', icon: TrendingUp, change: '+8.1%' },
  { label: 'Active Now', value: '573', icon: Activity, change: '+3.2%' },
  { label: 'Conversion', value: '24.5%', icon: BarChart3, change: '+2.4%' },
];

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Welcome back! Here's what's happening with your application.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {stat.change}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">
                    from last month
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      Activity {item}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      2 hours ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="card p-6"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/profile')}
                className="w-full p-4 text-left bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors"
              >
                <p className="font-medium text-slate-900 dark:text-white">
                  View Profile
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Manage your account settings
                </p>
              </button>
              <button className="w-full p-4 text-left bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
                <p className="font-medium text-slate-900 dark:text-white">
                  View Analytics
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Check your performance metrics
                </p>
              </button>
              <button className="w-full p-4 text-left bg-primary/5 hover:bg-primary/10 rounded-lg transition-colors">
                <p className="font-medium text-slate-900 dark:text-white">
                  Settings
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Configure your preferences
                </p>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
