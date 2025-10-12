import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus, FiSearch, FiEdit, FiTrash2, FiTag, FiFilm, FiBriefcase, FiZap, FiCpu, FiLock, FiTrello, FiFeather } from 'react-icons/fi';
import AddCategoryModal from '../components/categories/AddCategoryModal';
import DeleteModal from '../components/categories/DeleteModal';

const PageWrapper = styled.div`
  // Main wrapper styles if any
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;

const FilterBar = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
`;

const SearchButton = styled(AddButton)`
  // Inherits styles from AddButton
`;

const TableContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 1rem;
    text-align: left;
  }
  thead {
    background: #f9fafb;
  }
  th {
    color: #6b7280;
    font-weight: 600;
  }
  tbody tr {
    border-bottom: 1px solid #f3f4f6;
  }
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${props => props.color || '#ccc'};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
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
  }
  .edit { background-color: #f59e0b; }
  .delete { background-color: #ef4444; }
`;

const initialCategories = [
    { id: 1, name: 'Cloth', icon: <FiTag/>, color: '#ef4444' },
    { id: 2, name: 'Entertainments', icon: <FiFilm/>, color: '#f59e0b' },
    { id: 3, name: 'Bags', icon: <FiBriefcase/>, color: '#0ea5e9' },
    { id: 4, name: 'Sports', icon: <FiZap/>, color: '#10b981' },
    { id: 5, name: 'Furniture', icon: <FiCpu/>, color: '#6366f1' },
    { id: 6, name: 'Crypto', icon: <FiLock/>, color: '#8b5cf6' },
    { id: 7, name: 'Shoes', icon: <FiTrello/>, color: '#3b82f6' },
    { id: 8, name: 'Food', icon: <FiFeather/>, color: '#f97316' },
];

const CategoriesPage = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [categories, setCategories] = useState(initialCategories);

  const handleDeleteClick = (category) => {
    setCategoryToDelete(category);
    setDeleteModalOpen(true);
  };
  
  const confirmDelete = () => {
    setCategories(categories.filter(c => c.id !== categoryToDelete.id));
    setDeleteModalOpen(false);
    setCategoryToDelete(null);
  };

  return (
    <PageWrapper>
      <PageHeader>
        <h1>Categories</h1>
        <AddButton onClick={() => setAddModalOpen(true)}>
          <FiPlus />
          Add New Category
        </AddButton>
      </PageHeader>
      
      <FilterBar>
        <SearchInput placeholder="Search by Name" />
        <SearchButton><FiSearch /> Search</SearchButton>
      </FilterBar>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Category Image</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td><IconContainer color={cat.color}>{cat.icon}</IconContainer></td>
                <td>{cat.name}</td>
                <td>
                  <ActionButtons>
                    <button className="edit"><FiEdit /></button>
                    <button className="delete" onClick={() => handleDeleteClick(cat)}><FiTrash2 /></button>
                  </ActionButtons>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      
      <AddCategoryModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} />
      <DeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete} 
      />
    </PageWrapper>
  );
};

export default CategoriesPage;