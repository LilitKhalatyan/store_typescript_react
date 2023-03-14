import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    num: 10000,
  },
  {
    name: 'Feb',
    num: 15000,
  },
  {
    name: 'Mar',
    num: 17000,
  },
  {
    name: 'Apr',
    num: 15000,
  },
  {
    name: 'May',
    num: 13800,
  },
  {
    name: 'Jun',
    num: 14600,
  },
  {
    name: 'Jul',
    num: 14356,
  },
  {
    name: 'Aug',
    num: 15000,
  },
  {
    name: 'Sep',
    num: 15500,
  },
  {
    name: 'Oct',
    num: 20000,
  },
  {
    name: 'Nov',
    num: 22490,
  },
  {
    name: 'Dec',
    num: 24090,
  },
];

function DashboardLineChart () {

  return (
    <div className="dashboard-line-chart">
    <ResponsiveContainer width="100%"  aspect={2}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="num" stroke="#063057" strokeWidth={3} activeDot={{r: 8}}/>
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

export default DashboardLineChart
