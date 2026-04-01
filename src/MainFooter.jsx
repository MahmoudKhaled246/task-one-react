import logoWhite from "./assets/Logo-white.svg";
import twitterLogo from "./assets/Twitter.svg";
import facebookLogo from "./assets/Facebook.svg";
import tiktokLogo from "./assets/Tiktok.svg";
import instagramLogo from "./assets/Instagram.svg";
import "./index.css";

const MainFooter = () => {
  return (
    <footer className="container-fluid">
      <div className="container px-5  ">
        <div className="row g-5">
          <div className="col-4">
            <img src={logoWhite} alt="logo" />
            <p className="mt-4">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className="col-4  d-flex justify-content-center">
            <ul className="list-unstyled m-0 d-flex flex-column gap-1">
              <li className="list-header">Services</li>
              <li>
                {" "}
                <a href="#">Bonus program</a>
              </li>
              <li>
                {" "}
                <a href="#">Gift cards</a>
              </li>
              <li>
                {" "}
                <a href="#">Credit and payment</a>
              </li>
              <li>
                {" "}
                <a href="#">Service contracts</a>
              </li>
              <li>
                {" "}
                <a href="#">Non-cash account</a>
              </li>
              <li>
                {" "}
                <a href="#">Payment</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="list-unstyled m-0 d-flex flex-column gap-1">
              <li className="list-header">Assistance to the buyer</li>
              <li>
                {" "}
                <a href="#">Find an order</a>
              </li>
              <li>
                {" "}
                <a href="#">Terms of delivery</a>
              </li>
              <li>
                {" "}
                <a href="#">Exchange and return of goods</a>
              </li>
              <li>
                {" "}
                <a href="#">Guarantee</a>
              </li>
              <li>
                {" "}
                <a href="#">Frequently asked questions</a>
              </li>
              <li>
                {" "}
                <a href="#">Terms of use of the site</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-media mt-2 d-flex gap-5">
          <img src={twitterLogo} alt="twitterLogo" />
          <img src={facebookLogo} alt="facebookLogo" />
          <img src={tiktokLogo} alt="tiktokLogo" />
          <img src={instagramLogo} alt="instagramLogo" />
        </div>
      </div>
    </footer>
  );
};
export default MainFooter;
