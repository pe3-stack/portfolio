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
      });
  }
);

export const productAdd = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    return axios
      .post("http://localhost:8080/api/products/add", {
        name: product.name,
        price: {
          integer: product.price.integer,
          cents: product.price.cents
        }
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
      .delete(`http://localhost:8080/api/products/delete/${_id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const productEdit = createAsyncThunk(
  "products/editProduct",
  async ({ _id, name, price }) => {
    return axios
      .put(`http://localhost:8080/api/products/edit/${_id}`, {
        id: _id,
        name: name,
        price: price,
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
    tot: {
      integer: 0,
      cents: 0
    },
    error: "",
    loading: "",
  },
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
  },
});

export default productSlice.reducer;
