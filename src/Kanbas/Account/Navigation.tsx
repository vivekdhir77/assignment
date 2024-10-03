import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();
  const activeStyle = {
    color: 'black',
    textDecoration: 'none',
    borderLeft: '1px solid black',
    paddingLeft: '6px'
  };
  const defaultStyle = {
    color: 'red',
    textDecoration: 'none'
  };

  return (
    <div id="wd-account-navigation" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: '10px'
    }}>
      <Link
        to={`/Kanbas/Account/Signin`}
        style={location.pathname === '/Kanbas/Account/Signin' ? activeStyle : defaultStyle}
      >
        Signin
      </Link>
      <Link
        to={`/Kanbas/Account/Signup`}
        style={location.pathname === '/Kanbas/Account/Signup' ? activeStyle : defaultStyle}
      >
        Signup
      </Link>
      <Link
        to={`/Kanbas/Account/Profile`}
        style={location.pathname === '/Kanbas/Account/Profile' ? activeStyle : defaultStyle}
      >
        Profile
      </Link>
    </div>
  );
}
