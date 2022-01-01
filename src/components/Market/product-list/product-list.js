import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '../../../atoms/button/button'
import { fetchProducts, productDelete } from "../../../redux/reducers/products/productSlice";
import ProductItem from "../product-item/product-item"
import "./product-list.scss";

const ProductList = ({ isClicked }) => {

  const market = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [fetchProducts]);

  const handleDelete = (id) => {
    dispatch(fetchProducts());
    dispatch(productDelete(id));
    console.log(market)
  }

  return (
    <div className="rzv-product-list">
        <div className="rzv-product-list__header"> 
            <a href="#" onClick={isClicked}>
              <Button isDark>Add Product</Button>
            </a>
        </div>

        <ul className="rzv-product-list__wr">
         {market.products.map((prod, idx) => {
           return (
             <ProductItem key={idx} text={prod.name} click={(() => { handleDelete(prod._id) })}/>
           )
         })}
        </ul>
    </div>
  );
};

export default ProductList;
