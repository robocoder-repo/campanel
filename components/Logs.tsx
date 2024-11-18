
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const initialLogs = [
  { id: 1, timestamp: '2024-11-18 10:00:00', level: 'INFO', message: 'Application started' },
  { id: 2, timestamp: '2024-11-18 10:05:23', level: 'WARNING', message: 'High CPU usage detected' },
  { id: 3, timestamp: '2024-11-18 10:10:45', level: 'ERROR', message: 'Database connection failed' },
  { id: 4, timestamp: '2024-11-18 10:15:12', level: 'INFO', message: 'New user registered' },
  { id: 5, timestamp: '2024-11-18 10:20:30', level: 'DEBUG', message: 'Cache cleared' },
];

export function Logs() {
  const [logs, setLogs] = useState(initialLogs);
  const [filter, setFilter] = useState('');

  const filteredLogs = logs.filter(log => 
    log.message.toLowerCase().includes(filter.toLowerCase()) ||
    log.level.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>System Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Filter logs..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4"
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>{log.level}</TableCell>
                <TableCell>{log.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
