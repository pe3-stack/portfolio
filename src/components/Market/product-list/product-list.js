import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../atoms/button/button";
import {
  getProductsAsync
} from "../../../redux/reducers/products/productSlice";

import ProductItem from "../product-item/product-item";
import EditProduct from "../edit-product/edit-product";
import "./product-list.scss";

const ProductList = ({ toggleAddProd, toggleEditProd, editProduct }) => {
  const products = useSelector((state) => state.products);

  const [currentProduct, setCurrProduct] = useState({});
  const [completed, setIsCompleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  const handleEdit = (prod) => {
    setCurrProduct(prod);
  };

  
  return (
    <div className="rzv-product-list">
      <div className="rzv-product-list__header">
        <div className="rzv-product-list__price">
    
            <div className="rzv-product-list__price-wr">
              <span className="rzv-product-list__price--integer">
                {!products.tot ? 0 : products.tot} $
              </span>
            </div>
   
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
        <EditProduct toggleEditProd={toggleEditProd} product={currentProduct} />
      ) : null}
    </div>
  );
};

export default ProductList;
