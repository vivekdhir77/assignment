import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from '../Modules/LessonControlButtons';
import "./index.css"
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const assignments = db.assignments;
  const {cid} = useParams()
    return (
      <div id="wd-assignments">
       <div className="d-flex justify-content-between row align-items-center mb-2">
                <div className="col-auto">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input
                            type="text" id="wd-search-assignment" className="form-control" placeholder="Search"/>
                    </div>
                </div>
                <div className="col-auto float-end">
                    <div className="btn-group" role="group">
                        <button id="wd-add-assignment-group" className="btn btn-secondary">+ Group</button>
                        <button id="wd-add-assignment" className="btn btn-danger">+ Assignment</button>
                    </div>
                </div>
            </div>
        <div>
  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        <IoMdArrowDropdown />
        Assignments
        <LessonControlButtons />
        <span className="badge rounded-pill bg-secondary border border-dark float-end text-dark" style={{ marginRight: '5px' }}>40% of total</span>
        <FaPlus className="float-end"/>
      </div>
      <ul className="wd-lessons list-group rounded-0">
       
        {
        assignments.filter((ass)=>ass.course===cid)
        .map((assignment) => (
    <a
      key={assignment._id} 
      className="wd-assignment-link no-underline" 
      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
    >
      <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <span>
          <b>{assignment.title} {assignment._id}</b> <br />
          <LessonControlButtons />
          <p>
            <span className='text-danger'>Multiple Modules</span> | 
            <b>Not available</b> until May 6 at 12:00pm |
            <br /> 
            <b>Due</b> May 13 at 11:59pm | 100 pts
          </p>
        </span>
      </li>
    </a>
  ))}
      </ul>
    </li>
  </ul>
</div>


      </div>
  );}
  