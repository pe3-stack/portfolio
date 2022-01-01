import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (product) => {
    return axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
          return response.data;
      })
      .catch((err) => {
        throw err;
      })
  }
);


export const productAdd = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    return axios
      .post(
        "http://localhost:8080/api/products/add",
        {
          name: product.name
        }
      )
      .then((response) => {
          return response.data;
      })
      .catch((err) => {
        throw err;
      })
  }
);

export const productDelete = createAsyncThunk(
  "products/deleteProduct",
  async (_id) => {
    return axios
      .delete(
        `http://localhost:8080/api/products/delete/${_id}`
      )
      .then((response) => {
          return response.data;
      })
      .catch((err) => {
        throw err;
      })
  }
);



export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: '',
    loading: ''
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products = [];
      state.loading = "loading";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = "loaded";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error;
    },
    [productAdd.pending]: (state) => {
      state.products = [];
      state.loading = "loading";
    },
    [productAdd.fulfilled]: (state, { payload }) => {
      state.products = state.products.concat(payload);
      state.loading = "loaded";
    },
    [productAdd.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error;
    },
    [productDelete.pending]: (state) => {
      state.products = [];
      state.loading = "loading";
    },
    [productDelete.fulfilled]: (state, { payload }) => {
      state.products = state.products.filter(prod => payload._id !== prod._id);
      state.loading = "loaded";
    },
    [productDelete.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error;
    }
  }
});


export default productSlice.reducer;