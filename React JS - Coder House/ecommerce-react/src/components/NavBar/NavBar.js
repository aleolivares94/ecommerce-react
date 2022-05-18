import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../asyncmock";
import { firestoreDb } from "../../service/firebase";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });

    getDocs(
      query(collection(firestoreDb, "categories"), orderBy("order", "asc"))
    ).then((response) => {
      const categories = response.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setCategories(categories);
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container fluid ms-auto">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/category/${cat.id}`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
            >
              {cat.description}
            </NavLink>
          ))}
          <Link to="/">
            <img src="./logoecommerce.svg" width="90" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
