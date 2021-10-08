import React, { useState, createContext } from 'react';
import { UserCredential } from 'firebase/auth';
import { loginRequest } from './authentication.service';
import { FirebaseError } from '@firebase/util';

type ContextProps = {
  children: React.ReactNode;
};

type AuthenticationState = {
  isAuthenticated: boolean;
  user: UserCredential | null;
  isLoading: boolean;
  error: FirebaseError | null;
  onLogin: (email: string, password: string) => void;
};

const defaultAuthenticationContext = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
  onLogin: (email: string, password: string) => null,
};

export const AuthenticationContext = createContext<AuthenticationState>(
  defaultAuthenticationContext
);

export const AuthenticationContextProvider = ({ children }: ContextProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserCredential | null>(null);
  const [error, setError] = useState(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user: UserCredential) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
