import React from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  const activeStyle = "list-group-item text-center border-0 bg-white text-danger";
  const defaultStyle = "list-group-item text-white bg-black text-center border-0";
  const location = useLocation();
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} 
    className="list-group rounded-0
          position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className="list-group-item bg-black border-0 text-center">Northeastern</a><br/>
      <Link to="/Kanbas/Account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
      <FaRegCircleUser className="fs-1 text text-white" /><br />Account</Link><br/>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className={location.pathname === '/Kanbas/Dashboard' ? activeStyle : defaultStyle}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />Dashboard</Link><br/>
      <Link to="/Kanbas/Courses" id="wd-course-link" className={location.pathname === "/Kanbas/Courses" ? activeStyle : defaultStyle}>
        <LiaBookSolid className="fs-1 text-danger" /><br />Courses</Link><br/>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link" className={location.pathname === "/Kanbas/Calendar" ? activeStyle : defaultStyle}> <IoCalendarOutline className="fs-1 text-danger" /><br />Calendar</Link><br/>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"  className={location.pathname === "/Kanbas/Inbox" ? activeStyle : defaultStyle}> <FaInbox className="fs-1 text-danger" /><br />Inbox</Link><br/>
      <Link to="Labs" id="wd-labs-link"  className={location.pathname === "/Kanbas/Labs" ? activeStyle : defaultStyle}> <LiaCogSolid className="fs-1 text-danger" /><br />Labs</Link><br/>
    </div>
);}
