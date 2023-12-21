// Inside main App component file
import React from 'react';
import { UserProvider } from './UserContext';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
