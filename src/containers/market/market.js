import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

  const switchAuth = () => {
    setIsRegistered(!isRegistered);
  };

  useEffect(() => {}, []);

  const toggleAddProduct = ((e) => {
    setAddProduct(!addProduct);
  });
  return (
    <div className="rzv-market">
      <div className="rzv-market__wr">
        {user.isAuth || localStorage.getItem('token') ? <ProductList isClicked={toggleAddProduct}/> : ""}
        {addProduct ? <AddProduct toggle={toggleAddProduct}/> : null}
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
