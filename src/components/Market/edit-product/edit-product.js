import React, {useState} from "react";

import { useDispatch } from "react-redux";

import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

import { fetchProducts, productEdit } from "../../../redux/reducers/products/productSlice";

import "./edit-product.scss";

const EditProduct = ({ toggleEditProd, product }) => {
  const nameRef = React.useRef();

  const dispatch = useDispatch();

  const [prod, setProd] = useState({
    _id: product._id,
    name: product.name,
  });

  const handleChange = (e) => {
      setProd({
        _id: product._id,
        name: e.target.value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productEdit(prod));
    dispatch(fetchProducts());
  };

  return (
    <div className="rzv-product-edit">
      <form
        className="rzv-product-edit-form"
        id="productEdit"
      >
        <Input
          ref={nameRef}
          label="name"
          type="text"
          val={prod.name}
          change={handleChange}
        />
        <div className="rzv-product-edit__cta">
          <Button
            color="dark"
            type="submit"
            value="Submit"
            form="productEdit"
            click={handleSubmit}
          >Edit</Button>
          <a
          href="#"
            onClick={toggleEditProd}
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
