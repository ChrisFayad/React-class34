import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <div>
      <nav className="Nav">
        <h1>{title}</h1>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
