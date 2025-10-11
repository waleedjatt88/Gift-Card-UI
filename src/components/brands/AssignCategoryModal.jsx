// src/components/brands/AssignCategoryModal.jsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import CustomMultiSelect from '../common/CustomMultiSelect'; // Our new component
import { FiTag, FiFilm, FiBriefcase, FiZap, FiCpu, FiLock, FiTrello, FiFeather } from 'react-icons/fi';

// --- MOCK CATEGORY OPTIONS (Complete) ---
// Note: Yeh data humne Categories page mein bhi use kiya tha.
const categoryOptions = [
    { id: 1, name: 'Cloth', icon: <FiTag/>, color: '#ef4444' },
    { id: 2, name: 'Entertainments', icon: <FiFilm/>, color: '#f59e0b' },
    { id: 3, name: 'Bags', icon: <FiBriefcase/>, color: '#0ea5e9' },
    { id: 4, name: 'Sports', icon: <FiZap/>, color: '#10b981' },
    { id: 5, name: 'Furniture', icon: <FiCpu/>, color: '#6366f1' },
    { id: 6, name: 'Crypto', icon: <FiLock/>, color: '#8b5cf6' },
    { id: 7, name: 'Shoes', icon: <FiTrello/>, color: '#3b82f6' },
    { id: 8, name: 'Food', icon: <FiFeather/>, color: '#f97316' },
];

// --- STYLES (Complete) ---

const ModalHeader = styled.div`
  background-color: #1a0033; /* Dark Purple */
  color: white;
  padding: 1rem 2rem;
  margin: -2rem -2rem 2rem -2rem; /* Stretch to edges of the modal padding */
  border-radius: 12px 12px 0 0;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #374151;
    }

    p strong {
        font-size: 1.1rem;
        font-weight: 600;
    }
`;

const Button = styled.button`
  padding: 14px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props => props.primary ? '#7c3aed' : '#f3f4f6'};
  color: ${props => props.primary ? '#fff' : '#374151'};
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

const ColorPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  input[type="color"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 80px;
    height: 40px;
    background-color: transparent;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    cursor: pointer;
  }

  /* For Chrome/Safari */
  input[type="color"]::-webkit-color-swatch {
      border-radius: 6px;
      border: none;
  }
  /* For Firefox */
  input[type="color"]::-moz-color-swatch {
      border-radius: 6px;
      border: none;
  }

  span {
      font-weight: 500;
      color: #4b5563;
  }
`;

// --- COMPONENT (Complete) ---

const AssignCategoryModal = ({ isOpen, onClose, brand }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColor, setSelectedColor] = useState('#000000');

    // useEffect hook brand data change hone par state ko update karega
    useEffect(() => {
        if (brand && isOpen) {
            // Set initial state from the brand prop when modal opens
            setSelectedCategories(brand.assignedCategories || []);
            setSelectedColor(brand.color || '#000000');
        }
    }, [brand, isOpen]); // Rerun effect if brand or isOpen changes

    // Agar brand ka data nahi hai, to modal ko render na karein
    if (!brand) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader><h2>Assign Categories</h2></ModalHeader>
            <ModalBody>
                <InputGroup>
                    <label>Brand Name</label>
                    <p><strong>{brand.name}</strong></p>
                </InputGroup>
                <InputGroup>
                    <label>Categories</label>
                    <CustomMultiSelect 
                        options={categoryOptions}
                        selected={selectedCategories}
                        onChange={setSelectedCategories}
                    />
                </InputGroup>
                <InputGroup>
                    <label>Select Card Color</label>
                    <ColorPicker>
                        <input type="color" value={selectedColor} onChange={e => setSelectedColor(e.target.value)} />
                        <span>{selectedColor.toUpperCase()}</span>
                    </ColorPicker>
                </InputGroup>
                <Button primary onClick={() => alert("Categories Assigned!")}>Assign</Button>
            </ModalBody>
        </Modal>
    );
};

export default AssignCategoryModal;