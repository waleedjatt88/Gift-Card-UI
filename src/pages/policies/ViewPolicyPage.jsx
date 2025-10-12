
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { deletePolicy } from '../../store/policiesSlice';
import DeleteModal from '../../components/categories/DeleteModal';


const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  
  &.edit { background-color: #f59e0b; } /* Orange */
  &.delete { background-color: #ef4444; } /* Red */
`;

const ContentContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  /* Styles for the content rendered from React Quill */
  h1, h2, h3 {
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  ol, ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }
`;


const ViewPolicyPage = () => {
    const { policyId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const policy = useSelector(state => 
        state.policies.policies.find(p => p.id === parseInt(policyId))
    );
    
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleDeleteConfirm = () => {
        dispatch(deletePolicy({ id: parseInt(policyId) }));
        setDeleteModalOpen(false);
        navigate('/policies'); 
    };

    if (!policy) {
        return <div>Policy not found</div>;
    }

    return (
        <div>
            <PageHeader>
                <h1>{policy.name}</h1>
                <ActionButtons>
                    <ActionButton 
                        className="edit" 
                        onClick={() => navigate(`/policies/edit/${policy.id}`)}
                    >
                        <FiEdit />
                    </ActionButton>
                    <ActionButton 
                        className="delete" 
                        onClick={() => setDeleteModalOpen(true)}
                    >
                        <FiTrash2 />
                    </ActionButton>
                </ActionButtons>
            </PageHeader>

            <ContentContainer>
                <div dangerouslySetInnerHTML={{ __html: policy.description }} />
            </ContentContainer>

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    );
};

export default ViewPolicyPage;