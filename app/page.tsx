
'use client'

import React, { useState } from 'react'
import { Monitoring } from '../components/Monitoring'
import { Logs } from '../components/Logs'
import { UserManagement } from '../components/UserManagement'
import { Settings } from '../components/Settings'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [activeTab, setActiveTab] = useState('monitoring')

  const renderContent = () => {
    switch (activeTab) {
      case 'monitoring':
        return <Monitoring />
      case 'logs':
        return <Logs />
      case 'users':
        return <UserManagement />
      case 'settings':
        return <Settings />
      default:
        return <Monitoring />
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <Button onClick={() => setActiveTab('monitoring')} variant={activeTab === 'monitoring' ? 'default' : 'outline'}>Monitoring</Button>
        <Button onClick={() => setActiveTab('logs')} variant={activeTab === 'logs' ? 'default' : 'outline'}>Logs</Button>
        <Button onClick={() => setActiveTab('users')} variant={activeTab === 'users' ? 'default' : 'outline'}>User Management</Button>
        <Button onClick={() => setActiveTab('settings')} variant={activeTab === 'settings' ? 'default' : 'outline'}>Settings</Button>
      </div>
      {renderContent()}
    </div>
  )
}
