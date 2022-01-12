import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../atoms/button/button";
import {
  fetchProducts,
  productDelete,
} from "../../../redux/reducers/products/productSlice";
import ProductItem from "../product-item/product-item";
import EditProduct from "../edit-product/edit-product";
import "./product-list.scss";

const ProductList = ({ toggleAddProd, toggleEditProd, editProduct }) => {
  const market = useSelector((state) => state.products);
  const [currProduct, setCurrProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(market);
  }, [fetchProducts]);

  const handleDelete = (id) => {
    dispatch(fetchProducts());
    dispatch(productDelete(id));
  };

  const handleEdit = (prod) => {
    setCurrProduct(prod);
  };

  return (
    <div className="rzv-product-list">
      <div className="rzv-product-list__header">
        <div className="rzv-product-item__price">
          {market.tot ? (
            <div className="rzv-product-item__price-wr">
              <span className="rzv-product-item__price--integer">
                {market.tot.integer}
              </span>
              <span className="rzv-product-item__price--cents">
                ,{(Math.round(market.tot.cents * 10) / 100).toFixed(0)} $
              </span>
            </div>
          ) : null}
        </div>
        <a href="#" onClick={toggleAddProd}>
          <Button isDark>Add Product</Button>
        </a>
      </div>

      <ul className="rzv-product-list__wr">
        {market.products.map((prod, idx) => {
          return (
            <ProductItem
              key={idx}
              product={prod}
              click={() => {
                handleDelete(prod._id);
              }}
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
