import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../atoms/button/button";
import {
<<<<<<< HEAD
  getProductsAsync
=======
  fetchProducts,
  productDelete,
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
} from "../../../redux/reducers/products/productSlice";

import ProductItem from "../product-item/product-item";
import EditProduct from "../edit-product/edit-product";
import "./product-list.scss";

const ProductList = ({ toggleAddProd, toggleEditProd, editProduct }) => {
<<<<<<< HEAD
  const products = useSelector((state) => state.products);
=======
  const market = useSelector((state) => state.products);
  const [currProduct, setCurrProduct] = useState({});
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)

  const [currentProduct, setCurrProduct] = useState({});
  const [completed, setIsCompleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    dispatch(getProductsAsync());
  }, [dispatch]);
=======
    dispatch(fetchProducts());
    console.log(market);
  }, [fetchProducts]);

  const handleDelete = (id) => {
    dispatch(fetchProducts());
    dispatch(productDelete(id));
  };
>>>>>>> parent of b4dc514 (massiv update after products release)

  const handleEdit = (prod) => {
    setCurrProduct(prod);
  };

<<<<<<< HEAD
<<<<<<< HEAD
  
  return (
    <div className="rzv-product-list">
      <div className="rzv-product-list__header">
        <div className="rzv-product-list__price">
    
            <div className="rzv-product-list__price-wr">
              <span className="rzv-product-list__price--integer">
                {!products.tot ? 0 : products.tot} $
=======
  return (
    <div className="rzv-product-list">
      <div className="rzv-product-list__header">
=======
  return (
    <div className="rzv-product-list">
      <div className="rzv-product-list__header">
>>>>>>> parent of b4dc514 (massiv update after products release)
        <div className="rzv-product-item__price">
          {market.tot ? (
            <div className="rzv-product-item__price-wr">
              <span className="rzv-product-item__price--integer">
                {market.tot.integer}
              </span>
              <span className="rzv-product-item__price--cents">
                ,{(Math.round(market.tot.cents * 10) / 100).toFixed(0)} $
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
              </span>
            </div>
          ) : null}
        </div>
        <a href="#" onClick={toggleAddProd}>
          <Button isDark>Add Product</Button>
        </a>
      </div>

      <ul className="rzv-product-list__wr">
        {products.products.map((prod, idx) => {
          return (
            <ProductItem
              key={idx}
              completed={completed}
              product={prod}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
              click={() => {
                handleDelete(prod._id);
              }}
>>>>>>> parent of b4dc514 (massiv update after products release)
              editProduct={() => {
                handleEdit(prod);
              }}
              toggleEdit={toggleEditProd}
              idx={prod._id}
            />
          );
        })}
      </ul>
      {editProduct ? (
        <EditProduct toggleEditProd={toggleEditProd} product={currProduct} />
      ) : null}
    </div>
  );
};

export default ProductList;
