import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedin, loggedout } from "../features/auth/authSlice";
import { useState } from "react";
import Logoutbtn from "./Logoutbtn";

function Homepage() {
  const useremail = useSelector((state) => state.auth.UserEmail);
  const userfullname = useSelector((state) => state.auth.UserFullname);
  const navigate = useNavigate();
  return (
    <div>
      <h4>DashBoard</h4>

      <div className="row">
        <div
          className="col-sm-3"
          style={{ backgroundColor: "aquamarine" }}
        ></div>
        <div className="col-sm-6" style={{ backgroundColor: "aquamarine" }}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email id"
              value={useremail}
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={userfullname}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password (min 6 charracters)"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i> Sign Up
            </button>
          </div>
          <div className="form-group">
            {/* <button className="btn btn-secondary" type="button"> */}
            <Link to={"/manageCatagory"}>Manage Catagory</Link>|
            <Link to={"/manageExpenses"}>Manage Expences</Link>|
            <Link to={"/summerizeExpenses"}>Expence Summary</Link>
            <br></br>
            {/* <Link to={"/"}>SignOut</Link> */}
            <Logoutbtn></Logoutbtn>
            {/* </button> */}
          </div>
        </div>
        <div
          className="col-sm-3"
          style={{ backgroundColor: "aquamarine" }}
        ></div>
      </div>
    </div>
  );
}

export default Homepage;
