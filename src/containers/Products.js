import ProductItem from '../components/Products/ProductItem';

import { useStore } from '../hooks/store';
import './Products.css';

const Products = () => {
  const state = useStore().at(0);

  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
