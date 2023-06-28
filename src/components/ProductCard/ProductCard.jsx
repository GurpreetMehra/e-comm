import "./ProductCard.scss";
import Card from "../../assets/icons/Vector.png";

const ProductCard = ({ title, link, img, text, star }) => {
  return (
    <>
      <>
        <div className="card">
          <div className="card-img-top">
            <div className="sale-bar">-40%</div>
            <img className="imgs" src={Card} />
            <div className="img-bar">
              <img className="img-card" src={img} alt="Card image cap" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <div>{star}</div>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductCard;
