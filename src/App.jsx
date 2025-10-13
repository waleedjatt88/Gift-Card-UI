
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import ResetPassword from './pages/ResetPassword';

import DashboardPage from './pages/DashboardPage';
import CategoriesPage from './pages/CategoriesPage';
import UsersPage from './pages/UsersPage';
import UserDetailsPage from './pages/UserDetailsPage';
import OrdersPage from './pages/OrdersPage';
import GiftCardsPage from './pages/GiftCardsPage';
import TotalBrandsPage from './pages/TotalBrandsPage';
import ProfilePage from './pages/ProfilePage'; 
import SettingsPage from './pages/SettingsPage'; 


import PoliciesListPage from './pages/policies/PoliciesListPage';
import CreatePolicyPage from './pages/policies/CreatePolicyPage';
import ViewPolicyPage from './pages/policies/ViewPolicyPage';
import EditPolicyPage from './pages/policies/EditPolicyPage';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<UserDetailsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/gift-cards" element={<GiftCardsPage />} />
            <Route path="/total-brands" element={<TotalBrandsPage />} />
            
            <Route path="/policies" element={<PoliciesListPage />} />
            <Route path="/policies/create" element={<CreatePolicyPage />} />
            <Route path="/policies/view/:policyId" element={<ViewPolicyPage />} />
            <Route path="/policies/edit/:policyId" element={<EditPolicyPage />} />
            <Route path="/profile" element={<ProfilePage />} /> 
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;