import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PieChartComponent = () => {
  const data = [
    { name: 'Platform A', value: 30, color: '#FF6384' },
    { name: 'Platform B', value: 20, color: '#36A2EB' },
    { name: 'Platform C', value: 50, color: '#FFCE56' },
  ];

  return (
    <div style={{ height: 400, width: 400 }}>  {/* Define the height and width of the container */}
      <PieChart
        series={[
          {
            innerRadius: 70,
            outerRadius: 100,
            paddingAngle: 0,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
            data: data.map((entry) => ({ ...entry, label: entry.name })),
          },
        ]}
      />
    </div>
  );
}

export default PieChartComponent;
