// src/components/dashboard/SalesChart.jsx

import React, { useState } from 'react'; // <-- useState ko import kiya
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';

// Icons
import { FiCalendar } from 'react-icons/fi';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

// CHANGE: Component ka naam badal diya
const ChartWrapper = styled.div`
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

// NEW: Header ke liye naye styles add kiye
const ChartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap; // Choti screens ke liye
    gap: 1rem; // Choti screens ke liye
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const Controls = styled.div`
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
  background-color: ${props => props.active ? '#7c3aed' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#374151'};
  transition: all 0.2s ease-in-out;
`;

const DateRange = styled.div`
    background-color: #fff;
    border: 1px solid #e5e7eb;
    padding: 8px 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: #4b5563;
`;

const ApplyButton = styled.button`
    background: #7c3aed;
    color: #fff;
    border: none;
    padding: 10px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background: #6d28d9;
    }
`;

// Chart ka data aur options (inmein koi change nahi)
const data = {
  labels: ['Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14'],
  datasets: [
    {
      label: 'Sales',
      data: [0, 2000, 2000, 4000, 3000, 3200, 7000],
      fill: false,
      borderColor: '#7c3aed',
      tension: 0.4,
      pointBackgroundColor: '#7c3aed',
      pointRadius: 5,
    },
  ],
};
const options = {
  responsive: true,
  scales: {
    y: { ticks: { callback: function(value) { if (value === 0) return '0'; return value / 1000 + 'K'; }}},
    x: { grid: { display: false }} // X-axis ki lines hata di hain
  },
  plugins: { legend: { display: false } },
};

const SalesChart = () => {
    // NEW: Active tab ko manage karne ke liye state
    const [activeTab, setActiveTab] = useState('Sales');

    return (
        <ChartWrapper>
            {/* NEW: Poora header section add kiya */}
            <ChartHeader>
                <Title>Sales Statistics</Title>
                <Controls>
                    <Tabs>
                        <TabButton 
                            active={activeTab === 'Sales'} 
                            onClick={() => setActiveTab('Sales')}
                        >
                            Sales
                        </TabButton>
                        <TabButton 
                            active={activeTab === 'Orders'}
                            onClick={() => setActiveTab('Orders')}
                        >
                            Orders
                        </TabButton>
                    </Tabs>
                    <DateRange>
                        <FiCalendar />
                        <span>08-Feb-2024 to 14-Feb-2024</span>
                    </DateRange>
                    <ApplyButton>Apply</ApplyButton>
                </Controls>
            </ChartHeader>
            <Line data={data} options={options} />
        </ChartWrapper>
    );
};

export default SalesChart;