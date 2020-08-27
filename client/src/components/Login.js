import React, {useState} from "react";
import axios from "axios";
import api from "../utils/api"

import "./Login.css";

const Login = (props) => {

  const [formData, setForm] = useState({
    username:"",
    password:''
  })

function submitForm(e){
  e.preventDefault();
  api()
    .post("http://localhost:5000/api/login", formData)
    .then((res)=>{
      console.log(res);
      localStorage.setItem("token", res.data.payload)
      props.history.push("/bubbles")
    })
    .catch((err)=>{
      console.log(err);
    })
}

function onChange(e){
  setForm({
    ...formData,
    [e.target.name]:e.target.value
  })
}

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="login">
        <form onSubmit={submitForm}>
          <h2>Login</h2>
          <label> Username
            <input
              type="text"
              name="username"
              value={FormData.username}
              onChange={onChange}>
            
            </input>
          </label>
          <label> Password
            <input
              type="password"
              name="password"
              value={FormData.password}
              onChange={onChange}>
            
            
            </input>
          </label>
          <button onClick={submitForm}
                  className="btn btn-primary btn-block btn-large">Log In</button>
        </form>
      </div>
      
    </>
  );
};

export default Login;
