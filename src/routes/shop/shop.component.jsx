import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../compponents/product-card/product-card.component";
import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
