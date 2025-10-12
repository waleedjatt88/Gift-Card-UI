
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiLock } from 'react-icons/fi';
import Input from '../components/common/Input'; 
import ToggleSwitch from '../components/common/ToggleSwitch'; 

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PageHeader = styled.div`
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const SettingsContainer = styled.div`
  background: #fff;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const ContentHeader = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #7c3aed;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
  }
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* Left side wider than right */
  gap: 4rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #6b7280;
    }
    
    .create-new {
        font-size: 0.8rem;
        color: #9ca3af;
    }
`;

const NotificationSetting = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9fafb;
    padding: 1rem;
    border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

const UpdateButton = styled.button`
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
`;



const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <PageWrapper>
      <PageHeader>
        <h1>Settings</h1>
      </PageHeader>

      <SettingsContainer>
        <ContentHeader>
          <h2>Settings</h2>
        </ContentHeader>

        <SettingsGrid>
          <Section>
            <SectionTitle>Profile Picture</SectionTitle>
            <InputGroup>
                <label>Current Password</label>
                <Input type="password" placeholder="************" icon={<FiLock/>} />
            </InputGroup>
            <InputGroup>
                <label>
                    <span className="create-new">Create new password</span><br/>
                    New Password
                </label>
                <Input type="password" placeholder="************" icon={<FiLock/>} />
            </InputGroup>
            <InputGroup>
                <label>Confirm Password</label>
                <Input type="password" placeholder="************" icon={<FiLock/>} />
            </InputGroup>
          </Section>

          <Section>
            <SectionTitle>Notifications</SectionTitle>
            <NotificationSetting>
                <p>Enabled</p>
                <ToggleSwitch 
                    checked={notificationsEnabled}
                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                />
            </NotificationSetting>
          </Section>
        </SettingsGrid>

        <ButtonContainer>
            <UpdateButton>Update</UpdateButton>
        </ButtonContainer>
      </SettingsContainer>
    </PageWrapper>
  );
};

export default SettingsPage;