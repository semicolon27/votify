import React, { ReactNode, createContext, useState } from 'react';

interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: any;
  isObjectLoading: (obj: any) => boolean;
  setObjectLoading: (obj: any, val: boolean) => void;
  resetLoading: () => void;
}

export const LoadingContext = createContext({} as LoadingContextProps);

export type LoadingProviderProps = {
  children?: ReactNode;
};

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  // Define the state variables
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
    isLoading,
    setIsLoading,
    isObjectLoading,
    setObjectLoading,
    resetLoading,
  };

  // Provide the context value to the children components
  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};
