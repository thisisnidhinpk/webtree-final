import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logoutbtn from "./Logoutbtn";
import axios from "axios";
function ManageExpenses() {
  const email = useSelector((state) => state.auth.UserEmail);
  const userfullname = useSelector((state) => state.auth.UserFullname);
  const [catagory, setCatagory] = useState();
  const [catagoryList, setCatagoryList] = useState([]);
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [dateofexp, setDateofexp] = useState();
  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  let loadCatagory = () => {
    // alert("hjh");
    //useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8000/api/loadCatagory",
        {
          email,
        },
        { headers }
      )
      .then((result) => {
        console.log(JSON.stringify(result.data));

        setCatagoryList(result.data);
        // if (result.data.status == 200) {
        //   alert(result.data.Msg);
        // }
      })
      .catch((err) => console.log("jjj" + err));
    // });
  };
  let createExpenses = () => {
    

    axios
      .post(
        "http://127.0.0.1:8000/api/createExpenses",
        {
          email,
          catagory,
          description,
          amount,
          dateofexp,
        },
        { headers }
      )
      .then((result) => {
        console.log(result.data);
        if (result.data.status == 200) {
          alert(result.data.Msg);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4>ManageExpenses</h4>

      <div className="row">
        <div className="col-sm-3" style={{ backgroundColor: "aquamarine" }}>
          
        </div>
        <div className="col-sm-6" style={{ backgroundColor: "aquamarine" }}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email id"
              value={email}
              readOnly
            />
          </div>
          <div className="form-group">
            
            <select
              id="sel1"
              className="form-control"
              onClick={loadCatagory}
              onChange={(myval) => {
                setCatagory(myval.target.value);
              }}
            >
              {catagoryList.map((mycatagory, index) => (
                <option key={index} value={mycatagory.catagory}>
                  {mycatagory.catagory}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Expense note"
              onChange={(myexp) => {
                setDescription(myexp.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              onChange={(myamt) => {
                setAmount(myamt.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              onChange={(mydt) => {
                setDateofexp(mydt.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={createExpenses}
            >
              <i className="fa fa-search"></i> Save
            </button>
          </div>
        
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
             
            >
              <i className="fa fa-search"></i> Update Catagory
            </button>
          </div>
          <div className="form-group">
           
            <Link to={"/manageCatagory"}>Manage Catagory</Link>|
            <Link to={"/manageExpenses"}>Manage Expences</Link>|
            <Link to={"/summerizeExpenses"}>Expence Summary</Link>
            <br></br>
           
            <Logoutbtn></Logoutbtn>
           
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

export default ManageExpenses;
