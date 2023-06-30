import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TextField from "@mui/material/TextField";
import "./login.css";

export const Login = () => {
  return (
    <>
      <div style={{ height: "500px" }}></div>
      <div className="bg">
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <div className="container">
          <div className="box-1">
            <div>
              <h1 style={{ marginLeft: "80px" }}>Login</h1>
              {/* <div style={{display:"inlineBlock" ,border:"1px solid red"}}> */}
              <br />
              <div style={{ marginLeft: "80px" }}>
                <FacebookRoundedIcon />
                <FacebookRoundedIcon />
              </div>

              {/* </div> */}
              <p style={{ marginLeft: "50px" }}>or use your account</p>
              <br />
              <TextField id="filled-basic" label="Email" variant="filled" />
              <br />
              <br />
              <TextField id="filled-basic" label="Pasword" variant="filled" />
              <br />
              <br />

              <p style={{ marginLeft: "40px" }}>Forgot your password</p>

              <br />

              <button className="loginBtn"> LOG IN</button>
            </div>
          </div>
          <div className="box-2">
            <div className="box-2Content">
              <h1 style={{ width:"70%",marginLeft: "40px" ,textAlign:"center" }}>HTML CSS Login Form</h1>
              <p style={{ marginLeft: "40px",textAlign:"center" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                accusantium error quibusdam deserunt assumenda aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
