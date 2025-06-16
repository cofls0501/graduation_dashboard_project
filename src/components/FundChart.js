import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';

export default function FundChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/fund_predicted.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          dynamicTyping: true,
          complete: result => setData(result.data)
        });
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#82ca9d" name="기금 수입" />
        <Bar dataKey="expense" fill="#ff7f50" name="기금 지출" />
      </BarChart>
    </ResponsiveContainer>
  );
}
