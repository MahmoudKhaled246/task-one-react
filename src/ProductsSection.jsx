import androidImage from "./assets/ProductsSectionImages/android.svg";
import iphoneImage from "./assets/ProductsSectionImages/Iphone 14 pro 1.svg";
import oppoImage from "./assets/ProductsSectionImages/oppo-f19.svg";

const ProductsSection = () => {
  return (
    <section className="container-fluid">
      <div className="container p-5 d-flex flex-column gap-5">
        <h3>Related Products</h3>
        <div className="row">
          <div className="col">
            <div className="card bg-body-tertiary px-3 border-0 py-4">
              <img src={oppoImage} className="card-img-top" alt="..." />
              <div className="card-body p-0 mt-3 d-flex flex-column gap-3">
                <h5 className="card-title fs-6">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </h5>
                <p className="card-text fs-6 fw-medium">$1437</p>
                <a href="#" className="btn bg-black text-white col-12 ">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-body-tertiary px-3 border-0 py-4">
              <img src={iphoneImage} className="card-img-top" alt="..." />
              <div className="card-body p-0 mt-3 d-flex flex-column gap-3">
                <h5 className="card-title fs-6">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </h5>
                <p className="card-text fs-6 fw-medium">$510</p>
                <a href="#" className="btn bg-black text-white col-12 ">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-body-tertiary px-3 border-0 py-4">
              <img src={androidImage} className="card-img-top" alt="..." />
              <div className="card-body p-0 mt-3 d-flex flex-column gap-3">
                <h5 className="card-title fs-6">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </h5>
                <p className="card-text fs-6 fw-medium">$550</p>
                <a href="#" className="btn bg-black text-white col-12 ">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-body-tertiary px-3 border-0 py-4">
              <img src={androidImage} className="card-img-top" alt="..." />
              <div className="card-body p-0 mt-3 d-flex flex-column gap-3">
                <h5 className="card-title fs-6">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </h5>
                <p className="card-text fs-6 fw-medium">$550</p>
                <a href="#" className="btn bg-black text-white col-12 ">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;
