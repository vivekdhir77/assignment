import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

    export default function Signup() {
       const [user, setUser] = useState<any>({});
       const navigate = useNavigate();
       const dispatch = useDispatch();
       const signup = async () => {
              const currentUser = await client.signup(user);
              dispatch(setCurrentUser(currentUser));
              navigate("/Kanbas/Account/Profile");
       };
      return (
        <div id="wd-signin-screen">
          <h3>Sign up</h3>
          <input id="wd-username"
                 value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                 placeholder="username"
                 className="form-control mb-2"/>
          <input id="wd-password"
          value={user.password} 
          onChange={(e) => setUser({ ...user, password: e.target.value })}

                 placeholder="password" type="password"
                 className="form-control mb-2"/>
          {/* <input id="wd-verify-password"
                 placeholder="re enter password" type="password"
                 className="form-control mb-2"/> */}
          <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button><br />
          <Link to="/Kanbas/Account/Signin" className="wd-signin-link">Sign in</Link>
        </div>
    );}
    