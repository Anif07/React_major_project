import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlights = createAsyncThunk(
  "FlightSearchSlice/fetchFlights",
  async ({ from, to }) => {
    console.log(from, to);
    const response = await axios.get(
      `https://json-server-8qp6.onrender.com/flights3?departure_airport=${from}&arrival_airport=${to}`
    );
    console.log(response.data);
    return response.data;
  }
);
const FlightSearchSlice = createSlice({
  name: "FlightSearchSlice",
  initialState: {
    from: "",
    to: "",
    date: "",
    persons: "1",
    status: "idle",
    flights: [],
  },
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setPersons: (state, action) => {
      state.persons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.flights = action.payload;
        state.status = "success";
      })
      .addCase(fetchFlights.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFrom, setTo, setDate, setPersons } =
  FlightSearchSlice.actions;

export default FlightSearchSlice.reducer;
