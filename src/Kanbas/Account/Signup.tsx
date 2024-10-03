import React from "react";
import { Link } from "react-router-dom";
    export default function Signup() {
      return (
        <div id="wd-signin-screen">
          <h3>Sign up</h3>
          <input id="wd-username"
                 placeholder="username"
                 className="form-control mb-2"/>
          <input id="wd-password"
                 placeholder="password" type="password"
                 className="form-control mb-2"/>
          <input id="wd-verify-password"
                 placeholder="re enter password" type="password"
                 className="form-control mb-2"/>
          <Link id="wd-signup-btn"
                to="/Kanbas/Account/Profile"
                className="btn btn-primary w-100">
                Sign up </Link><br />
          <Link id="wd-signup-btn"
                to="/Kanbas/Account/Profile"
                className="btn btn-secondary w-100 mt-2">
                Sign in </Link><br />
        </div>
    );}
    