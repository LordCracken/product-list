import Card from '../UI/Card';

import { useStore } from '../../hooks/store';
import './ProductItem.css';

const ProductItem = ({ id, title, description, isFav }) => {
  const dispatch = useStore(false).at(1);

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', id);
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
