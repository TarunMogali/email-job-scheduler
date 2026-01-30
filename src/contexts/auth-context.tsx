'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean | undefined;
  user: User | null;
  avatar: string;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // In a real app, you'd check for a token in localStorage or a cookie here.
    // For this mock, we'll just initialize as not authenticated.
    setIsAuthenticated(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const avatar = PlaceHolderImages.find(p => p.id === 'user-avatar')?.imageUrl || '';

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, avatar, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
