import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchIndianPackages = createAsyncThunk(
  "AllPackages/fetchIndianPackages",
  async () => {
    const response = await axios.get(
      "https://json-server-8qp6.onrender.com/indianPackages3"
    );
    return response.data;
  }
);

export const fetchInternationalPackages = createAsyncThunk(
  "AllPackages/fetchInternationalPackages",
  async () => {
    const response = await axios.get(
      "https://json-server-8qp6.onrender.com/internationalPackages3"
    );
    return response.data;
  }
);

const AllPackages = createSlice({
  name: "AllPackages",
  initialState: {
    indianPackages: [],
    internationalPackages: [],
    status: "idle",
    internationalStatue: "idle",
    id: 0,
    internationalId: 0,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setInternationalId: (state, action) => {
      state.internationalId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndianPackages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIndianPackages.fulfilled, (state, action) => {
        state.status = "success";
        state.indianPackages = action.payload;
      })
      .addCase(fetchIndianPackages.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchInternationalPackages.pending, (state) => {
        state.internationalStatue = "loading";
      })
      .addCase(fetchInternationalPackages.fulfilled, (state, action) => {
        state.internationalPackages = action.payload;
        state.internationalStatue = "success";
      })
      .addCase(fetchInternationalPackages.rejected, (state) => {
        state.internationalStatue = "failed";
      });
  },
});

export const { setId, setInternationalId } = AllPackages.actions;
export default AllPackages.reducer;
