<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import {  toggleCompleteAsync, deleteProductAsync } from "../../../redux/reducers/products/productSlice";
import { useDispatch } from "react-redux";
=======
import React, {useEffect, useState} from "react";

import {Link} from 'react-router-dom'
>>>>>>> parent of b4dc514 (massiv update after products release)
import Button from '../../../atoms/button/button'
import "./product-item.scss";

<<<<<<< HEAD
const ProductItem = ({ product, del, toggleEdit, editProduct }) => {
  const dispatch = useDispatch();
=======
const ProductItem = ({ product, click, toggleEdit,  editProduct }) => {
  const [styleRoundPrice, setStyleRoundPrice] = useState('');
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
import React, {useEffect, useState} from "react";

import {Link} from 'react-router-dom'
import Button from '../../../atoms/button/button'
import "./product-item.scss";

const ProductItem = ({ product, click, toggleEdit,  editProduct }) => {
  const [styleRoundPrice, setStyleRoundPrice] = useState('');
>>>>>>> parent of b4dc514 (massiv update after products release)

  const handleClick = () => {
    editProduct();
    toggleEdit();
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const handleCheckClick = () => {
    dispatch(toggleCompleteAsync({
      _id: product._id,
      completed: product.completed
    }));
  }
  const handleDeleteClick = () => {
    dispatch(deleteProductAsync( {_id: product._id} ));
  }
  
  
=======
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
  useEffect(() => {
    let price = product.price;

    if(product.price) {
      setStyleRoundPrice('rzv-product-item__price--rounded');
    }
    
  }, [setStyleRoundPrice])

<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
  return (
    <div className="rzv-product-item">
        <div className="rzv-product-item__wr">

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="rzv-product-item__content" onClick={handleCheckClick}>
            <div className={`rzv-product-item__price rzv-product-item__price--rounded rzv-product-item__price--rounded-color-${product.completed ? 'buy' : 'normal'}`} >
              {product.price ?  <div className="rzv-product-item__price-wr"><span className="rzv-product-item__price">{product.price}</span></div> : null}
=======
          <div className="rzv-product-item__content">
            <div className={`rzv-product-item__price ${styleRoundPrice}`} >
              {product.price ?  <div className="rzv-product-item__price-wr"><span className="rzv-product-item__price--integer">{product.price.integer}</span><span className="rzv-product-item__price--cents">,{product.price.cents}</span></div> : null}
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
          <div className="rzv-product-item__content">
            <div className={`rzv-product-item__price ${styleRoundPrice}`} >
              {product.price ?  <div className="rzv-product-item__price-wr"><span className="rzv-product-item__price--integer">{product.price.integer}</span><span className="rzv-product-item__price--cents">,{product.price.cents}</span></div> : null}
>>>>>>> parent of b4dc514 (massiv update after products release)
            </div>
            <div className="rzv-product-item__name">{product.name}</div>
          </div>

         

          <div className="rzv-product-item__buttons">
            <Button color="dark" click={handleClick}>
              Edit
            </Button>
<<<<<<< HEAD
<<<<<<< HEAD
            <div >
            <Button color="red" click={handleDeleteClick}>
              <FontAwesomeIcon icon={faTimes} size="1x"/>
=======
            <Button color="red" click={click}>
              Delete
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
            <Button color="red" click={click}>
              Delete
>>>>>>> parent of b4dc514 (massiv update after products release)
            </Button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductItem;
