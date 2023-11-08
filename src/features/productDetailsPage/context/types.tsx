import { Phone } from '../../../types/Phone';

export type DescriptionSection = {
  title: string;
  text: string[];
};

export type PhoneDetails = {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: DescriptionSection[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};

export interface ProductDetailsPageContextType {
  phoneData: PhoneDetails | null;
  phonesData: Phone[] | [];
  isLoading: boolean;
  error: boolean;
  photoPath: string;
  changePhoto: (path: string) => void;
  isActivePhoto: (path: string) => boolean;
}

export type Props = React.PropsWithChildren<{}>;
