import React from "react";
import "../../styles/packages/packageSearch.css";

function PackageSearch() {
  return (
    <div>
      <div className="packageBackgroundImg">
        <img
          src="https://res.cloudinary.com/dsysrrxod/image/upload/v1718696207/packagesSearchImg_sp7e26.jpg"
          alt="backGround"
        />
        <h1>Packages</h1>
      </div>
      <div className="searchContainer">
        <form className="form">
          <div>
            <label htmlFor="location">
              <i className="fa-solid fa-location-dot packSearchIcon"></i>
            </label>
            <input
              list="locations"
              id="location"
              name="locations"
              placeholder="Destinations"
            />
            <datalist id="locations">
              <option value="Goa" />
            </datalist>
          </div>
          <div>
            <label htmlFor="date">
              <i className="fa-solid fa-calendar-days packSearchIcon"></i>
            </label>
            <input type="date" id="date" name="date" />
          </div>
          <div>
            <label htmlFor="noOfPersons">
              <i className="fa-solid fa-user packSearchIcon"></i>
            </label>
            <input
              type="number"
              id="noOfPersons"
              name="noOfPersons"
              placeholder="No of Persons"
            />
          </div>
          <div className="searchBtnContainer">
            <button type="submit" className="searchBtn">
              <i className="fa-solid fa-magnifying-glass"></i>Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PackageSearch;
