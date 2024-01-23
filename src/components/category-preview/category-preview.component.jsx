import { Link } from 'react-router-dom';

import './category-preview.styles.scss';

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products }) => {
  return (
    <div className='category-preview-container'>
        <h2>
            <span className='title'>
                <Link to={`/shop/${title.toLowerCase()}`}>
                    {title.toUpperCase()}
                </Link>
            </span>
        </h2>
        <div className='preview'>
            {
                // Filter out first four products
                products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
            }
        </div>
    </div>
  )
}

export default CategoryPreview