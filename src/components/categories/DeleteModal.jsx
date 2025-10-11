// src/components/categories/DeleteModal.jsx
import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import illustration from '../../assets/images/delete-illustration.png';

const ModalContent = styled.div`
  text-align: center;
`;

const Illustration = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: #111827;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  font-weight: 600;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  background-color: #7c3aed;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <Title>Delete</Title>
        <Illustration src={illustration} alt="Delete Illustration" />
        <ButtonWrapper>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <DeleteButton onClick={onConfirm}>Delete</DeleteButton>
        </ButtonWrapper>
      </ModalContent>
    </Modal>
  );
};
export default DeleteModal;