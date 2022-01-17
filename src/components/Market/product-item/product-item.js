import React, {useEffect, useState} from "react";
import { fetchProducts, productBuy } from "../../../redux/reducers/products/productSlice";
import { useDispatch } from "react-redux";
import Button from '../../../atoms/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'
import "./product-item.scss";

const ProductItem = ({ product, del, toggleEdit, editProduct }) => {
  const [isBuy, setIsBuy] = useState(product.isBuy);

  const dispatch = useDispatch();

  const handleEditClick = () => {
    editProduct();
    toggleEdit();
  }

  const handleBuyClick = () => {
    dispatch(productBuy(product));
    setIsBuy(!isBuy);
    console.log('clicked')
  }
  
  return (
    <div className="rzv-product-item">
        <div className="rzv-product-item__wr">

          <div className="rzv-product-item__content" onClick={handleBuyClick}>
            <div className={`rzv-product-item__price rzv-product-item__price--rounded rzv-product-item__price--rounded-color-${!isBuy ? 'normal' : 'buy'}`} >
              {product.price ?  <div className="rzv-product-item__price-wr"><span className="rzv-product-item__price">{product.price}</span></div> : null}
            </div>
            <div className="rzv-product-item__name">{product.name}</div>
          </div>       

          <div className="rzv-product-item__buttons">
            <Button color="dark" click={handleEditClick}>
            <FontAwesomeIcon icon={faPen} size="1x"/>
            </Button>
            
            <Button color="red" click={del}>
              <FontAwesomeIcon icon={faTimes} size="1x"/>
            </Button>
          </div>
        </div>
    </div>
  );
};

export default ProductItem;
