import React, {useEffect, useState} from "react";

import {Link} from 'react-router-dom'
import Button from '../../../atoms/button/button'
import "./product-item.scss";

const ProductItem = ({ product, click, toggleEdit,  editProduct }) => {
  const [styleRoundPrice, setStyleRoundPrice] = useState('');

  const handleClick = () => {
    editProduct();
    toggleEdit();
  }

  useEffect(() => {
    let price = product.price;

    if(product.price) {
      setStyleRoundPrice('rzv-product-item__price--rounded');
    }
    
  }, [setStyleRoundPrice])

  return (
    <div className="rzv-product-item">
        <div className="rzv-product-item__wr">

          <div className="rzv-product-item__content">
            <div className={`rzv-product-item__price ${styleRoundPrice}`} >
              {product.price ?  <div className="rzv-product-item__price-wr"><span className="rzv-product-item__price--integer">{product.price.integer}</span><span className="rzv-product-item__price--cents">,{product.price.cents}</span></div> : null}
            </div>
            <div className="rzv-product-item__name">{product.name}</div>
          </div>

         

          <div className="rzv-product-item__buttons">
            <Button color="dark" click={handleClick}>
              Edit
            </Button>
            <Button color="red" click={click}>
              Delete
            </Button>
          </div>
        </div>
    </div>
  );
};

export default ProductItem;
