import React, { ReactNode, createContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface AppContextProps {
  userData?: User | null;
  setUserData?: React.Dispatch<React.SetStateAction<User | null>>;
  commonState?: string;
  setCommonState?: React.Dispatch<React.SetStateAction<string>>;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  isObjectLoading?: (obj: any) => boolean;
  setObjectLoading?: (obj: any, val: boolean) => void;
  resetLoading?: () => void;
}

export const AppContext = createContext({} as AppContextProps | any);

export type AppProviderProps = {
  children?: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Define the state variables
  const [userData, setUserData] = useState(null);
  const [commonState, setCommonState] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [listObjectLoading, setListObjectLoading] = useState<any[]>([]);

  const isObjectLoading = (obj: any): boolean =>
    listObjectLoading.includes(obj);

  const setObjectLoading = (obj: any, val: boolean): void => {
    if (isObjectLoading(obj) && val) return;
    if (!isObjectLoading(obj) && !val) return;

    if (val) listObjectLoading.push(obj);
    if (!val) {
      const index = listObjectLoading.indexOf(obj);
      if (index >= 0) listObjectLoading.splice(index, 1);
    }
  };

  const resetLoading = (): void => {
    setIsLoading(false);
    setListObjectLoading([]);
  };

  // Define the context value
  const contextValue = {
    userData,
    setUserData,
    commonState,
    setCommonState,
    isLoading,
    setIsLoading,
    isObjectLoading,
    setObjectLoading,
    resetLoading,
  };

  // Provide the context value to the children components
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
