import { Route, Router, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Packages from "./pages/Packages";
import Navbar from "./components/common/Navbar";
import "./styles/global.css";
import SinglePackage from "./components/Packages/SinglePackage";
import PackageBilling from "./components/Packages/PackageBilling";
import MyTrips from "./components/common/MyTrips";
import PackageBookingConfirm from "./components/Packages/PackageBookingConfirm";
import Flights from "./pages/Flights";
import SearchedFlights from "./components/Flights/SearchedFlights";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/SinglePackage" element={<SinglePackage />} />
        <Route path="/packageBilling" element={<PackageBilling />} />
        <Route path="/myTrips" element={<MyTrips />} />
        <Route
          path="packageBookingConfirm"
          element={<PackageBookingConfirm />}
        />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/SearchedFlights" element={<SearchedFlights />} />
      </Routes>
    </div>
  );
}

export default App;
