import { NavLink, useParams, useLocation } from "react-router-dom";

export default function Navigation() {
  const { cid } = useParams();
  const location = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        return (
          <NavLink
            key={link}
            to={`/Kanbas/Courses/${cid}/${link}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={({ isActive }) =>
              isActive || location.pathname.includes(link)? "list-group-item border border-0 active text-black": "list-group-item text-danger border border-0"
            }
          >
            {link}
          </NavLink>
        );
      })}
    </div>
  );
}