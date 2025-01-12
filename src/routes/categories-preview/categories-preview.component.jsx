import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  // console.log("test from redux store", categoriesMap);

  const isLoading = useSelector(selectIsCategoriesLoading);

  return (
    <div className="shop-container">
      {
        isLoading ? <Spinner /> : (
          Object.keys(categoriesMap).map((title) => {
            // Category title
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )
      }
    </div>
  );
};

export default CategoriesPreview;
