// src/store/policiesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  policies: [
    { id: 1, name: 'Terms & Condition', description: 'This is the default T&C content.' },
    { id: 2, name: 'Privacy Policy', description: 'This is the default Privacy Policy content.' },
  ],
};

const policiesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {
    addPolicy: (state, action) => {
      const newPolicy = { id: Date.now(), ...action.payload };
      state.policies.push(newPolicy);
    },
    updatePolicy: (state, action) => {
      const index = state.policies.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.policies[index] = action.payload;
      }
    },
    deletePolicy: (state, action) => {
      state.policies = state.policies.filter(p => p.id !== action.payload.id);
    },
  },
});

export const { addPolicy, updatePolicy, deletePolicy } = policiesSlice.actions;
export default policiesSlice.reducer;