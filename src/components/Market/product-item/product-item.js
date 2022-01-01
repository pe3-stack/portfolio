import React from "react";

import {Link} from 'react-router-dom'
import Button from '../../../atoms/button/button'
import "./product-item.scss";

const ProductItem = ({ text, id, click }) => {

  return (
    <div className="rzv-product-item">
        <div className="rzv-product-item__wr">
          <div className="rzv-product-item__name">{text}</div>
          <div className="rzv-product-item__buttons">
            <Button dark>
              <Link to="/edit/1">Edit</Link>
            </Button>
            <Button dark>
              <a href="#" onClick={click}>Delete</a>
            </Button>
          </div>
        </div>
    </div>
  );
};

export default ProductItem;
