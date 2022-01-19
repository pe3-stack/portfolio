import React, { useState } from "react";

import { useDispatch } from "react-redux";

import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

import {
  getProductsAsync,
  editProductAsync,
} from "../../../redux/reducers/products/productSlice";

import "./edit-product.scss";
import { prettyDOM } from "@testing-library/react";

const EditProduct = ({ toggleEditProd, product }) => {
  const nameRef = React.useRef();
  const priceRef = React.useRef();

  const [newProdName, setNewProdName] = useState(nameRef);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const dispatch = useDispatch();

  const [prod, setProd] = useState({
    _id: product._id,
    isBuy: product.isBuy,
    name: product.name,
    price: product.price,
  });

  const handleChange = (e) => {
    setNewProdName(e.target.value);

    console.log(product.name)
    console.log(e.target.value)

    if(product.name != e.target.value) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true)
    }
    
    setProd({
      _id: product._id,
      name: nameRef.current.value,
      isBuy: product.isBuy,
      price: priceRef.current.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProductAsync(prod));
    
  };

  return (
    <div className="rzv-product-edit">
      <form className="rzv-product-edit-form" id="productEdit">
        <Input
          ref={nameRef}
          label="name"
          type="text"
          val={prod.name}
          change={handleChange}
        />
        <div className="rzv-product-add-price">
          <Input
            ref={priceRef}
            change={handleChange}
            val={prod.price}
            label="Price"
            type="number"
          />
        
        </div>
        <div className="rzv-product-edit__cta">
          <Button
            color="dark"
            type="submit"
            value="Submit"
            form="productEdit"
            click={handleSubmit}
            disabled={newProdName && !btnDisabled ? false : true}
          >
            {newProdName ? 'Save' : 'Edit'}
          </Button>
          <a href="#" onClick={toggleEditProd}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
