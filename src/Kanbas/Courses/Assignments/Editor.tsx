import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useLocation } from "react-router";
import { Link } from 'react-router-dom';
import * as db from "../../Database"
export default function AssignmentEditor() {
  const { aid } = useParams();
  const { cid } = useParams();
  const assignments = db.assignments;
  const assingment = assignments.find((ass)=> ass._id==aid);
  return (
    <div id="wd-assignments-editor" className="container mt-5">
      <form>
        <div className="mb-3 row">
          <div><label htmlFor="wd-name" className="col-form-label col-sm-2">Assignment Name</label></div>
          <div className="col-sm-10">
            <input type="text" id="wd-name" className="form-control" value={assingment?.title+" "+aid} />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-12">
            <p>The assignment is <a href="#">available online</a></p>
            <p>Submit a link to the landing page of your Web application running on <a href="#">Netlify</a>.</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the <a href="#">Kanbas</a> application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>The Kanbas application should include a link to navigate back to the landing page.</p>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="wd-points" className="col-form-label col-sm-2">Points</label>
          <div className="col-sm-10">
            <input type="number" id="wd-points" className="form-control" value={100} />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Assignment Group</label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-Group">
              <option value="Assignments" selected>Assignments</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="wd-Grade-Type" className="col-sm-2 col-form-label">Display Grade as</label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-Grade-Type">
              <option value="Percentage" selected>Percentage</option>
              <option value="Letter">Letter</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-chkbox-txt-entry" />
              <label className="form-check-label" htmlFor="wd-chkbox-txt-entry">Text Entry</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-chkbox-website-url" defaultChecked />
              <label className="form-check-label" htmlFor="wd-chkbox-website-url">Website URL</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-chkbox-media-rec" />
              <label className="form-check-label" htmlFor="wd-chkbox-media-rec">Media Recordings</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-chkbox-student-ann" />
              <label className="form-check-label" htmlFor="wd-chkbox-student-ann">Student Annotations</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="wd-chkbox-file-uploads" />
              <label className="form-check-label" htmlFor="wd-chkbox-file-uploads">File Uploads</label>
            </div>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="wd-Submission-Type" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10">
            <select className="form-select" id="wd-Submission-Type">
              <option value="Online" selected>Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="wd-assign" className="col-sm-2 col-form-label">Assign to</label>
          <div className="col-sm-10">
            <input type="text" id="wd-assign" className="form-control" value="Everyone" />
          </div>
        </div>

        <div className="mb-3 row">
          <div><label htmlFor="wd-due" className="col-sm-2 col-form-label">Due</label></div>
          <div className="col-sm-10">
            <input type="date" id="wd-due" className="form-control" value="2024-05-13" />
          </div>
        </div>

        <div className="mb-3 row">
          <div className='d-flex justify-content-between'>
          <label htmlFor="wd-from" className="col-sm-2 col-form-label">Available From</label>
          <label htmlFor="wd-to" className="col-sm-2 col-form-label">Until</label>
          </div>
          <div className='d-flex justify-content-between'>

          <div className="col-sm-4">
            <input type="date" id="wd-from" className="form-control" value="2024-05-06" />
          </div>
          <div className="col-sm-4">
            <input type="date" id="wd-to" className="form-control" />
          </div>
          </div>
        </div>

        <hr />

        <div className="row float-end">
          <div className="col-sm-12">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}><button type="submit" className="btn btn-primary">Save</button></Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}><button type="button" className="btn btn-secondary ms-2">Cancel</button></Link>
          </div>
        </div>
      </form>
    </div>
  );
}
