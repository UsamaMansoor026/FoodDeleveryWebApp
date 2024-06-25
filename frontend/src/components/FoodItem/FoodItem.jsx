import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ key, item }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div key={key} className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={item.image} alt="" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{item.description}</p>
        <p className="food-item-price">${item.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
