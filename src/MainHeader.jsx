import logo from "./assets/Logo.svg";
import favoriteIcon from "./assets/Favorites.svg";
import cartIcon from "./assets/Cart.svg";
import userIcon from "./assets/User.svg";
import searchIcon from "./assets/Search.svg";
import "./index.css";

export default function MainHeader() {
  return (
    <header className="container-fluid py-4  border-bottom border-2 ">
      <div className="container d-flex justify-content-between align-items-center px-5 ">
        <img src={logo} alt="logo" className="logo" />

        <div className="search-box position-relative w-25">
          <input
            type="text"
            placeholder="Search"
            className="form-control px-5 py-3 bg-body-tertiary"
          />
          <img
            src={searchIcon}
            alt="searchIcon"
            className="position-absolute searchIcon"
          />
        </div>

        <ul className="nav d-flex gap-5">
          <li>
            <a
              className="text-decoration-none text-dark fw-medium fs-5"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-secondary fw-medium fs-5"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-secondary fw-medium fs-5"
              href="#"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-secondary fw-medium fs-5"
              href="#"
            >
              Blog
            </a>
          </li>
        </ul>

        <ul className="actions d-flex gap-5 list-unstyled m-0 ">
          <li>
            <img src={favoriteIcon} alt="" />
          </li>
          <li>
            <img src={cartIcon} alt="" />
          </li>
          <li>
            <img src={userIcon} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}
