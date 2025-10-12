
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiEye, FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import DeleteModal from '../../components/categories/DeleteModal';
import { deletePolicy } from '../../store/policiesSlice';

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const PolicyCard = styled.div`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  div p:first-child {
      color: #6b7280;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
  }

  strong { 
      font-size: 1.1rem; 
      color: #111827;
      font-weight: 600;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }
  .view { background-color: #22c55e; } /* Green */
  .edit { background-color: #f59e0b; } /* Orange */
  /* Delete button design mein nahi hai, lekin functionality ke liye add kar sakte hain */
`;

const PoliciesListPage = () => {
    const policies = useSelector((state) => state.policies.policies);
    const navigate = useNavigate();
    
    return (
        <div>
            <PageHeader>
                <h1>My Policies</h1>
            </PageHeader>
            
            <div>
                {policies.map(policy => (
                    <PolicyCard key={policy.id}>
                        <div>
                            <p>Policy Name</p>
                            <strong>{policy.name}</strong>
                        </div>
                        <ActionButtons>
                            <button className="view" onClick={() => navigate(`/policies/view/${policy.id}`)}><FiEye/></button>
                            <button className="edit" onClick={() => navigate(`/policies/edit/${policy.id}`)}><FiEdit/></button>
                        </ActionButtons>
                    </PolicyCard>
                ))}
            </div>
        </div>
    );
};

export default PoliciesListPage;