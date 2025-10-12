
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { updatePolicy } from '../../store/policiesSlice';
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


const EditPolicyPage = () => {
    const { policyId } = useParams(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const policy = useSelector(state => 
        state.policies.policies.find(p => p.id === parseInt(policyId))
    );
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (policy) {
            setName(policy.name);
            setDescription(policy.description);
        }
    }, [policy]); 

    const handleUpdate = () => {
        if (name.trim() && description.trim()) {
            dispatch(updatePolicy({
                id: parseInt(policyId),
                name,
                description,
            }));
            navigate('/policies'); 
        } else {
            alert("Policy name and description cannot be empty.");
        }
    };

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