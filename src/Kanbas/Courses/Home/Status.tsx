import React from 'react';
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { MdOutlineNewLabel } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
// export default function CourseStatus() {
//     return (
//       <div id="wd-course-status">
//         <div>
//             <h2>Course Status</h2>
//             <button>Unpublish</button> 
//             <button>Publish</button>
//         </div>
//         <br />
//         <div>
//             <button>Import Existing Contents</button><br />
//             <button>Import From Commons</button><br />
//             <button>Choose Home Page</button><br />
//             <button>View Course Stream</button><br />
//             <button>New Announcement</button><br />
//             <button>New Analytics</button><br />
//             <button>View Course Notifications</button>
//         </div>
//       </div>
//   );}

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
        
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiSolidSelectMultiple className="me-2 fs-5" /> Choose Home Page </button>


      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <CiViewList className="me-2 fs-5" /> View Course Stream </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdOutlineNewLabel className="me-2 fs-5" /> New Announcement </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdOutlineOpenInNew className="me-2 fs-5" />New Analytics </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GrOverview className="me-2 fs-5" />View Course Notifications </button>
    </div>
);}

  