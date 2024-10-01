import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import './product-details.styles.scss';

// import { CategoriesContext } from "../../contexts/categories.context";
import { CartContext } from "../../contexts/cart.context";

import Button from "../../components/button/button.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const convertToUrlFriendly = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

const ProductDetails = () => {
  const { productName } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap = useSelector(selectCategoriesMap);

  const { addItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Loop through categoriesMap to find the product
      for (const categoryKey in categoriesMap) {
        const categoryProducts = categoriesMap[categoryKey];
        const foundProduct = categoryProducts.find(
          (p) => convertToUrlFriendly(p.name) === productName
        );

        if (foundProduct) {
          setProduct(foundProduct);
          break;
        }
      }
    };

    fetchData();
  }, [categoriesMap, productName]);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

console.log(product);

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details-info">
        <h2>{product.name}</h2>
        {product.productDescription && (
          <p>{product.productDescription}</p>
        )}
        <p className="product-price">{product.price}€</p>
        <Button onClick={addProductToCart}>
            Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
