import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

import {
<<<<<<< HEAD
  addProductAsync,
=======
  fetchProducts,
  productAdd,
>>>>>>> parent of b4dc514 (massiv update after products release)
} from "../../../redux/reducers/products/productSlice";

import "./add-product.scss";

const ProductAdd = ({ toggleAddProd }) => {
  const nameRef = React.useRef();
  const integerRef = React.useRef();
  const centsRef = React.useRef();
  // const user_status = useSelector((state) => state.user);
  const dispatch = useDispatch();

<<<<<<< HEAD
  const [product, setProduct] = useState({ name: "", price: 0, completed: false });
=======

  const [product, setProduct] = useState({ name: "", price: {
    integer: 0,
    cents: 0
  } });
>>>>>>> parent of b4dc514 (massiv update after products release)

  useEffect(() => {});

  const handleChange = (evt) => {
    setProduct({
      name: nameRef.current.value,
<<<<<<< HEAD
      price: priceRef.current.value,
      completed: false
=======
      price: {
        integer: integerRef.current.value,
        cents: centsRef.current.value
      },
>>>>>>> parent of b4dc514 (massiv update after products release)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    dispatch(addProductAsync(product));
=======
    dispatch(productAdd(product));
    dispatch(fetchProducts());
>>>>>>> parent of b4dc514 (massiv update after products release)
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
          ref={integerRef}
          change={handleChange}
          val={product.price.integer}
          label="Integer"
          type="number"
        />
        <Input
          ref={centsRef}
          change={handleChange}
          val={product.price.cents}
          label="Cents"
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
