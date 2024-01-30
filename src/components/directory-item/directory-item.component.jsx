import { Link } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  return (
    <div className="directory_item_container">
      <div
        className="background_image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="directory_item_body_container">
        <h2>
          <Link to={`/shop/${category.title.toLowerCase()}`}>
            {category.title}
          </Link>
        </h2>
        
        <p>
          <Link to={`/shop/${category.title.toLowerCase()}`}>
            Shop now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DirectoryItem;
