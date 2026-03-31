import "./index.css";
import phoneImage from "./assets/FirstSectionImages/Images.svg";
import truckIcon from "./assets/FirstSectionImages/delivery-truck-svgrepo-com (1) 1.svg";
import shopIcon from "./assets/FirstSectionImages/shop-2-svgrepo-com 2.svg";
import verifyIcon from "./assets/FirstSectionImages/verify.svg";

export default function FirstSection() {
  return (
    <section className="container-fluid  ">
      <div className="container d-flex justify-content-center p-5 ">
        <div className="row w-100 gx-5  ">
          <div className="col-6 ps-0">
            <img src={phoneImage} alt="phoneImage" className="w-100" />
          </div>
          <div className="col-6 pe-0 d-flex flex-column gap-4  text-black">
            <h1>Apple iPhone 14 Pro Max</h1>
            <p className="d-flex fs-3 gap-4  fw-medium align-items-center ">
              $1399{" "}
              <span className="fs-4 text-body-tertiary text-decoration-line-through">
                $1499
              </span>
            </p>
            <p className="phone-description">
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras
            </p>
            <div className="button-group col-12 justify-content-between d-flex">
              <button className="btn btn-white border-black border-1 p-3  fs-5 fw-medium">
                Add To Wishlist
              </button>
              <button className="btn bg-black text-white p-3  fs-5 fw-medium">
                Add To Cart
              </button>
            </div>
            <div className="row mt-2 g-4 features">
              <div className="col d-flex gap-2 ">
                <div className="col-4 rounded-4 bg-body-secondary h-100 d-flex justify-content-center text-center align-items-center">
                  <img src={truckIcon} alt="truckIcon" />
                </div>
                <div className="col-8">
                  <p className="text-secondary">Free Delivery</p>
                  <p>1-2 day </p>
                </div>
              </div>
              <div className="col d-flex gap-2">
                <div className="col-4 rounded-4 bg-body-secondary h-100 d-flex justify-content-center text-center align-items-center">
                  <img src={shopIcon} alt="shopIcon" />
                </div>
                <div className="col-8">
                  <p className="text-secondary">In Stock</p>
                  <p>Today</p>
                </div>
              </div>
              <div className="col d-flex gap-2">
                <div className="col-4 rounded-4 bg-body-secondary h-100 d-flex justify-content-center text-center align-items-center">
                  <img src={verifyIcon} alt="verifyIcon" />
                </div>
                <div className="col-8">
                  <p className="text-secondary">Guaranteed</p>
                  <p>1 year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
