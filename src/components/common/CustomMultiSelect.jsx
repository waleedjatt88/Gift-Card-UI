// src/components/common/CustomMultiSelect.jsx

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiX } from 'react-icons/fi';

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectDisplay = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 40px 8px 8px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  min-height: 48px;
`;

const Placeholder = styled.span`
  color: #9ca3af;
`;

const SelectedItemTag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #f3f4f6;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.9rem;
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
  }
`;

const DropdownIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-top: 4px;
  max-height: 250px;
  overflow-y: auto;
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }
`;

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${props => props.color || '#ccc'};
`;

const CustomMultiSelect = ({ options, selected, onChange, placeholder = "Select Category" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Click outside to close dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);
    
    const handleSelect = (option) => {
        const isSelected = selected.some(item => item.id === option.id);
        if (isSelected) {
            onChange(selected.filter(item => item.id !== option.id));
        } else {
            onChange([...selected, option]);
        }
    };

    const handleRemove = (optionId) => {
        onChange(selected.filter(item => item.id !== optionId));
    };

    return (
        <SelectWrapper ref={wrapperRef}>
            <SelectDisplay onClick={() => setIsOpen(!isOpen)}>
                {selected.length === 0 ? (
                    <Placeholder>{placeholder}</Placeholder>
                ) : (
                    selected.map(item => (
                        <SelectedItemTag key={item.id}>
                            {item.name}
                            <button onClick={(e) => { e.stopPropagation(); handleRemove(item.id); }}><FiX size={14} /></button>
                        </SelectedItemTag>
                    ))
                )}
                <DropdownIcon><FiChevronDown /></DropdownIcon>
            </SelectDisplay>

            {isOpen && (
                <DropdownList>
                    {options.map(option => (
                        <DropdownItem key={option.id} onClick={() => handleSelect(option)}>
                            <input type="checkbox" checked={selected.some(item => item.id === option.id)} readOnly />
                            <IconContainer color={option.color}>{option.icon}</IconContainer>
                            <span>{option.name}</span>
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </SelectWrapper>
    );
};

export default CustomMultiSelect;