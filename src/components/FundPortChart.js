import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function FundPortChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/fund_port_predicted.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          dynamicTyping: true,
          complete: result => {
            const latestYear = Math.max(...result.data.map(d => d.year));
            const latestData = result.data.filter(d => d.year === latestYear);
            setData(latestData);
          }
        });
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={data} dataKey="ratio" nameKey="category" cx="50%" cy="50%" outerRadius={150} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
<ResponsiveContainer width="100%" height={300}></ResponsiveContainer>