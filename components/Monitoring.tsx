
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', cpu: 40, memory: 24, network: 55 },
  { name: 'Feb', cpu: 30, memory: 13, network: 40 },
  { name: 'Mar', cpu: 20, memory: 98, network: 45 },
  { name: 'Apr', cpu: 27, memory: 39, network: 60 },
  { name: 'May', cpu: 18, memory: 48, network: 35 },
  { name: 'Jun', cpu: 23, memory: 38, network: 50 },
];

export function Monitoring() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>System Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cpu" stroke="#8884d8" />
          <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
          <Line type="monotone" dataKey="network" stroke="#ffc658" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
