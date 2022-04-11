import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <section>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <h3>{name}</h3>
      <Link to={`/detail/${id}`}>Ver detalle</Link>
    </section>
  );
};

export default Item;
