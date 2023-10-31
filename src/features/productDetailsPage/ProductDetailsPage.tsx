import { ProductDetailsPageConetnt }
  from './ProductDetailsPageContent/ProductDetailsPageContent';
import { ProductDetailsPageProvider }
  from './context/ProductDetailsPageContext';

export const ProductDetailsPage = () => (
  <ProductDetailsPageProvider>
    <ProductDetailsPageConetnt />
  </ProductDetailsPageProvider>
);
