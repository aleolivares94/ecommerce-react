import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log("Hice click en item");
  };

  return (
    <article className="CardItem" onClick={handleClick}>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <section>
        <picture>
          <img src={img} alt={name} />
        </picture>
        <h3>{name}</h3>
        <Link to={`/detail/${id}`}>Ver detalle</Link>
      </section>
    </article>
  );
};

export default Item;
