import React from "react";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { HiOutlinePencilAlt } from "react-icons/hi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import ControlButtons from "./ControlButtons";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  console.log(assignments);

  return (
    <div>
      <AssignmentsControls /><br /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray ">
          <div className="dropdown-toggle wd-title p-3 ps-2 bg-secondary ">
            <BsGripVertical className="me-2 fs-3 " />
            Assignments
            <ControlButtons />
          </div>
          <ul className="wd-assignment list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-assignment list-group-item p-3 ps-1">
                  <div className="row assignment-item py-3 align-items-center">
                    <div className="col-md-1 d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <HiOutlinePencilAlt className="me-2 fs-3 " color="green" />
                    </div>
                    <div className="col-md-9">
                      <b>
                        <Link
                          className="wd-assignment-link text-decoration-none text-muted"
                          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}/`}
                        >
                          {assignment.title}
                        </Link>
                      </b>
                      <div className="module-info text-muted">
                        <span className="text-danger">Multiple Modules</span> |
                        <span>
                          <b>
                            Not available until {assignment.availableFrom ?? "May 6 at 12:00am"}
                          </b>
                        </span>
                        |<br />
                        <span>
                          <b>Due</b> {assignment.dueDate ?? " May 13 at 11:59pm"}
                        </span>
                        |<span> {assignment.points ?? "100"} pts</span>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <AssignmentControlButtons assignmentId={assignment._id} />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>{" "}
    </div>
  );
}