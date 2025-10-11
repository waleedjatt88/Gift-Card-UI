// src/pages/UserDetailsPage.jsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMail, FiPhone, FiMapPin, FiChevronRight } from 'react-icons/fi';

// --- COMPONENTS ---
import Pagination from '../components/common/Pagination'; // Yeh ab OrderHistoryTable mein use ho raha hai, lekin yahan rakh sakte hain
import OrderHistoryTable from '../components/orders/OrderHistoryTable'; // <-- Naya component import kiya
import ReceiverDetailModal from '../components/orders/ReceiverDetailModal'; // <-- Naya modal import kiya

// --- ASSETS ---
import userAvatar from '../assets/images/avatar2.png';
import totalCardsIcon from '../assets/icons/total-cards-icon.png';
import myCardsIcon from '../assets/icons/my-cards-icon.png';
import giftedCardsIcon from '../assets/icons/gifted-cards-icon.png';

// --- MOCK DATA ---
const user = { id: 1, name: 'Yasmany B', email: 'ybtrff5@gmail.co', phone: '9876567876', address: '456 Park Avenue, New York, NY 10022', avatar: userAvatar };
const orderHistoryData = [ // Renamed to avoid confusion
    { id: 1, cardId: '325256', date: 'Mar 4, 2024 6:37 AM', brand: 'J.', amount: '$10', giftFor: 'Myself', status: 'Available' },
    { id: 2, cardId: '234234', date: 'Mar 4, 2024 6:37 AM', brand: 'KFC', amount: '$100', giftFor: 'Wassi', status: 'Used' },
    { id: 3, cardId: '345345', date: 'Mar 4, 2024 6:37 AM', brand: 'McDonald', amount: '$35', giftFor: 'Myself', status: 'Used' },
    { id: 4, cardId: '546434', date: 'Mar 4, 2024 6:37 AM', brand: 'LV', amount: '$70', giftFor: 'My Friend', status: 'Available' },
    { id: 5, cardId: '788665', date: 'Mar 4, 2024 6:37 AM', brand: 'Gucci', amount: '$23', giftFor: 'Myself', status: 'Used' },
];

// --- STYLES (Table wale styles yahan se hata diye gaye hain) ---

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #6b7280;
  font-size: 1.25rem;
  a {
    color: #6b7280;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const UserInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserDetails = styled.div`
  h2 { font-size: 1.5rem; margin-bottom: 0.5rem; color: #7c3aed; font-weight: 600; }
  p { display: flex; align-items: center; gap: 8px; color: #6b7280; margin-bottom: 0.25rem; }
  p svg { color: #7c3aed; }
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const StatCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || '#e0e7ff'};
  img {
    width: 24px;
    height: 24px;
  }
`;

const StatInfo = styled.div`
  h4 { color: #6b7280; margin-bottom: 0.25rem; font-weight: 500; }
  p { font-size: 2rem; font-weight: 700; color: #111827; }
`;

const FilterBar = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Space between rows */
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const FilterActions = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 1fr; /* 2 date fields, 2 buttons */
    gap: 1rem;
    align-items: flex-end; /* Align items to the bottom */
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #374151;
    }
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

// --- COMPONENT ---

const UserDetailsPage = () => {
  const { userId } = useParams();

  // NEW: Modal ke liye state variables
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // NEW: Modal ko open karne ke liye function
  const handleViewDetailsClick = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };
  return (
    <PageWrapper>
      <Breadcrumb>
        <Link to="/users">Users</Link> <FiChevronRight /> <strong>User Details</strong>
      </Breadcrumb>

      <UserInfoCard>
        <Avatar src={user.avatar} alt={user.name} />
        <UserDetails>
          <h2>{user.name}</h2>
          <p><FiMail /> {user.email}</p>
          <p><FiPhone /> {user.phone}</p>
          <p><FiMapPin /> {user.address}</p>
        </UserDetails>
      </UserInfoCard>

      <div>
        <SectionTitle>Order Details</SectionTitle>
        <StatCardsWrapper>
          <StatCard>
            <StatIcon bgColor="#e0e7ff"><img src={totalCardsIcon} alt="Total Cards" /></StatIcon>
            <StatInfo><h4>Total Cards</h4><p>31</p></StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon bgColor="#fee2e2"><img src={myCardsIcon} alt="My Cards" /></StatIcon>
            <StatInfo><h4>My Cards</h4><p>1</p></StatInfo>
          </StatCard>
          <StatCard>
            <StatIcon bgColor="#dcfce7"><img src={giftedCardsIcon} alt="Gifted Cards" /></StatIcon>
            <StatInfo><h4>Gifted Cards</h4><p>30</p></StatInfo>
          </StatCard>
        </StatCardsWrapper>
      </div>
      
      <FilterBar>
        <FilterRow>
          <InputGroup>
            <label>Search by Card ID</label>
            <Input placeholder="Search..." />
          </InputGroup>
          <InputGroup>
            <label>Status</label>
            <Select><option>All</option><option>Available</option><option>Used</option></Select>
          </InputGroup>
          <InputGroup>
            <label>Brands</label>
            <Select><option>All</option><option>KFC</option><option>LV</option></Select>
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

       <div>
          <SectionTitle>Order History</SectionTitle>
          <OrderHistoryTable 
            orders={orderHistoryData} 
            totalItems={738}
            showUserColumn={false} // Users column nahi dikhana
            showActions={true}    // Actions column dikhana hai
            onViewClick={handleViewDetailsClick}
          />
      </div>


      {/* NEW: Modal ko yahan render kiya */}
      <ReceiverDetailModal 
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        order={selectedOrder}
        user={user} // Receiver ki details ke liye user object pass kiya
      />
    </PageWrapper>
  );
};

export default UserDetailsPage;