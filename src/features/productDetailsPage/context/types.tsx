export type DescriptionSection = {
  title: string;
  text: string[];
};

export type Phone = {
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
  phoneData: Phone | undefined;
  isLoading: boolean;
  error: boolean;
  photoPath: string;
  changePhoto: (path: string) => void;
  isActivePhoto: (path: string) => boolean;
}

export type Props = React.PropsWithChildren<{}>;
