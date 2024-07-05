import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logoutbtn from "./Logoutbtn";
import axios from "axios";
function SummerizeExpenses() {
  const email = useSelector((state) => state.auth.UserEmail);
  const userfullname = useSelector((state) => state.auth.UserFullname);
  const [catagory, setCatagory] = useState();
  const [catagoryList, setCatagoryList] = useState([]);
  const [expensessummery, setExpensessummery] = useState([]);
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [dateofexpstart, setDateofexpstart] = useState();
  const [dateofexpstop, setDateofexpstop] = useState();
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  let loadCatagory = () => {
  
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
  let summerizeExpense = () => {
   
    axios
      .post(
        "http://127.0.0.1:8000/api/summerizeExpenses",
        {
          email,
          dateofexpstart,
          dateofexpstop,
        },
        { headers }
      )
      .then((result) => {
        console.log(JSON.stringify(result.data));

        setExpensessummery(result.data);
      
      })
      .catch((err) => console.log("jjj" + err));
    
  };
  return (
    <div>
      <h4>SummerizeExpenses</h4>

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
            <input
              type="date"
              className="form-control"
              onChange={(mydtstart) => {
                setDateofexpstart(mydtstart.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              onChange={(mydtstop) => {
                setDateofexpstop(mydtstop.target.value);
              }}
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
            <button
              className="btn btn-secondary"
              type="button"
              onClick={summerizeExpense}
            >
              <i className="fa fa-search"></i> view
            </button>
          </div>
          <div className="form-group">
            <table>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
              {expensessummery.map((expensessummeries, index) => (
                <tr key={index}>
                  <td>{expensessummeries.description}</td>

                  <td>{expensessummeries.amount}</td>
                  <td>{expensessummeries.dateofexp}</td>
                </tr>
              ))}
            </table>
          </div>

          <div className="form-group">
            <button className="btn btn-secondary" type="button">
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

export default SummerizeExpenses;
