// src/components/orders/OrderHistoryTable.jsx

import React from 'react';
import styled from 'styled-components';
import Pagination from '../common/Pagination';
import { FiEye } from 'react-icons/fi';

// --- STYLES (No changes here) ---

const TableContainer = styled.div`
  background: #fff;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td { padding: 1rem 1.5rem; text-align: left; }
  thead { background: #f9fafb; }
  th { color: #6b7280; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; }
  tbody tr { border-bottom: 1px solid #f3f4f6; }
  tbody tr:last-child { border-bottom: none; }
`;

const StatusTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 0.8rem;
  background-color: ${props => props.status === 'Used' ? '#fee2e2' : '#dcfce7'};
  color: ${props => props.status === 'Used' ? '#b91c1c' : '#166534'};
  
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.status === 'Used' ? '#ef4444' : '#22c55e'};
  }
`;

const ActionButton = styled.button`
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #22c55e; /* Green color for View */
    font-size: 1rem;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.85;
    }
`;

// --- COMPONENT ---

// UPDATED: Now accepts 'onViewClick' as a prop
const OrderHistoryTable = ({ orders, totalItems, onViewClick }) => {
  return (
    <div>
        <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Card ID</th>
                  <th>Purchased Date</th>
                  <th>Brand</th>
                  <th>Amount</th>
                  <th>Gift For</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td>{order.cardId}</td>
                    <td>{order.date}</td>
                    <td>{order.brand}</td>
                    <td>{order.amount}</td>
                    <td>{order.giftFor}</td>
                    <td>
                      <StatusTag status={order.status}>
                        <div className="status-dot"></div> {order.status}
                      </StatusTag>
                    </td>
                    <td>
                      {/* UPDATED: onClick now calls the function passed from the parent */}
                      <ActionButton onClick={() => onViewClick(order)}>
                        <FiEye />
                      </ActionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </TableContainer>
        <Pagination totalItems={totalItems} />
    </div>
  );
};

export default OrderHistoryTable;