
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'My Dashboard',
    emailNotifications: true,
    darkMode: false,
    language: 'en',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const saveSettings = () => {
    console.log('Settings saved:', settings);
    // Here you would typically send the settings to your backend
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="siteName">Site Name</Label>
          <Input
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="emailNotifications"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onCheckedChange={(checked) => setSettings(prev => ({ ...prev, emailNotifications: checked }))}
          />
          <Label htmlFor="emailNotifications">Email Notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="darkMode"
            name="darkMode"
            checked={settings.darkMode}
            onCheckedChange={(checked) => setSettings(prev => ({ ...prev, darkMode: checked }))}
          />
          <Label htmlFor="darkMode">Dark Mode</Label>
        </div>
        <div>
          <Label htmlFor="language">Language</Label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <Button onClick={saveSettings}>Save Settings</Button>
      </CardContent>
    </Card>
  );
}
