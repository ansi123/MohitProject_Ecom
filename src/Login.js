import React, { useState } from "react";
import { Redirect, Link, useHistory} from "react-router-dom";
import './App.css';
import './App.js';
import Navb from './Navb';
function LogIn() {
  const [flag, setFlag] = useState(false);
  const history =useHistory();
  function loginValidateForm(e) {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
   
    // if (
    //   !pass.match(
    //     /^.*(?=.{8,15})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
    //   )
    // ) {
    //   alert("Please provide valid input in password");
    //   e.preventDefault();
    // }

    var objFetchData = localStorage.getItem("fdata");
    var fetchData = JSON.parse(objFetchData);
    e.preventDefault()

    if(fetchData==null){
      alert("Need to SignUp first")
      return false
    }
    // }else if (fetchData.email === email && fetchData.pass === pass) {
      
    //   alert(`Welcome ${fetchData.fName} ${fetchData.lName}`)
    //   history.push('/My')
    // } 
    else if (fetchData.email === email && fetchData.pass === pass){
      setFlag(true);

      return true;
    }
    else{
      setFlag(false);
      alert("please provide valid username or password");
      e.preventDefault();

      return false;
    }
  }
  return (
    <div className="App">
      
      <Navb/>

      <form onSubmit={loginValidateForm} id='frm1'>
      <div id='s3'><h3>Login</h3></div>
       <br/>
        <a>Email</a>
        <br />
        <input
          type="email"
          id="email"
          required
        />{" "}
        <br />
        <a>Password</a>
        <br />
        <input
          type="password"
          id="pass"
          required
        />{" "}
        <br />
        <br />
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <br/>
        <br/>
        {/* <h6>not registered ?  <Link to = "/SignUp"><a>SignUp</a></Link></h6> */}

        {flag ? <Redirect to="/Data" />:null}
        <br />

        {/* <App flag={flag} setFlag={setFlag}/> */}

      </form>
    </div>
  );
}

export default LogIn;
