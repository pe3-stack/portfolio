import React, {useState, useEffect} from "react";
import {  toggleCompleteAsync, deleteProductAsync } from "../../../redux/reducers/products/productSlice";
import { useDispatch } from "react-redux";
import Button from '../../../atoms/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./product-item.scss";

const ProductItem = ({ product, toggleEdit, editProduct }) => {

  const dispatch = useDispatch();


  const formatDate = (date) => {
    const d = date.toLocaleString('en-GB');
    const y = d.substring(0, 10);
    let h = d.substring(12, 17);
    return `${y} at ${h}`;
  }

  const handleEditClick = () => {
    editProduct();
    toggleEdit();
    
  }

  const handleCheckClick = () => {
    dispatch(toggleCompleteAsync({
      _id: product._id,
      completed: product.completed
    }));
  }

  const handleDeleteClick = () => {
    dispatch(deleteProductAsync( {_id: product._id} ));
  }
  
  
  return (
    <div className="rzv-product-item" >
        <div className="rzv-product-item__wr">
          <div className="rzv-date">
            <div className="rzv-product-item__date">
              { product.modified === product.inserted ? 'Created' : 'Modified'} on: <span>{product.modified === product.inserted ? formatDate(new Date(product.inserted)) : formatDate(new Date(product.modified))}</span>
            </div>
          </div>

          <div className="rzv-product-item__content-wr" >
            <div className="rzv-product-item__content" onClick={handleCheckClick}>
              
              <div className={`rzv-product-item__price rzv-product-item__price--rounded rzv-product-item__price--rounded-color-${product.completed ? 'buy' : 'normal'}`} >
                {product.price ?  <div className="rzv-product-item__price-wr"><span className="rzv-product-item__price">{product.price}</span></div> : null}
              </div>
              <div className="rzv-product-item__name">{product.name}</div>

            </div>       

            <div className="rzv-product-item__buttons">
              <a className='rzv-product-item--button-edit' onClick={handleEditClick}>
                <span>Edit: </span>
                <FontAwesomeIcon icon={faPen} size="1x"/>
              </a>
     
              <a className='rzv-product-item--button-delete' onClick={handleDeleteClick}>
                <span>Delete: </span>
                <FontAwesomeIcon icon={faTimes} size="1x"/>
              </a>
              
            </div>
          </div>
          
        </div>
    </div>
  );
};

export default ProductItem;
