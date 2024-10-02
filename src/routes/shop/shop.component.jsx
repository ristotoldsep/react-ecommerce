import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';
import ProductDetails from '../product-details/product-details.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
        const categoriesArray = await getCategoriesAndDocuments();

        // console.log(categoriesArray);

        dispatch(setCategories(categoriesArray));
    }

    getCategories();
}, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route path='product/:productName' element={<ProductDetails />} />
    </Routes>
  );
};

export default Shop;
