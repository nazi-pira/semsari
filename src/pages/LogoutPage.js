import React from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../components/auth/ProvideAuth'

export default function LogoutPage() {
  const auth = useAuth()
  React.useEffect(() => {
    auth.logout()
  })

  return (
    <Redirect to="/login" />
  );
}