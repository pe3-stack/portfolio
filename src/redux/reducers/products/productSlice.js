import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return axios
      .get(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const productAdd = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    return axios
      .post(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/add`, {
        isBuy: false,
        name: product.name,
        price: product.price
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const productDelete = createAsyncThunk(
  "products/deleteProduct",
  async (_id) => {
    return axios
      .delete(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/delete/${_id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const productEdit = createAsyncThunk(
  "products/editProduct",
  async ({ _id, isBuy, name, price }) => {
    return axios
      .put(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/edit/${_id}`, {
        _id: _id,
        isBuy: isBuy,
        name: name,
        price: price,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const productBuy = createAsyncThunk(
  "products/buyProduct",
  async ({ _id, isBuy}) => {
    return axios
      .put(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/edit/${_id}`, {
        _id: _id,
        isBuy: !isBuy
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    tot: 0,
    error: "",
    loading: "",
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      let priceArr = [];
      payload.forEach(p => {
        priceArr.push(p.price);
      })
      state.tot = priceArr.reduce((a, b) => a + b, 0);
      state.products = [...payload];
      state.loading = "loaded";
    },
    [productAdd.fulfilled]: (state, { payload }) => {
      const currState = current(state);

      state = [
        ...state.products,
        state.products.push(payload),
        state.tot = currState.tot + payload.price
      ]
      state.loading = "loaded";      
    },
    [productDelete.fulfilled]: (state, { payload }) => {
     
      const currState = current(state);

      state.products = state.products.filter( (prod) => prod._id !== payload._id)
      state.tot = currState.tot - payload.price;

      state.loading = "loaded";
    },
    [productEdit.fulfilled]: (state, { payload }) => {
      const index = state.products.findIndex(product => product._id === payload._id);
      state.products[index] = {
        ...state.products[index],
        ...payload,
      };

      state.loading = "loaded";

    },
    [productBuy.fulfilled]: (state, { payload }) => {
      const index = state.products.findIndex(product => product._id === payload._id);
      state.products[index] = {
        ...state.products[index],
        ...payload,
      };
      state.loading = "loaded";
    }
  },
});

export default productSlice.reducer;
