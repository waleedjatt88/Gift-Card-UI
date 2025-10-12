
import React, { forwardRef } from 'react';
import styled from 'styled-components';

const notificationsData = [
    { id: 1, title: 'You have Create a new Category', description: 'Rehan with Email(abcd@gamil.com) has sent request for id approval' },
    { id: 2, title: 'Brands are Categorize', description: 'Ahmed with Email(abcd@gamil.com) has sent request for order cancel.' },
    { id: 3, title: 'You Have blocked Ahmed Ali', description: 'Service Provider has blocked by you.' },
];

const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px); /* Header ki height + 10px ka gap */
  right: 0;
  width: 400px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  z-index: 1000;
  overflow: hidden; /* To ensure children respect border-radius */
`;

const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationContent = styled.div`
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #7c3aed; /* Purple title */
    margin: 0 0 0.25rem 0;
  }
  p {
    font-size: 0.9rem;
    color: #6b7280;
    margin: 0;
  }
`;

const ViewLink = styled.a`
  font-size: 0.9rem;
  font-weight: 600;
  color: #6b7280;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap; /* Prevent "View" from wrapping */
  margin-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const NotificationsDropdown = forwardRef((props, ref) => {
  return (
    <DropdownContainer ref={ref}>
      <NotificationList>
        {notificationsData.map(notification => (
          <NotificationItem key={notification.id}>
            <NotificationContent>
              <h4>{notification.title}</h4>
              <p>{notification.description}</p>
            </NotificationContent>
            <ViewLink>View</ViewLink>
          </NotificationItem>
        ))}
      </NotificationList>
    </DropdownContainer>
  );
});

export default NotificationsDropdown;