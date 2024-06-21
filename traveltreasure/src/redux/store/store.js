import { configureStore } from "@reduxjs/toolkit";
import heroSectionReducer from "../slices/heroSectionSlice";
import AllPackagesReducer from "../slices/AllPackagesSlice";
import SinglePackageReducer from "../slices/SinglePackageSlice";
import FlightSearchReducer from "../slices/Flights/FlightSearchSlice";

const store = configureStore({
  reducer: {
    heroSection: heroSectionReducer,
    AllPackages: AllPackagesReducer,
    singlePackage: SinglePackageReducer,
    FlightSearch: FlightSearchReducer,
  },
});
export default store;
