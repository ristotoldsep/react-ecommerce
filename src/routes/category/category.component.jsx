import {  useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./category.styles.scss";

// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

export const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  // console.log(categoriesMap);

  useEffect(() => {
    // if URL is /shop/hats, useParams will get 'hats' and hash match it in categoriesMap
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category_page">
        <div className="heading_container">
            <span className="bg_title">
                {category}
            </span>
            <h1 className="title">
                {category}
            </h1>
        </div>
        <div className="category-container">

        {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
};

export default Category;

