import React, {useState} from "react";

import { useDispatch } from "react-redux";

import Button from "../../../atoms/button/button";
import Input from "../../input-text/input-text";

<<<<<<< HEAD
<<<<<<< HEAD
import {
  getProductsAsync,
  editProductAsync,
} from "../../../redux/reducers/products/productSlice";
=======
import { fetchProducts, productEdit } from "../../../redux/reducers/products/productSlice";
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
import { fetchProducts, productEdit } from "../../../redux/reducers/products/productSlice";
>>>>>>> parent of b4dc514 (massiv update after products release)

import "./edit-product.scss";
import { prettyDOM } from "@testing-library/react";

const EditProduct = ({ toggleEditProd, product }) => {
  const nameRef = React.useRef();
<<<<<<< HEAD

  const [newProdName, setNewProdName] = useState(nameRef);
  const [btnDisabled, setBtnDisabled] = useState(true);
=======
>>>>>>> parent of b4dc514 (massiv update after products release)

  const dispatch = useDispatch();

  const [prod, setProd] = useState({
    _id: product._id,
    name: product.name,
  });

  const handleChange = (e) => {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
      setProd({
        _id: product._id,
        name: e.target.value,
      });
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    dispatch(editProductAsync(prod));
    
=======
    dispatch(productEdit(prod));
    dispatch(fetchProducts());
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
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
<<<<<<< HEAD
<<<<<<< HEAD
            disabled={newProdName && !btnDisabled ? false : true}
          >
            {newProdName ? 'Save' : 'Edit'}
          </Button>
          <a href="#" onClick={toggleEditProd}>
=======
          >Edit</Button>
          <a
          href="#"
            onClick={toggleEditProd}
          >
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
          >Edit</Button>
          <a
          href="#"
            onClick={toggleEditProd}
          >
>>>>>>> parent of b4dc514 (massiv update after products release)
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
