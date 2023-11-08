/* eslint-disable max-len */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  ProductDetailsPageContextType,
  Props,
  PhoneDetails,
} from './types';
import { Phone } from '../../../types/Phone';

const ProductDetailsPageContext = createContext<
ProductDetailsPageContextType | undefined
>(undefined);

export const ProductDetailsProvider = ({ children }: Props) => {
  const [phoneData, setPhoneData] = useState<PhoneDetails | undefined>();
  const [phonesData, setPhonesData] = useState<Phone[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>(
    'product_catalog/00.jpg',
  );

  const getPhoneData = async () => {
    const response = await fetch(
      'product_catalog/apple-iphone-11-128gb-black.json',
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  };

  const getPhonesData = async () => {
    const response = await fetch(
      'product_catalog/phones.json',
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const dataPhone = await getPhoneData();
      const dataPhones = await getPhonesData();

      setPhoneData(dataPhone);
      setPhonesData(dataPhones);
      try {
        setTimeout(async () => {
          setIsLoading(false);
        }, 1000);
      } catch (e) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const changePhoto = (path: string) => setPhotoPath(path);

  const isActivePhoto = (path: string) => path === photoPath;

  return (
    <ProductDetailsPageContext.Provider
      value={{
        phoneData,
        phonesData,
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

export const useProductDetailsContext = () => {
  const context = useContext(ProductDetailsPageContext);

  if (!context) {
    throw new Error(
      'useProductDetailsContext must be used within a ProductDetailsPageProvider',
    );
  }

  return context;
};
