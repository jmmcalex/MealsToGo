import { FirebaseError } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { loginRequest } from './authentication.service';

type ContextProps = {
  children: React.ReactNode;
};

type AuthenticationState = {
  error: FirebaseError | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  clearError: () => void;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => void;
};

const defaultAuthenticationContext = {
  error: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,
  clearError: () => null,
  onLogin: (email: string, password: string) => null,
  onLogout: () => null,
  onRegister: (email: string, password: string, repeatedPassword: string) =>
    null,
};

export const AuthenticationContext = createContext<AuthenticationState>(
  defaultAuthenticationContext
);

export const AuthenticationContextProvider = ({ children }: ContextProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<FirebaseError | null>(null);

  const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setUser(user);
    }
  });

  const clearError = () => {
    setError(null);
  };

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential: UserCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPasword: string
  ) => {
    setIsLoading(true);
    if (password !== repeatedPasword) {
      setError(new FirebaseError('0', 'Error: Passwords do not Match'));
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(getAuth());
  };

  return (
    <AuthenticationContext.Provider
      value={{
        error,
        isAuthenticated: !user,
        isLoading,
        user,
        clearError,
        onLogin,
        onLogout,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
