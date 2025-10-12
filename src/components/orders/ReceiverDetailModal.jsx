
import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal'; 
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

import cardBg from '../../assets/images/mcdonalds-card.png';
import userAvatar from '../../assets/images/avatar2.png'; 


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

const GiftCardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const CardAmount = styled.span`
  align-self: flex-end;
  font-size: 1.25rem;
  font-weight: bold;
  background: rgba(0,0,0,0.4);
  padding: 4px 10px;
  border-radius: 6px;
`;

const CardBrand = styled.span`
  align-self: flex-end;
  font-weight: 600;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
`;

const ReceiverInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f9fafb;
  padding: 1rem;
  border-radius: 8px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReceiverDetails = styled.div`
  p {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #6b7280;
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
  }
  p strong {
      color: #111827;
      font-weight: 600;
  }
`;


const ReceiverDetailModal = ({ isOpen, onClose, order, user }) => {
  if (!isOpen || !order || !user) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <h2>Gift Card Receiver Detail</h2>
      </ModalHeader>
      <ModalBody>
        <GiftCardImage bg={cardBg}>
            <CardAmount>{order.amount}</CardAmount>
            <CardBrand>{order.brand}</CardBrand>
        </GiftCardImage>

        <div>
            <SectionTitle>Receiver ID</SectionTitle>
            <ReceiverInfoBox>
                <Avatar src={user.avatar} alt={user.name} />
                <ReceiverDetails>
                    <p><strong>{user.name}</strong></p>
                    <p><FiMail /> {user.email}</p>
                    <p><FiPhone /> {user.phone}</p>
                    <p><FiMapPin /> {user.address}</p>
                </ReceiverDetails>
            </ReceiverInfoBox>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ReceiverDetailModal;