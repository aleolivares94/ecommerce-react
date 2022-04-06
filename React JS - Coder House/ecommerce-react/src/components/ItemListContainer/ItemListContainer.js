import { useEffect, useState } from "react";
import { getProducts } from "../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setproduct] = useState([]);

  useEffect(() => {
    getProducts()
      .then((prods) => {
        setproduct(prods);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
