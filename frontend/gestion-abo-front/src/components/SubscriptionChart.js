// src/components/SubscriptionChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const SubscriptionChart = ({ data, type }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: type === 'daily' ? 'Consommation Quotidienne' : 'Consommation Mensuelle',
        data: data.values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>{type === 'daily' ? 'Consommation Quotidienne' : 'Consommation Mensuelle'}</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SubscriptionChart;
