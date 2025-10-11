// src/pages/policies/EditPolicyPage.jsx

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { updatePolicy } from '../../store/policiesSlice';
import TextEditor from '../../components/common/TextEditor'; // Reusing our Text Editor

// --- STYLES (Adapted from previous pages) ---

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

    label {
        font-size: 1rem;
        font-weight: 600;
        color: #374151;
    }
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
  align-self: flex-end; /* Button ko right side par rakhega */
`;

// --- COMPONENT ---

const EditPolicyPage = () => {
    const { policyId } = useParams(); // URL se policy ka ID hasil karein
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Redux store se policy ka data find karein
    const policy = useSelector(state => 
        state.policies.policies.find(p => p.id === parseInt(policyId))
    );
    
    // Form fields ke liye state
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Jab policy ka data Redux se load ho jaye, to form fields ko us data se set karein
    useEffect(() => {
        if (policy) {
            setName(policy.name);
            setDescription(policy.description);
        }
    }, [policy]); // Yeh effect tab chalega jab 'policy' object change hoga

    // "Update" button par click hone par chalne wala function
    const handleUpdate = () => {
        if (name.trim() && description.trim()) {
            dispatch(updatePolicy({
                id: parseInt(policyId),
                name,
                description,
            }));
            navigate('/policies'); // Update karne ke baad wapis list page par bhej dein
        } else {
            alert("Policy name and description cannot be empty.");
        }
    };

    // Agar policy ID ghalat ho aur data na mile
    if (!policy) {
        return <div>Policy not found.</div>;
    }
    
    return (
        <div>
            <PageHeader>
                <h1>Edit Policy</h1>
            </PageHeader>

            <FormContainer>
                <InputGroup>
                    <label>Policy Name</label>
                    <Input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Terms & Condition"
                    />
                </InputGroup>

                <InputGroup>
                    <label>Policy Description</label>
                    <TextEditor 
                        value={description}
                        onChange={setDescription}
                    />
                </InputGroup>
                
                <Button onClick={handleUpdate}>Update</Button>
            </FormContainer>
        </div>
    );
};

export default EditPolicyPage;