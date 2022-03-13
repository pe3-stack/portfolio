import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/* product controllers */
import EditProduct from "../../components/Market/edit-product/edit-product";
import AddProduct from "../../components/Market/add-product/add-product";
/* authentication */
import Modal from "../../components/modal/modal";
import SignIn from "../../components/Authentication/SignIn/sign-in";
import SignUp from "../../components/Authentication/SignUp/sign-up";

import ProductList from "../../components/Market/product-list/product-list";

import "./market.scss";

const Market = () => {
  const user = useSelector((state) => state.user);
  const [addProduct, setAddProduct] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  
  const theme = useSelector((state) => state.theme);

  const [ style, setStyle ] = useState(theme.style);

  const switchAuth = () => {
    setIsRegistered(!isRegistered);
  };

  useEffect(() => { setStyle(theme.style) }, []);

  const toggleEditProduct = () => {
    setEditProduct(!editProduct);
  };

  const toggleAddProduct = ((e) => {
    setAddProduct(!addProduct);
  });
  
  return (
    <div className="rzv-market">
      <div className="rzv-market__wr">
        {user.isAuth || localStorage.getItem('token') ? 
        <ProductList style={theme.style} toggleAddProd={toggleAddProduct} toggleEditProd={toggleEditProduct} editProduct={editProduct}/> : ""}

        {addProduct ? <AddProduct toggleAddProd={toggleAddProduct}/> : null}
      </div>
      <Modal status={user.isAuth || localStorage.getItem('token')}>
        {!isRegistered ? (
          <SignIn click={switchAuth} />
        ) : (
          <SignUp click={switchAuth} />
        )}
      </Modal>
    </div>
  );
};

export default Market;
