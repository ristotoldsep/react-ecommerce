import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  console.log("test from redux store", categoriesMap);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        // Category title
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
