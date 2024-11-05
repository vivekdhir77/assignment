import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa"; // Importing the plus and search icons
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AssignmentsControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {isFaculty && (
        <>
          <Link to={`${new Date().getTime().toString()}`}>
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-2 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </button>
          </Link>

          <button id="wd-view-progress" className="btn btn-lg btn-secondary me-2 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>
        </>
      )}

      <div className="float-start me-5 ">
        <div className="input-group mt-1" style={{ width: "300px" }}>
          <span className="input-group-text" id="basic-addon1">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}