import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../atoms/button/button";
import {
  fetchProducts,
  productDelete
} from "../../../redux/reducers/products/productSlice";
import ProductItem from "../product-item/product-item";
import EditProduct from "../edit-product/edit-product";
import "./product-list.scss";

const ProductList = ({ toggleAddProd, toggleEditProd, editProduct }) => {
  const market = useSelector((state) => state.products);
  const [currentProduct, setCurrProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [fetchProducts]);

  const handleDelete = (id) => {
    dispatch(productDelete(id));
    console.log(id)
    
  };

  const handleEdit = (prod) => {
    setCurrProduct(prod);
  };

  const handleBuy = (prod) => {
    setCurrProduct(prod);
  };

  return (
    <div className="rzv-product-list">
      <div className="rzv-product-list__header">
        <div className="rzv-product-list__price">
    
            <div className="rzv-product-list__price-wr">
              <span className="rzv-product-list__price--integer">
                {!market.tot ? 0 : market.tot} $
              </span>
            </div>
   
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
              del={() => {
                handleDelete(prod._id);
              }}
              editProduct={() => {
                handleEdit(prod);
              }}
              buyProduct={() => {
                handleBuy(prod);
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
