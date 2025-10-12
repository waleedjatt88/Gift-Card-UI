
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import profileAvatar from '../assets/images/avatar.png'; 

const initialProfileData = {
    name: 'Jennifer Taylor',
    email: 'admin@gmail.com',
    contact: '360-943-7332',
    address: '7 Autry, Irvine, California 92618, United States',
    picture: profileAvatar,
};


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 { font-size: 1.875rem; font-weight: 600; }
`;

const EditButton = styled.button`
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
`;

const ProfileContainer = styled.div`
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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr; /* Fixed width for labels, rest for inputs */
  gap: 2rem;
  align-items: center;
`;

const Label = styled.label`
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 0.9rem;
  background-color: ${props => props.disabled ? '#f9fafb' : '#fff'};
  color: #374151;
  &:focus {
    outline: none;
    border-color: #7c3aed;
  }
`;

const ProfilePictureWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ef4444;
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const UpdateButton = styled(EditButton)``; 
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = () => {
    console.log("Profile Updated:", profileData);
    setIsEditing(false); 
  };

  return (
    <PageWrapper>
      <PageHeader>
        <h1>My Profile</h1>
        {!isEditing && (
          <EditButton onClick={() => setIsEditing(true)}>
            Edit Profile
          </EditButton>
        )}
      </PageHeader>

      <ProfileContainer>
        <ContentHeader>
          <h2>Profile</h2>
        </ContentHeader>
        
        <FormGrid>
          <Label>Profile Picture</Label>
          <ProfilePictureWrapper>
            <ProfileImage src={profileData.picture} alt="Profile" />
            {isEditing && <RemoveButton><FiX size={18} /></RemoveButton>}
          </ProfilePictureWrapper>

          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={profileData.name} onChange={handleInputChange} disabled={!isEditing} />

          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" value={profileData.email} onChange={handleInputChange} disabled={!isEditing} />
          
          <Label htmlFor="contact">Contact Number</Label>
          <Input id="contact" name="contact" value={profileData.contact} onChange={handleInputChange} disabled={!isEditing} />

          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" value={profileData.address} onChange={handleInputChange} disabled={!isEditing} />
        </FormGrid>

        {isEditing && (
          <ButtonContainer>
            <UpdateButton onClick={handleUpdateProfile}>
              Update Profile
            </UpdateButton>
          </ButtonContainer>
        )}
      </ProfileContainer>
    </PageWrapper>
  );
};

export default ProfilePage;