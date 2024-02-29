import { Link } from "react-router-dom";
import { BackgroundImage, DirectoryBody, DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  return (
    <DirectoryItemContainer className="directory_item_container">
      <BackgroundImage
        className="background_image"
        // style={{
        //   backgroundImage: `url(${category.imageUrl})`,
        // }}
        imageUrl = {category.imageUrl}
      />
      <DirectoryBody className="directory_item_body_container">
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
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
