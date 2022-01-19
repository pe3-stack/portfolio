import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

import {
  addProductAsync,
} from "../../../redux/reducers/products/productSlice";

import "./add-product.scss";

const ProductAdd = ({ toggleAddProd }) => {
  const nameRef = React.useRef();
  const priceRef = React.useRef();
  // const user_status = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({ name: "", price: 0, completed: false });

  useEffect(() => {});

  const handleChange = (evt) => {
    setProduct({
      name: nameRef.current.value,
      price: priceRef.current.value,
      completed: false
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductAsync(product));
  };


  return (
    <div className="rzv-product-add">
      <form
        className="rzv-product-add-form"
        id="addProduct"
        onSubmit={handleSubmit}
      >
        <Input
          ref={nameRef}
          change={handleChange}
          val={product.name}
          label="Name"
          type="text"
        />

        <div className="rzv-product-add-price">
        <Input
          ref={priceRef}
          change={handleChange}
          val={product.price}
          label="Price"
          type="number"
        />
        </div>
        <div className="rzv-product-add__cta">
          <Button
            color="dark"
            type="submit"
            value="Submit"
            form="addProduct"
            submitForm={handleSubmit}
          >
            Add
          </Button>
          <a href="#" onClick={toggleAddProd}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
