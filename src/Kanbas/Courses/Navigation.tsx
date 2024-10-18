import React from 'react';
import { Link, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const {cid} = useParams()
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <div key={index}>
          <Link to={`/Kanbas/Courses/${cid}/${link}`} className="list-group-item active border border-0"> 
            {link} 
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}
