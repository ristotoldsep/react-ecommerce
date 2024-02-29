// import { Link } from 'react-router-dom';

import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products }) => {
  return (
    <CategoryPreviewContainer className='category-preview-container'>
        <h2>
            <Title to={`/shop/${title.toLowerCase()}`}>
                {title.toUpperCase()}
            </Title>
        </h2>
        <Preview className='preview'>
            {
                // Filter out first four products
                products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
            }
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview