import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIndianPackages,
  fetchInternationalPackages,
} from "../../redux/slices/AllPackagesSlice";
import "../../styles/homePage/AllPackagesInHome.css";

function AllPackagesInHome() {
  const dispatch = useDispatch();
  const { indianPackages, status, internationalPackages, internationalStatue } =
    useSelector((state) => state.AllPackages);

  useEffect(() => {
    dispatch(fetchIndianPackages());
    dispatch(fetchInternationalPackages());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (status === "failed") {
    return <div>Failed</div>;
  }
  return (
    <>
      <div className="indiaPackages">
        <h1 className="packageHeading">
          India Tour packages
          <hr />
        </h1>

        <div className="packagesHome">
          {indianPackages.map((obj, index) => (
            <div className="Package" key={obj.id}>
              <div className="packImg-Container">
                <img src={obj.images[0]} alt="" />
              </div>
              <div className="package-name-cont">
                <h2>{obj.name}</h2>
                <p>
                  <i className="fa-solid fa-location-dot locIcon"></i>
                  {obj.destination}
                </p>
                <hr />

                <div className="price-explore">
                  <p>
                    Price
                    <br />
                    <span className="price">
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {obj.price}
                    </span>
                  </p>
                  <button className="exploreBtn">
                    Explore<i className="fa-solid fa-arrow-right icon"></i>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>

      <div className="indiaPackages">
        <h1 className="packageHeading">
          International Tour packages
          <hr />
        </h1>

        <div className="packagesHome">
          {internationalPackages.map((obj, index) => (
            <div className="Package" key={obj.id}>
              <div className="packImg-Container">
                <img src={obj.images[0]} alt="" />
              </div>
              <div className="package-name-cont">
                <h2>{obj.name}</h2>
                <p>
                  <i className="fa-solid fa-location-dot locIcon"></i>
                  {obj.destination}
                </p>
                <hr />

                <div className="price-explore">
                  <p>
                    Price
                    <br />
                    <span className="price">
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {obj.price}
                    </span>
                  </p>
                  <button className="exploreBtn">
                    Explore<i className="fa-solid fa-arrow-right icon"></i>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllPackagesInHome;
