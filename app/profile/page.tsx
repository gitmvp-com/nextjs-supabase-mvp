'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Mail, Calendar, Settings } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Profile
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Manage your account information and settings
          </p>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8 mb-6"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {profile.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Member since {profile.joinDate}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
            >
              {isEditing ? 'Save' : 'Edit Profile'}
            </button>
          </div>

          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <User className="h-4 w-4" />
                Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-2 bg-white dark:bg-neutral-darker border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white"
                />
              ) : (
                <p className="text-slate-900 dark:text-white">{profile.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <Mail className="h-4 w-4" />
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-4 py-2 bg-white dark:bg-neutral-darker border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white"
                />
              ) : (
                <p className="text-slate-900 dark:text-white">{profile.email}</p>
              )}
            </div>

            {/* Join Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <Calendar className="h-4 w-4" />
                Member Since
              </label>
              <p className="text-slate-900 dark:text-white">{profile.joinDate}</p>
            </div>
          </div>
        </motion.div>

        {/* Settings Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Settings className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Account Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Email Notifications
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Receive email updates about your account
                </p>
              </div>
              <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                Enabled
              </button>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Two-Factor Authentication
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add an extra layer of security
                </p>
              </div>
              <button className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                Disabled
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  Privacy Settings
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Control your data and privacy
                </p>
              </div>
              <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
                Manage
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
