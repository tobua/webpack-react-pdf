import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts'

export const Rechart = ({ value }) => {
  const data = [
    { value: 4 },
    { value: 2 },
    { value: 5 },
    { value: 1 },
    { value },
  ]

  return (
    <LineChart width={400} height={400} data={data}>
      <XAxis />
      <YAxis />
      <Line
        isAnimationActive={false}
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
      />
    </LineChart>
  )
}
