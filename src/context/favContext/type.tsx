import { Phone } from '../../types/Phone';

export interface FavContextType {
  favState: Phone[];
  addToFav: (product: Phone) => void;
  removeFromFav: (phoneId: string) => void;
  isAddedToFav: (phoneId: string) => boolean;
}
