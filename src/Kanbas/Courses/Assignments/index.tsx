import React from 'react';
import ModulesControls from '../Modules/ModulesControls';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from '../Modules/LessonControlButtons';
import "./index.css"
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
export default function Assignments() {
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
        <a className="wd-assignment-link no-underline" href="#/Kanbas/Courses/1234/Assignments/123">
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <span>
              <b>A1 - ENV + HTML</b> <br />
              <LessonControlButtons />
              <p>
                <span className='text-danger'>Multiple Modules</span> | <b>Not available</b> until May 6 at 12:00pm |
                <br /> <b>Due</b> May 13 at 11:59pm | 100 pts
              </p>
            </span>
          </li>
        </a>

        <a className="wd-assignment-link no-underline" href="#/Kanbas/Courses/1234/Assignments/123">
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <span>
              <b>A2 - CSS + BOOTSTRAP</b> <br />
              <LessonControlButtons />
              <p>
                <span className='text-danger'>Multiple Modules</span> | <b>Not available</b> until May 12 at 12:00pm |
                <br /> <b>Due</b> May 20 at 11:59pm | 100 pts
              </p>
            </span>
          </li>
        </a>

        <a className="wd-assignment-link no-underline" href="#/Kanbas/Courses/1234/Assignments/123">
          <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <span>
              <b>A3 - JAVASCRIPT + REACT</b> <br />
              <LessonControlButtons />
              <p>
                <span className='text-danger'>Multiple Modules</span> | <b>Not available</b> until May 20 at 12:00pm |
                <br /> <b>Due</b> May 27 at 11:59pm | 100 pts
              </p>
            </span>
          </li>
        </a>
      </ul>
    </li>
  </ul>
</div>


      </div>
  );}
  