// src/pages/UsersPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiEye, FiTrash2 } from 'react-icons/fi';
import DeleteModal from '../components/categories/DeleteModal';
import Pagination from '../components/common/Pagination';

// --- STYLES ---

const PageHeader = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 1.875rem; /* 30px */
    font-weight: 600;
  }
`;

const FilterBar = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
`;

const TableContainer = styled.div`
  background: #fff;
  border-radius: 12px 12px 0 0; /* Top corners rounded */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow-x: auto; /* For smaller screens */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 1rem 1.5rem;
    text-align: left;
    white-space: nowrap;
  }

  thead {
    background: #f9fafb;
  }

  th {
    color: #6b7280;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  tbody tr {
    border-bottom: 1px solid #f3f4f6;
  }
  
  tbody tr:last-child {
      border-bottom: none;
  }

  td {
      color: #374151;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.85;
    }
  }

  .view { background-color: #22c55e; } /* Green */
  .delete { background-color: #ef4444; } /* Red */
`;

// --- MOCK DATA ---
const usersData = [
  { id: 1, name: 'Ali Ahmed', email: 'abcd@gmail.com', phone: '+1234567891011' },
  { id: 2, name: 'Wassi Ahsan', email: 'abcd@gmail.com', phone: '+1234567891011' },
  { id: 3, name: 'Mukkaram Ali', email: 'abcd@gmail.com', phone: '+1234567891011' },
  { id: 4, name: 'Noman', email: 'abcd@gmail.com', phone: '+1234567891011' },
  { id: 5, name: 'Usama', email: 'abcd@gmail.com', phone: '+1234567891011' },
  { id: 6, name: 'Ahtesham', email: 'abcd@gmail.com', phone: '+1234567891011' },
  { id: 7, name: 'Saad', email: 'abcd@gmail.com', phone: '+1234567891011' },
  { id: 8, name: 'Waqas', email: 'abcd@gmail.com', phone: '+1234567891011' },
];

// --- COMPONENT ---
const UsersPage = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDeleteModalOpen(true);
  };
  
  const confirmDelete = () => {
    // Logic to delete user
    console.log("Deleting user:", userToDelete.name);
    setDeleteModalOpen(false);
    setUserToDelete(null);
  };
  
  const handleViewClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div>
      <PageHeader>
        <h1>Users</h1>
      </PageHeader>
      
      <FilterBar>
        <SearchInput placeholder="Search by Name/Email/Phone no" />
        <SearchButton><FiSearch /> Search</SearchButton>
      </FilterBar>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone no</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <ActionButtons>
                    <button className="view" onClick={() => handleViewClick(user.id)}><FiEye /></button>
                    <button className="delete" onClick={() => handleDeleteClick(user)}><FiTrash2 /></button>
                  </ActionButtons>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <Pagination totalItems={738} />
      
      <DeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default UsersPage;