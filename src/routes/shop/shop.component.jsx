import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';
import ProductDetails from '../product-details/product-details.component';

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route path='product/:productName' element={<ProductDetails />} />
    </Routes>
  );
};

export default Shop;
