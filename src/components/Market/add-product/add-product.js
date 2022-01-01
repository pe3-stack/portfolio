import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

import { fetchProducts, productAdd } from "../../../redux/reducers/products/productSlice";

import "./add-product.scss";

const ProductAdd = ({ toggle }) => {
  const nameRef = React.useRef();
  // const user_status = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({ name: "" });

  useEffect(() => {});

  const handleChange = (evt) => {
    setProduct({
      name: nameRef.current.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProducts());
    dispatch(productAdd(product));
  };

  return (
    <div className="rzv-product-add">
      <form
        className="rzv-product-add-form"
        id="productAdd"
        onSubmit={handleSubmit}
      >
        <Input
          ref={nameRef}
          change={handleChange}
          val={product.name}
          label="name"
          type="text"
        />
        <div className="rzv-product-add__cta">
          <Button
            dark
            type="submit"
            value="Submit"
            form="productAdd"
            submitForm={handleSubmit}
          >Add</Button>
          <a
          href="#"
            onClick={toggle}
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
