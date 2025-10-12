import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import { FiImage, FiPlus } from 'react-icons/fi';

const Title = styled.h2`
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormField = styled.div`
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #374151;
  }
`;

const IconUploader = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dashed #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  color: #9ca3af;
  
  .plus-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #7c3aed;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
`;

const AddButton = styled.button`
  padding: 14px;
  border-radius: 8px;
  background-color: #7c3aed;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
`;

const AddCategoryModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title>Add Category</Title>
      <Form>
        <div style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-end'}}>
            <FormField>
                <label>Category Icon</label>
                <IconUploader>
                    <FiImage size={32} />
                    <div className="plus-icon"><FiPlus size={16}/></div>
                </IconUploader>
            </FormField>
            <FormField style={{flex: 1}}>
                <label>Category Name</label>
                <Input type="text" />
            </FormField>
        </div>
        <AddButton>Add</AddButton>
      </Form>
    </Modal>
  );
};
export default AddCategoryModal;