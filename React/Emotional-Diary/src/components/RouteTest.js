import React from "react";
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/new"}>New</Link>
      <br />
      <Link to={"/diary"}>diary</Link>
      <br />
      <Link to={"/Edit"}>Edit</Link>
      <br />
    </>
  );
};

export default RouteTest;
