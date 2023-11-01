export type PhoneCapacity = '64GB' | '128GB' | '256GB';
export type PhoneColor =
'black' | 'green' | 'yellow' | 'white' | 'purple' | 'red';
export type CellType = 'GPRS' | 'EDGE' | 'WCDMA' | 'UMTS' | 'HSPA' | 'LTE';

export type DescriptionSection = {
  title: string;
  text: string[];
};

export type Phone = {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: PhoneCapacity[];
  capacity: PhoneCapacity;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: PhoneColor[];
  color: PhoneColor;
  images: string[];
  description: DescriptionSection[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: CellType[];
};

export interface ProductDetailsPageContextType {
  phoneData: Phone | undefined,
  isLoading: boolean,
  error: boolean,
  photoPath: string,
  changePhoto: (path: string) => void,
  isActivePhoto: (path: string) => boolean,
}

export type Props = React.PropsWithChildren<{}>;
