/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
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
import {
  getDiscountPhones, getPhone, getAllPhones, API_IMG_URL,
} from '../../../api';

const ProductDetailsPageContext = createContext<
ProductDetailsPageContextType | undefined
>(undefined);

export const ProductDetailsProvider = ({ children }: Props) => {
  const [phoneData, setPhoneData] = useState<PhoneDetails | null>(null);
  const [phonesData, setPhonesData] = useState<Phone[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>('');
  const [sliderData, setSilderData] = useState<Phone[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const dataPhone = await getPhone(id || '');
        const dataPhones = await getAllPhones();
        const sliderPhones = await getDiscountPhones();

        if (dataPhone && dataPhones) {
          if (dataPhone.images && dataPhone.images.length > 0) {
            setPhoneData(dataPhone);
            setPhotoPath(`${API_IMG_URL}${dataPhone.images[0]}`);
            setPhonesData(dataPhones);
            setSilderData(sliderPhones);
          } else {
            throw new Error('Phone data does not contain images');
          }
        } else {
          throw new Error('Error fetching phone data');
        }

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          // Handle 404 specifically (Not Found)
          setError(true);
          console.error('404 Error: Phone not found');
        } else {
          // For other errors
          setError(true);
          console.error('Error fetching phone data:', error);
        }

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
        sliderData,
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
