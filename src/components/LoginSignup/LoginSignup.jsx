import React from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
export const LoginSignup = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <div className="header">
          <div className="textHeading">Genral Information</div>
          <div className="underline"></div>
        </div>
        <div className="form">
          <input className="input" type="text" placeholder="First Name" />
          <input className="input" type="text" placeholder="Last Name" />
          <input
            className="input"
            type="text"
            placeholder="College/University Name"
          />
          <select name="courseSelect" id="" className="input">
            <option value="UG">Under Graduation</option>
            <option value="PG">Post Graduate</option>
          </select>
          <input type="text" placeholder="Branch" className="input" />
          <textarea
            className="textarea"
            name="Known-fields"
            id=""
            placeholder="Enter Known Field"
            cols="30"
            rows="10"
          ></textarea>
          <textarea
            className="textarea"
            name="Short-descriptioin"
            id=""
            cols="30"
            rows="10"
            placeholder="Problems"
          ></textarea>
        </div>
      </div>
      <div className="rightContainer">
        <div className="header">
          <div className="textHeading1">Contact Details</div>
          <div className="underline"></div>
        </div>
        <form action="">
          <input
            className="input1"
            type="email"
            name="Email"
            placeholder="Email"
            id=""
          />
          <input
            className="input1"
            type="text"
            id="phone"
            name="phone"
            placeholder="Mobile Number"
          />
          <input type="password" placeholder="Password" className="input1" />
          <div className="div input">
            <input type="checkbox" name="terms&condtion" id="" />I do accept the{" "}
            <a href="">Terms & condition</a> ofyour website
          </div>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};
