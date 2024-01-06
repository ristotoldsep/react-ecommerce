import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="category_container">
      <div
        className="background_image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category_body_container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
