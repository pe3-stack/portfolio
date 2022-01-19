import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
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

export const addProductAsync = createAsyncThunk(
  "products/addProductAsync",
  async (payload) => {
    return axios
      .post(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/add`, {
        name: payload.name,
        price: payload.price,
        completed: payload.completed
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (payload) => {
    return axios
      .delete(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/delete/${payload._id}`, {
        _id: payload._id
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const editProductAsync = createAsyncThunk(
  "products/editProductAsync",
  async ({ _id, completed, name, price }) => {
    return axios
      .put(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/edit/${_id}`, {
        _id: _id,
        completed: completed,
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

export const toggleCompleteAsync = createAsyncThunk(
  "products/toggleCompleteAsync",
  async (playload) => {
    return axios
      .put(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/edit/${playload._id}`, {
        completed: !playload.completed
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
  reducers: {
    getProducts: (state, {payload}) => {
      state.products=payload;
    },
    addProduct: (state, { payload }) => {
      const newProd = {
        name: payload.name,
        price: payload.price,
        completed: false 
      }

      state.products.push(newProd);
    },
    editProduct: (state, { payload }) => {
      const index = state.products.findIndex(product => product._id === payload._id);  
      state.products[index] = {
        ...state.products[index],
        ...payload,
      };
    },
    completeProduct: (state, { payload }) => {
      const index = state.products.findIndex(product => product._id === payload._id);
      state[index].completed = payload.completed;
    },
    deleteProduct: (state, {payload}) => {
      state.products = state.products.filter(product => product._id !== payload._id);
    }
  },
  extraReducers: {
    [getProductsAsync.pending]: (state, { payload }) => {
      state.loading='loading';
      state.products=[];
    },
    [getProductsAsync.fulfilled]: (state, { payload }) => {
      state.loading='loaded';
      state.products=payload;
    },
    [addProductAsync.pending]: (state, { payload }) => {
      state.loading='loading';
    },
    [addProductAsync.fulfilled]: (state, { payload }) => {
      state.loading='loaded';
      state.products.push(payload);
    },
    [toggleCompleteAsync.fulfilled]: (state, { payload }) => {
      state.loading='loaded';
      const index = state.products.findIndex((product) => product._id === payload._id)
      state.products[index].completed = payload.completed;
    },
    [deleteProductAsync.fulfilled]: (state, { payload }) => {
      state.loading='loaded';
      state.products = state.products.filter((product) => product._id !== payload._id);
    },
    [editProductAsync.fulfilled]: (state, { payload }) => {
      state.loading='loaded';
      const index = state.products.findIndex(product => product._id === payload._id);  
      state.products[index] = {
        ...state.products[index],
        ...payload,
      };
    }

    
  },
});

export default productSlice.reducer;
