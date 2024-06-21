import React from "react";
import {
  fetchFlights,
  setFrom,
  setTo,
} from "../../redux/slices/Flights/FlightSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchBarFlight from "./SearchBarFlight";
import "../../styles/flight/searchBar.css";

function FlightsSearch() {
  const { from, to } = useSelector((state) => state.FlightSearch);
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(from, to);
    dispatch(fetchFlights({ from, to }));
  };

  return (
    <div>
      <div className="packageBackgroundImg">
        <img
          src="https://res.cloudinary.com/dsysrrxod/image/upload/v1718861862/pexels-pixabay-358319_l5bbqg.jpg"
          alt="backGround"
        />
        <h1>Book a Flight</h1>
      </div>
      <SearchBarFlight />
    </div>
  );
}

export default FlightsSearch;
