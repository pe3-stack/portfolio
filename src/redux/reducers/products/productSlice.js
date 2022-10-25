import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

<<<<<<< HEAD
export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
=======
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (product) => {
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
    return axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        return response.data;
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
<<<<<<< HEAD
<<<<<<< HEAD
      .post(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/add`, {
        name: payload.name,
        price: payload.price,
        completed: payload.completed
=======
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
      .post("http://localhost:8080/api/products/add", {
        name: product.name,
        price: {
          integer: product.price.integer,
          cents: product.price.cents
        }
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
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
<<<<<<< HEAD
<<<<<<< HEAD
      .delete(`${process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : ''}/products/delete/${payload._id}`, {
        _id: payload._id
      })
      .then((res) => {
        return res.data;
=======
      .delete(`http://localhost:8080/api/products/delete/${_id}`)
      .then((response) => {
        return response.data;
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
      .delete(`http://localhost:8080/api/products/delete/${_id}`)
      .then((response) => {
        return response.data;
>>>>>>> parent of b4dc514 (massiv update after products release)
      })
      .catch((err) => {
        throw err;
      });
  }
);

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export const productEdit = createAsyncThunk(
  "products/editProduct",
  async ({ _id, name, price }) => {
    return axios
      .put(`http://localhost:8080/api/products/edit/${_id}`, {
        id: _id,
        name: name,
        price: price,
      })
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
export const productEdit = createAsyncThunk(
  "products/editProduct",
  async ({ _id, name, price }) => {
    return axios
      .put(`http://localhost:8080/api/products/edit/${_id}`, {
        id: _id,
        name: name,
        price: price,
      })
>>>>>>> parent of b4dc514 (massiv update after products release)
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
    tot: {
      integer: 0,
      cents: 0
    },
    error: "",
    loading: "",
  },
<<<<<<< HEAD
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

    
=======
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products = [];
      state.loading = "loading";
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      let priceArr = [];
      let integerArr = [];
      let centsArr = [];

      payload.forEach(p => {
        priceArr.push(p);
      })

     priceArr.forEach(x => {
       if(x.price) {
        integerArr.push(x.price.integer);
        centsArr.push(x.price.cents);
       }
     })
     
     state.tot = {
        integer: integerArr.reduce((a, b) => a + b, 0),
        cents: centsArr.reduce((a, b) => a + b, 0)  
      };

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

      let priceArr = [];
      let integerArr = [];
      let centsArr = [];

      state.products.forEach(p => {
        priceArr.push(p);
      })

     priceArr.forEach(x => {
       if(x.price) {
        integerArr.push(x.price.integer);
        centsArr.push(x.price.cents);
       }
     })
     
     state.tot = {
        integer: integerArr.reduce((a, b) => a + b, 0),
        cents: centsArr.reduce((a, b) => a + b, 0)  
      };
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
      state.products = state.products.filter(
        (prod) => payload._id !== prod._id
      );
      state.loading = "loaded";
    },
    [productDelete.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error;
    },
    [productEdit.pending]: (state) => {
      state.products = [];
      state.loading = "loading";
    },
    [productEdit.fulfilled]: (state, { payload }) => {
      const newProducts = state.products.filter(
        (prod) => payload.id !== prod._id
      );
      newProducts.push(payload);
      state.products = newProducts;
      state.loading = "loaded";
    },
    [productEdit.rejected]: (state, action) => {
      state.loading = "error";
      state.error = action.error;
    },
<<<<<<< HEAD
>>>>>>> parent of b4dc514 (massiv update after products release)
=======
>>>>>>> parent of b4dc514 (massiv update after products release)
  },
});

export default productSlice.reducer;
