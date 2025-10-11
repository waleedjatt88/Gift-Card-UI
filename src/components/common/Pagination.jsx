// src/components/common/Pagination.jsx
import React from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0 0 8px 8px; /* Sirf neeche se rounded corners */
`;

const InfoText = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PageButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${props => props.active ? '#7c3aed' : '#e5e7eb'};
  background-color: ${props => props.active ? '#7c3aed' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#6b7280'};
  font-weight: 600;
  cursor: pointer;
`;

const Ellipsis = styled.span`
  color: #6b7280;
`;

const Pagination = ({ totalItems }) => {
  return (
    <PaginationContainer>
      <InfoText>Showing 1-12 of {totalItems}</InfoText>
      <NavButtons>
        <PageButton><FiChevronLeft /></PageButton>
        <PageButton active>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <Ellipsis>...</Ellipsis>
        <PageButton>50</PageButton>
        <PageButton><FiChevronRight /></PageButton>
      </NavButtons>
    </PaginationContainer>
  );
};

export default Pagination;