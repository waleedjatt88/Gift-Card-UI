// src/pages/policies/CreatePolicyPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addPolicy } from '../../store/policiesSlice';
import TextEditor from '../../components/common/TextEditor';

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  label { font-size: 1rem; font-weight: 600; color: #374151; }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background-color: #7c3aed;
  color: #fff;
`;

const CreatePolicyPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreate = () => {
        if (name.trim() && description.trim()) {
            dispatch(addPolicy({ name, description }));
            navigate('/policies');
        } else {
            alert("Please fill both name and description.");
        }
    };
    
    return (
        <div>
            <PageHeader>
                <h1>Create Policies</h1>
                <Button onClick={handleCreate}>Create</Button>
            </PageHeader>
            <FormContainer>
                <InputGroup>
                    <label>Policy Name</label>
                    <Input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="e.g., Terms & Condition"
                    />
                </InputGroup>
                <InputGroup>
                    <label>Policy Description</label>
                    <TextEditor value={description} onChange={setDescription} />
                </InputGroup>
            </FormContainer>
        </div>
    );
};
export default CreatePolicyPage;