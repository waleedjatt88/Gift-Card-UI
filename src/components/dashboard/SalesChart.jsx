// src/components/dashboard/SalesChart.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { FiCalendar } from 'react-icons/fi';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const ChartWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const ControlsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Tabs = styled.div`
  display: flex;
  background: #f3f4f6;
  border-radius: 8px;
  padding: 5px;
`;

const TabButton = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  /* UPDATED: 'active' ko '$active' kar diya gaya hai */
  background-color: ${props => props.$active ? '#7c3aed' : 'transparent'};
  color: ${props => props.$active ? '#fff' : '#374151'};
`;

const DateRange = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b5563;
`;

// NEW: ApplyButton ko yahan define kiya gaya hai
const ApplyButton = styled.button`
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
`;

const data = {
  labels: ['Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14'],
  datasets: [{
    label: 'Sales',
    data: [0, 2000, 2000, 4000, 3000, 3200, 7000],
    borderColor: '#7c3aed',
    tension: 0.4,
    pointBackgroundColor: '#7c3aed',
    pointRadius: 5,
    pointBorderColor: '#fff',
    pointBorderWidth: 2,
    fill: true,
    backgroundColor: (context) => {
      const ctx = context.chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(124, 58, 237, 0.3)');
      gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
      return gradient;
    },
  }],
};

const options = {
  responsive: true,
  scales: {
    y: { ticks: { callback: function(value) { if (value === 0) return '0'; return value / 1000 + 'K'; }}},
    x: { grid: { display: false }}
  },
  plugins: { legend: { display: false } },
};

const SalesChart = () => {
    const [activeTab, setActiveTab] = useState('Sales');

    return (
        <ChartWrapper>
            <ChartHeader>
                <Title>Sales Statistics</Title>
                <ControlsWrapper>
                    <Tabs>
                        {/* UPDATED: 'active' ko '$active' kar diya gaya hai */}
                        <TabButton 
                            $active={activeTab === 'Sales'} 
                            onClick={() => setActiveTab('Sales')}
                        >
                            Sales
                        </TabButton>
                        <TabButton 
                            $active={activeTab === 'Orders'}
                            onClick={() => setActiveTab('Orders')}
                        >
                            Orders
                        </TabButton>
                    </Tabs>
                    <DateRange>
                        <FiCalendar />
                        <span>08-Feb-2024 to 14-Feb-2024</span>
                    </DateRange>
                    {/* Ab yeh button kaam karega */}
                    <ApplyButton>Apply</ApplyButton>
                </ControlsWrapper>
            </ChartHeader>
            <Line data={data} options={options} />
        </ChartWrapper>
    );
};

export default SalesChart;