import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pop_0_14" stackId="1" stroke="#8884d8" fill="#8884d8" name="0~14세" />
        <Area type="monotone" dataKey="pop_15_64" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="15~64세" />
        <Area type="monotone" dataKey="pop_65_plus" stackId="1" stroke="#ffc658" fill="#ffc658" name="65세 이상" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
