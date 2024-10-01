// import { Link } from "react-router-dom";
import { BackgroundImage, DirectoryBody, DirectoryItemContainer } from "./directory-item.styles";

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer className="directory_item_container" onClick={onNavigateHandler}>
     <BackgroundImage imageurl={imageUrl} />
      <DirectoryBody className="directory_item_body_container">
        {/* <h2>
          <Link to={`/shop/${category.title.toLowerCase()}`}>
            {title}
          </Link>
        </h2> */}
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
