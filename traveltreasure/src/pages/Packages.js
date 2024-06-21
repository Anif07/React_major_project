import React from "react";
import PackageSearch from "../components/Packages/PackageSearch";
import AllPackages from "../components/Packages/AllPackages";
import Footer from "../components/Home/Footer";

function Packages() {
  return (
    <div>
      <PackageSearch />
      <AllPackages />
      <Footer />
    </div>
  );
}

export default Packages;
