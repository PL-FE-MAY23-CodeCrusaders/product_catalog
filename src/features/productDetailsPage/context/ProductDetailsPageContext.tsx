/* eslint-disable max-len */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { ProductDetailsPageContextType, Props, Phone } from './types';

const ProductDetailsPageContext = createContext<
ProductDetailsPageContextType | undefined
>(undefined);

export const ProductDetailsPageProvider = ({ children }: Props) => {
  const [phoneData, setPhoneData] = useState<Phone | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>('product_catalog/00.jpg');

  const getData = async () => {
    const response = await fetch(
      'product_catalog/apple-iphone-11-128gb-black.json',
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getData();

        setPhoneData(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const changePhoto = (path: string) => setPhotoPath(path);

  const isActivePhoto = (path:string) => path === photoPath;

  return (
    <ProductDetailsPageContext.Provider
      value={{
        phoneData,
        isLoading,
        error,
        photoPath,
        changePhoto,
        isActivePhoto,
      }}
    >
      {children}
    </ProductDetailsPageContext.Provider>
  );
};

export const useProductDetailsPageContext = () => {
  const context = useContext(ProductDetailsPageContext);

  if (!context) {
    throw new Error(
      'useProductDetailsPageContext must be used within a ProductDetailsPageProvider',
    );
  }

  return context;
};
