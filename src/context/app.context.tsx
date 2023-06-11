import React, { ReactNode, createContext, useState } from 'react';
import { LoadingProvider } from './loading.context';
import { AuthProvider } from './auth.context';

export const AppContext = createContext({} as any);

export type AppProviderProps = {
  children?: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Define the state variables
  const [commonState, setCommonState] = useState('');

  // Define the context value
  const contextValue = {
    commonState,
    setCommonState,
  };

  // Provide the context value to the children components
  return (
    <AppContext.Provider value={contextValue}>
      <AuthProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </AuthProvider>
    </AppContext.Provider>
  );
};
