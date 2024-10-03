import React from 'react';
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h3 className="mb-4">Profile</h3>
      <form>
        <div className="mb-3">
          <input id="wd-username" className="form-control" value="alice" placeholder="Username" />
        </div>
        <div className="mb-3">
          <input id="wd-password" className="form-control" value="123" placeholder="Password" type="text" />
        </div>
        <div className="mb-3">
          <input id="wd-firstname" className="form-control" value="Alice" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <input id="wd-lastname" className="form-control" value="Wonderland" placeholder="Last Name" />
        </div>
        <div className="mb-3">
          <input id="wd-dob" className="form-control" value="2000-01-01" type="date" />
        </div>
        <div className="mb-3">
          <input id="wd-email" className="form-control" value="alice@wonderland.com" type="email" placeholder="Email" />
        </div>
        <div className="mb-3">
          <select id="wd-role" className="form-select">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
        <Link to="/Kanbas/Account/Signin" className="btn btn-danger">Sign out</Link>
      </form>
    </div>
  );
}