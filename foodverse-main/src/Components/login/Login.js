import { useState } from "react";
import React from "react";
import "./loginStyle.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import UserDetails from "./UserDetails";
import { useEffect } from "react";
// import axios from 'axios';
export const Login = () => {
 
  const [action, setAction]=useState("Sign Up");
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [username, setUsername] = useState("");
  const [uname, setUname]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  // const handleActionChange = (newAction) => {
  //   setAction(newAction);
  //   // Clear input fields when switching actions
  //   setUname("");
  //   setEmail("");
  //   setPassword("");
  // };

 
  
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (action === "Sign Up" && uname && email && password) {
      try {
        const response = await fetch("http://localhost:8000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({
            name: uname,
            email: email,
            password: password,
          }),
        });

        const data = await response.json();
        console.log("Response:", data);
        
        if (data.status === "ok") {
          setMessage({ text: "Sign Up Successful!", type: "success" });
          window.localStorage.setItem("token", data.data);
          setIsLoggedIn(true);
          setUsername(uname);
          setEmail(email);
          setTimeout(() => {
            window.location.href = "/UserDetails";
          }, 1500);
        } else {
          setMessage({ text: data.detail || "Sign Up Failed", type: "error" });
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setMessage({ text: "An error occurred during signup", type: "error" });
      }
    } else if (action === "Login") {
      try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const data = await response.json();
        console.log("Response:", data);

        if (data.status === "ok") {
          setMessage({ text: "Login Successful!", type: "success" });
          window.localStorage.setItem("token", data.data);
          setIsLoggedIn(true);
          setUsername(uname);
          setEmail(email);
          setTimeout(() => {
            window.location.href = "/UserDetails";
          }, 1500);
        } else {
          setMessage({ text: data.detail || "Login Failed", type: "error" });
        }
      } catch (error) {
        console.error("Error during login:", error);
        setMessage({ text: "An error occurred during login", type: "error" });
      }
    } else {
      setMessage({ text: "Please fill in all fields!", type: "error" });
    }
  };


  // const boundHandleSubmit = handleSubmit.bind(this);


  return (

    <div className="container">
    <div className="sub-container">

    {
      isLoggedIn?(<UserDetails username={username} email={email} />):(
    

    <form onSubmit={handleSubmit}>
<div className="header">
  
        <div className="text">{action}</div>
        <div className="underline"></div>
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        <div className="inputs">

          {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Username" onChange={e =>setUname(e.target.value)}/>
          </div> }
          

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password"> For resetting password exchange login by reset in the URL<span></span></div>
}
      <div className="submit-container">
        <button 
        className={action==="Login"?"submit gray":"submit"} 
        onClick={()=>{setAction("Sign Up"); setMessage({ text: "", type: "" });}} >
          SignUp
        </button>
        <button 
        className={action==="Sign Up"?"submit gray":"submit"} 
        onClick={()=>{setAction("Login"); setMessage({ text: "", type: "" });}} >
          Login
          </button>
        
      </div>
      </form>
      )}
    </div>
    </div>
  );
};

export default Login;
