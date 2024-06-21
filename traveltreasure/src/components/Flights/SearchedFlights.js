import React from "react";
import { useSelector } from "react-redux";
import SearchBarFlight from "./SearchBarFlight";
import "../../styles/flight/searchedFlights.css";
import Footer from "../Home/Footer";
import Loading from "../common/Loading";
import NetworkError from "../common/NetworkError";

function SearchedFlights() {
  const { flights, status, date } = useSelector((state) => state.FlightSearch);
  console.log(flights);

  const departureDate = new Date(date)
    .toString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
  return (
    <div>
      <div className="searchBarContainer">
        <SearchBarFlight />
      </div>
      <div className="allFlights">
        {status === "pending" && <Loading />}
        {status === "failed" && <NetworkError />}
        {(flights.length === 0) &
          (status !== "pending") &
          (status !== "failed") && (
          <h1 className="noFlights">No Flights found in this Route</h1>
        )}
        {status === "success" &&
          flights.map((obj, index) => (
            <div key={index} className="flightDetails">
              <div className="flightImgContainer">
                <img
                  src={
                    obj?.airline === "Air India"
                      ? "https://res.cloudinary.com/dsysrrxod/image/upload/v1718552785/Air_india_logo_tkar2t.png"
                      : obj?.airline === "IndiGo"
                      ? "https://res.cloudinary.com/dsysrrxod/image/upload/v1718552785/indigo_q47iko.webp"
                      : obj?.airline === "SpiceJet"
                      ? "https://res.cloudinary.com/dsysrrxod/image/upload/v1718899910/SpiceJet-Logo_oywsp0.jpg"
                      : "https://res.cloudinary.com/dsysrrxod/image/upload/v1718899362/flig_kjqjo7.jpg"
                  }
                  alt="assad"
                />
                <p>{obj?.airline}</p>
              </div>
              <div>
                <p>{obj?.departure_airport}, india</p>
                <h1>{obj?.schedule?.departure_time}</h1>
                <p>{departureDate}</p>
              </div>
              <div className="flightMiddle">
                <p>{obj?.duration}</p>
                <div>---------------------</div>
                <p>Direct</p>
              </div>
              <div>
                <p>{obj?.arrival_airport}, india</p>
                <h1>{obj?.schedule?.arrival_time}</h1>
                <p>{departureDate}</p>
              </div>
              <div className="flightViewDetails">
                <h2>
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  {obj?.price}
                </h2>
                <button>View Details</button>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default SearchedFlights;
