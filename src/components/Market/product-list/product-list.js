import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../atoms/button/button";
import { getProductsAsync } from "../../../redux/reducers/products/productSlice";

import ProductItem from "../product-item/product-item";
import EditProduct from "../edit-product/edit-product";
import "./product-list.scss";

const ProductList = ({ toggleAddProd, toggleEditProd, editProduct, style }) => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const [currentProduct, setCurrProduct] = useState({});
  const [completed, setIsCompleted] = useState(false);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  const handleEdit = (prod) => {
    setCurrProduct(prod);
  };

  return (
    <div className="rzv-product-list" style={{ background: style.background }}>
      <div className="rzv-product-list__header" style={{ color: style.color, background: style.color }}>
        <div className="rzv-product-list__price" style={{ color: style.background }}>
          <div className="rzv-product-list__price-wr">
            <span className="rzv-product-list__price--integer">
              {!products.tot ? 0 : products.tot} $
            </span>
          </div>
        </div>
        <a href="#" onClick={toggleAddProd}>
          <Button color="dark">Add Product</Button>
        </a>
      </div>

      <ul className="rzv-product-list__wr">
        {localStorage.getItem("token") ? products.products.map((prod, idx) => {
          return (
            <ProductItem
              key={idx}
              completed={completed}
              product={prod}
              editProduct={() => {
                handleEdit(prod);
              }}
              toggleEdit={toggleEditProd}
              idx={prod._id}
            />
          );
        }) : undefined }
        {}
      </ul>
      {editProduct ? (
        <EditProduct toggleEditProd={toggleEditProd} product={currentProduct} />
      ) : null}
    </div>
  );
};

export default ProductList;
