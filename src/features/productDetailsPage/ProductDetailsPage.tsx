import {
  ProductDetailsPageContent,
} from './ProductDetailsPageContent/ProductDetailsPageContent';
import { ProductDetailsProvider } from './context/ProductDetailsContext';

export const ProductDetailsPage = () => (
  <ProductDetailsProvider>
    <ProductDetailsPageContent />
  </ProductDetailsProvider>
);
