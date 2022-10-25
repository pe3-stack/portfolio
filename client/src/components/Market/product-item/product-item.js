import React from "react";
import {
  toggleCompleteAsync,
  deleteProductAsync,
} from "../../../redux/reducers/products/productSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";
import "./product-item.scss";
import Checkmark from "../../../atoms/checkmark/checkmark";

const ProductItem = ({ product, toggleEdit, editProduct }) => {
  const dispatch = useDispatch();

  const formatDate = (date) => {
    const d = date.toLocaleString("en-GB");
    const y = d.substring(0, 10);
    let h = d.substring(12, 17);
    return `${y} at ${h}`;
  };

  const handleEditClick = () => {
    editProduct();
    toggleEdit();
  };

  const handleCheckClick = () => {
    dispatch(
      toggleCompleteAsync({
        _id: product._id,
        completed: product.completed,
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteProductAsync({ _id: product._id }));
  };

  return (
    <div className="rzv-product-item" onClick={handleEditClick}>
      <div className="rzv-product-item__wr">
        <div className="rzv-date">
          <div className="rzv-product-item__date">
            {product.modified === product.inserted ? "Created" : "Modified"} on:{" "}
            <span>
              {product.modified === product.inserted
                ? formatDate(new Date(product.inserted))
                : formatDate(new Date(product.modified))}
            </span>
          </div>
        </div>

        <div className="rzv-product-item__content-wr">
          <div className="rzv-product-item__content" onClick={handleCheckClick}>
            <div>
              {product.completed ? <Checkmark isActive={true} /> : null}

              <div className="rzv-product-item__price">
                {product.price ? (
                    <div className="rzv-product-item__price-wr">
                        {product.price}
                    </div>
                  ) : null}
              </div>
            
            </div>

            <div className="rzv-product-item__name">{product.name}</div>
          </div>

          <div className="rzv-product-item__buttons">
         
            <button
              className="rzv-product-item--button-delete"
              onClick={handleDeleteClick}
            >
              <span>Delete: </span>
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
