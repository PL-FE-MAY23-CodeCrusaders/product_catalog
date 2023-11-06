import { ProductDetailsPageContent } from './ProductDetailsPageContent/ProductDetailsPageContent';
import { ProductDetailsPageProvider } from './context/ProductDetailsPageContext';

export const ProductDetailsPage = () => (
  <ProductDetailsPageProvider>
    <ProductDetailsPageContent />
  </ProductDetailsPageProvider>
);
