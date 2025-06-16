import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Papa from 'papaparse';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export default function FundPortChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/fund_port_predicted.csv')
      .then(res => res.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: result => {
            const allRows = result.data;
            const row2060 = allRows.find(r => Number(r.year) === 2060);
            if (!row2060) return;

            const parsed = [
              { category: '복지부문', ratio: row2060.welfare },
              { category: '금융부문', ratio: row2060.finance },
              { category: '기타부문', ratio: row2060.others }
            ];
            setData(parsed);
          }
        });
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="ratio"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
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
