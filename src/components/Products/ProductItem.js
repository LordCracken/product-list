import { useContext } from 'react';

import Card from '../UI/Card';

import { ProductContext } from '../../context/product-context';
import './ProductItem.css';

const ProductItem = ({ id, title, description, isFav }) => {
  const toggleFav = useContext(ProductContext).toggleFav;

  const toggleFavHandler = () => {
    toggleFav(id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={isFav ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button className={!isFav ? 'button-outline' : ''} onClick={toggleFavHandler}>
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
