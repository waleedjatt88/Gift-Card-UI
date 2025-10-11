// src/pages/GiftCardsPage.jsx

import React from 'react';
import styled from 'styled-components';
import Pagination from '../components/common/Pagination'; // Reusing pagination

// --- MOCK DATA ---
const giftCardsData = [
    { id: 1, cardId: '325256', cardName: 'KFC', brandName: 'KFC', amount: '$1', country: 'Pakistan' },
    { id: 2, cardId: '234234', cardName: 'KFC', brandName: 'KFC', amount: '$10', country: 'India' },
    { id: 3, cardId: '345345', cardName: 'KFC', brandName: 'KFC', amount: '$20', country: 'Pakistan' },
    { id: 4, cardId: '546434', cardName: 'McDonald', brandName: 'McDonald', amount: '$40', country: 'United Stated' },
    { id: 5, cardId: '788665', cardName: 'J.', brandName: 'J.', amount: '$60', country: 'United Kingdom' },
];

// --- STYLES (Reused from previous pages) ---

const PageHeader = styled.div`
  margin-bottom: 2rem;
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const FilterBar = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto auto; /* Custom grid for this layout */
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 0.9rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
  font-size: 0.9rem;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props => props.primary ? '#7c3aed' : '#f3f4f6'};
  color: ${props => props.primary ? '#fff' : '#374151'};
`;

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

// --- COMPONENT ---

const GiftCardsPage = () => {
  return (
    <div>
      <PageHeader>
        <h1>Gift Cards</h1>
      </PageHeader>
      
      <FilterBar>
        <Input placeholder="Search by card name" />
        <Select>
            <option>Brands</option>
        </Select>
        <Select>
            <option>Country</option>
        </Select>
        <Button primary>Filter</Button>
        <Button>Reset</Button>
      </FilterBar>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Card ID</th>
              <th>Card Name</th>
              <th>Brand Name</th>
              <th>Amount</th>
              <th>Country Name</th>
            </tr>
          </thead>
          <tbody>
            {giftCardsData.map((card, index) => (
              <tr key={card.id}>
                <td>{index + 1}</td>
                <td>{card.cardId}</td>
                <td>{card.cardName}</td>
                <td>{card.brandName}</td>
                <td>{card.amount}</td>
                <td>{card.country}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Pagination totalItems={738} />
    </div>
  );
};

export default GiftCardsPage;