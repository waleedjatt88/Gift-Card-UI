// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import DashboardLayout from './components/layout/DashboardLayout';

// Auth Pages
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import ResetPassword from './pages/ResetPassword';

// Dashboard Pages
import DashboardPage from './pages/DashboardPage';
import CategoriesPage from './pages/CategoriesPage';
import UsersPage from './pages/UsersPage';
import UserDetailsPage from './pages/UserDetailsPage';
import OrdersPage from './pages/OrdersPage';
import GiftCardsPage from './pages/GiftCardsPage';
import TotalBrandsPage from './pages/TotalBrandsPage';

// Policies Pages
import PoliciesListPage from './pages/policies/PoliciesListPage';
import CreatePolicyPage from './pages/policies/CreatePolicyPage';
import ViewPolicyPage from './pages/policies/ViewPolicyPage';
import EditPolicyPage from './pages/policies/EditPolicyPage';

// Global Styles
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* Auth Routes (Layout ke bahar) */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* === DASHBOARD LAYOUT WRAPPER === */}
          {/* Ab saare dashboard pages iske andar hain */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<UserDetailsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/gift-cards" element={<GiftCardsPage />} />
            <Route path="/total-brands" element={<TotalBrandsPage />} />
            
            {/* Policies ke routes bhi ab layout ke andar hain */}
            <Route path="/policies" element={<PoliciesListPage />} />
            <Route path="/policies/create" element={<CreatePolicyPage />} />
            <Route path="/policies/view/:policyId" element={<ViewPolicyPage />} />
            <Route path="/policies/edit/:policyId" element={<EditPolicyPage />} />
          </Route>
          
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;