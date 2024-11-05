import React from 'react';

// // export default function CourseStatus() {
// //     return (
// //       <div id="wd-course-status">
// //         <div>
// //             <h2>Course Status</h2>
// //             <button>Unpublish</button> 
// //             <button>Publish</button>
// //         </div>
// //         <br />
// //         <div>
// //             <button>Import Existing Contents</button><br />
// //             <button>Import From Commons</button><br />
// //             <button>Choose Home Page</button><br />
// //             <button>View Course Stream</button><br />
// //             <button>New Announcement</button><br />
// //             <button>New Analytics</button><br />
// //             <button>View Course Notifications</button>
// //         </div>
// //       </div>
// //   );}




import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHome, FaBullhorn, FaChartLine, FaBell } from "react-icons/fa"; // Importing additional icons
import { useSelector } from "react-redux";

export default function CourseStatus() {
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const disabled = currentUser.role !== "FACULTY";

  return (
    <div id="wd-course-status" style={{ width: "300px" }} className="d-none d-xl-block" >
      <h2>Course Status</h2>
      { !disabled && <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
          </button>
        </div>
      </div>}
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
      </button>
      
      {/* Complete the rest of the buttons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaChartLine className="me-2 fs-5" /> New Analytics{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> View Course Stream{" "}
      </button>
    </div>
  );
}