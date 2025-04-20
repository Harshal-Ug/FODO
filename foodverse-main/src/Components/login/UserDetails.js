import React from 'react';
import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import "../login/userStyle.css";

const UserDetails = ({ username, email }) => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="container">
      <div className="sub-container">
        <div className="header">
          <div className="text">Welcome, {username}!</div>
          <div className="underline"></div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" value={username} readOnly />
            </div>
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" value={email} readOnly />
            </div>
          </div>
          <button className="buttonText" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
