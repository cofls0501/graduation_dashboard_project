import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';

export default function DemographicChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/demographic_predicted.csv')
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
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="age_65_over" stroke="#ff7300" name="65세 이상 인구" />
        <Line type="monotone" dataKey="age_15_64" stroke="#387908" name="15-64세 인구" />
      </LineChart>
    </ResponsiveContainer>
  );
}
<ResponsiveContainer width="100%" height={300}></ResponsiveContainer>