/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable max-len */
import { useParams } from 'react-router-dom';

import {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  ProductDetailsPageContextType,
  Props,
  PhoneDetails,
} from './types';
import { Phone } from '../../../types/Phone';
import { getPhone, getPhones } from '../../../api';

const ProductDetailsPageContext = createContext<
ProductDetailsPageContextType | undefined
>(undefined);

export const ProductDetailsProvider = ({ children }: Props) => {
  const [phoneData, setPhoneData] = useState<PhoneDetails | null>(null);
  const [phonesData, setPhonesData] = useState<Phone[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string | undefined>(undefined);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const dataPhone = await getPhone(id!);
      const dataPhones = await getPhones();

      setPhoneData(dataPhone);
      setPhonesData(dataPhones);
      setPhotoPath(`https://crusaders.onrender.com/${dataPhone.images[0]}`);
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
  }, [id]);

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
