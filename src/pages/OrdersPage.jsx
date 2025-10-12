
import React from 'react';
import styled from 'styled-components';
import OrderHistoryTable from '../components/orders/OrderHistoryTable';

const ordersData = [
    { id: 1, cardId: '325256', date: 'Mar 4, 2024 6:37 AM', user: 'Waqar', brand: 'J.', amount: '$10', giftFor: 'Myself', status: 'Available' },
    { id: 2, cardId: '234234', date: 'Mar 4, 2024 6:37 AM', user: 'Ahmed', brand: 'KFC', amount: '$100', giftFor: 'Waqar Ali', status: 'Available' },
    { id: 3, cardId: '345345', date: 'Mar 4, 2024 6:37 AM', user: 'Junaid', brand: 'McDonald', amount: '$35', giftFor: 'Myself', status: 'Available' },
    { id: 4, cardId: '546434', date: 'Mar 4, 2024 6:37 AM', user: 'Akbar', brand: 'LV', amount: '$70', giftFor: 'Kamar Javed', status: 'Available' },
    { id: 5, cardId: '788665', date: 'Mar 4, 2024 6:37 AM', user: 'Wassi', brand: 'Gucci', amount: '$23', giftFor: 'Myself', status: 'Available' },
];

const PageHeader = styled.div`
  margin-bottom: 2rem;
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FilterBar = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr; /* 3 columns for first row */
  gap: 1rem;
`;

const FilterActions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr auto auto; /* 2 date fields, 2 buttons */
    gap: 1rem;
    align-items: flex-end;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label { font-size: 0.9rem; font-weight: 500; color: #374151; }
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

const PriceRange = styled(InputGroup)`
    label {
        margin-bottom: 0;
    }
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        span { color: #6b7280; }
        input { 
            -moz-appearance: textfield;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }
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

const OrdersPage = () => {
  return (
    <div>
        <PageHeader>
            <h1>Order</h1>
        </PageHeader>
        
        <FilterBar>
            <FilterRow>
                <InputGroup>
                    <label>Search by Card Name</label>
                    <Input placeholder="Search..." />
                </InputGroup>
                <InputGroup>
                    <label>Brands</label>
                    <Select><option>All</option></Select>
                </InputGroup>
                <PriceRange>
                    <label>Price Range</label>
                    <div>
                        <Input type="number" placeholder="Min" />
                        <span>to</span>
                        <Input type="number" placeholder="Max" />
                    </div>
                </PriceRange>
            </FilterRow>
            <FilterActions>
                <InputGroup>
                    <label>Start Date</label>
                    <Input type="date" />
                </InputGroup>
                <InputGroup>
                    <label>End Date</label>
                    <Input type="date" />
                </InputGroup>
                <Button primary>Filter</Button>
                <Button>Reset</Button>
            </FilterActions>
        </FilterBar>

        <div style={{ marginTop: '2rem' }}>
            <SectionTitle>Order History</SectionTitle>
            <OrderHistoryTable 
                orders={ordersData} 
                totalItems={738}
                showUserColumn={true} 
                showActions={false}   
            />
        </div>
    </div>
  );
};

export default OrdersPage;