import React, { ReactNode, createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

interface AuthContextProps {
  userData: {
    id: string;
    username: string;
    level: string;
  };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      id: string;
      username: string;
      level: string;
    }>
  >;
  getTokenFromStorage: () => Promise<any>;
  getTokenFromStorageOrLogout: () => Promise<any>;
  isTokenExpired: () => Promise<boolean>;
  logout: () => void;
  setTokenStorage: (token: string) => Promise<any>;
}

export const AuthContext = createContext({} as AuthContextProps);

export type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const lsField = 'token';
  // Define the state variables
  const [userData, setUserData] = useState({
    id: '',
    username: '',
    name: '',
    level: '',
  });

  const getTokenFromStorage = async () => {
    try {
      if (!userData.id) {
        const token = await localStorage.getItem(lsField);
        const decodedToken: any = jwt_decode(token ?? '');
        setUserData({ ...userData, ...decodedToken });
        return decodedToken;
      }
    } catch (err) {
      console.log('getTokenFromStorage', err);
      logout();
    }
  };

  const setTokenStorage = async (token: string) => {
    try {
      const decodedToken: any = jwt_decode(token);
      await localStorage.setItem(lsField, token);
      setUserData({ ...userData, ...decodedToken });
      return decodedToken;
    } catch (err) {
      console.log('getTokenFromStorage', err);
      logout();
    }
  };

  const getTokenFromStorageOrLogout = async () => {
    try {
      if (!userData.id) {
        const token = await localStorage.getItem(lsField);
        const decodedToken: any = jwt_decode(token ?? '');
        setUserData({ ...userData, ...decodedToken });
        if (await isTokenExpired()) throw Error('Session Expired');
        return decodedToken;
      }
    } catch (err) {
      console.log('getTokenFromStorage', err);
      logout();
    }
  };

  // Checking the token expiration
  const isTokenExpired = async () => {
    const currentTime = Date.now() / 1000; // Convert to seconds
    const token = await localStorage.getItem(lsField);
    const decodedToken: any = jwt_decode(token ?? '');
    return decodedToken.exp < currentTime;
  };

  const logout = () => {
    localStorage.removeItem(lsField);
    // if (redirect && router.currentRoute.value.fullPath !== '/login')
    document.location.href = '/admin/login';
  };

  // Define the context value
  const contextValue = {
    userData,
    setUserData,
    getTokenFromStorage,
    getTokenFromStorageOrLogout,
    isTokenExpired,
    logout,
    setTokenStorage,
  };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
