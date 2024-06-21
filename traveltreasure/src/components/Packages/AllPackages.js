import React, { useEffect } from "react";
import "../../styles/packages/allPackages.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIndianPackages,
  fetchInternationalPackages,
  setId,
  setInternationalId,
} from "../../redux/slices/AllPackagesSlice";
import Loading from "../common/Loading";
import { useNavigate } from "react-router";
import NetworkError from "../common/NetworkError";

function AllPackages() {
  const dispatch = useDispatch();
  const { indianPackages, status, internationalPackages, internationalStatus } =
    useSelector((state) => state.AllPackages);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchIndianPackages());
    dispatch(fetchInternationalPackages());
  }, [dispatch]);

  const ExploreHandler = (id) => {
    dispatch(setId(id));
    navigate("/singlePackage", { state: { id: id, belong: "india" } });
  };
  const internationalExploreHandler = (id) => {
    dispatch(setInternationalId(id));
    navigate("/singlePackage", { state: { id: id, belong: "international" } });
  };

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") {
    return <NetworkError />;
  }
  return (
    <>
      <div className="indiaPackages">
        <h1 className="packageHeading">
          India Tour packages
          <hr />
        </h1>

        <div className="packages">
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
                  <button
                    className="exploreBtn"
                    onClick={() => {
                      ExploreHandler(obj.id);
                    }}
                  >
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

        <div className="packages">
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
                  <button
                    className="exploreBtn"
                    onClick={() => internationalExploreHandler(obj.id)}
                  >
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

export default AllPackages;
