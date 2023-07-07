import "./ProductCard.scss";
import Card from "../../assets/icons/Vector.png";
import StarRating from "./StarRating/StarRating";

const ProductCard = ({
  data: { name, price, rating, salePercentage, isOnSale, Images },
}) => {
  return (
    <>
      <>
        <div className="card">
          <div className="card-img-top">
            {isOnSale && <div className="sale-bar">{salePercentage}%</div>}
            <img className="imgs" src={Card} />
            <div className="img-bar">
              <img className="img-card" src={Images[0]} alt="Card image cap" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <div className="rating-star">
              <StarRating rating={rating} />({rating + " " + "Stars"})
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductCard;
