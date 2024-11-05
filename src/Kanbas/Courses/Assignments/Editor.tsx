import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useNavigate } from "react-router-dom";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const assignment = assignments.find((assignment: any) => assignment._id === aid);

  const disabled = currentUser.role !== "FACULTY";
  const [formData, setFormData] = useState({
    name: assignment?.title || "Assignment Name",
    course: cid,
    description: assignment?.description || "Assignment description",
    points: assignment?.points,
    dueDate: assignment?.dueDate,
    availableFrom: assignment?.availableFrom,
    availableUntil: assignment?.availableUntil,
  });
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const existingAssignment = assignments.find((assignment: any) => assignment._id === aid);
  const handleSubmit = () => {
    if (existingAssignment) {
      dispatch(
        updateAssignment({
          _id: aid,
          title: formData.name,
          description: formData.description,
          points: formData.points,
          dueDate: formData.dueDate,
          availableFrom: formData.availableFrom,
          availableUntil: formData.availableUntil,
          course: formData.course,
        })
      );
    } else {
      dispatch(
        addAssignment({
          _id: aid,
          title: formData.name,
          description: formData.description,
          points: formData.points,
          dueDate: formData.dueDate,
          availableFrom: formData.availableFrom,
          availableUntil: formData.availableUntil,
          course: formData.course,
        })
      );
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Assignment Name</h3>
        </label>
        <input
          id="name"
          className="form-control mb-4"
          value={formData.name}
          defaultValue={"Assignment name "}
          onChange={handleChange}
          disabled={disabled}
        />
        <label htmlFor="description">
          <h4>Description</h4>
        </label>
        <textarea
          id="description"
          className="form-control mb-4"
          style={{ height: "200px" }}
          value={formData.description}
          defaultValue={`The assignment is available online. 
Submit a link to the landing page of your Web application running on Netlify. 
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-lg-8">
            <input
              id="points"
              type="number"
              className="form-control mb-3"
              value={formData.points}
              defaultValue={100}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="wd-groups" className="form-label">
              Assignment Group
            </label>
          </div>
          <div className="col-lg-8">
            <select id="wd-groups" disabled={disabled} className="form-select mb-3">
              <option value="1">ASSIGNMENTS</option>
              <option value="2">LABS</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="wd-display-grade-as" className="form-label">
              Display Grade as
            </label>
          </div>
          <div className="col-lg-8">
            <select id="wd-display-grade-as" disabled={disabled} className="form-select mb-3">
              <option value="1">PERCENTAGES</option>
              <option value="2">MARKS</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="wd-submission-type" className="form-label">
              Submission Type
            </label>
          </div>
          <div className="col-lg-8 border border-1 p-2 rounded">
            <select id="wd-submission-type" disabled={disabled} className="form-select mb-4">
              <option value="1">ONLINE</option>
              <option value="2">OFFLINE</option>
            </select>
            <p>
              <b>Online Entry Options</b>
            </p>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-text-entry"
                disabled={disabled}
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-website-url"
                disabled={disabled}
                className="form-check-input"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-media-recordings"
                disabled={disabled}
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-student-annotation"
                disabled={disabled}
                className="form-check-input"
              />
              <label htmlFor="wd-student-annotation" className="form-check-label">
                Student Annotations
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-file-upload"
                disabled={disabled}
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Upload
              </label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">Assign</div>
          <div className="col-lg-8 border border-2 p-2 rounded">
            <label htmlFor="wd-assign-to" className="form-label">
              Assign to
            </label>
            <input
              type="text"
              id="wd-assign-to"
              className="form-control mb-4"
              value="Everyone"
              disabled={disabled}
            />
            <label htmlFor="wd-due-date" className="form-label">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              className="form-control mb-4"
              value={formData.dueDate}
              onChange={handleChange}
              disabled={disabled}
            />
            <label htmlFor="wd-available-from" className="form-label">
              Available from
            </label>
            <input
              type="date"
              id="availableFrom"
              className="form-control mb-4"
              value={formData.availableFrom}
              onChange={handleChange}
              disabled={disabled}
            />
            <label htmlFor="wd-available-until" className="form-label">
              Available until
            </label>
            <input
              type="date"
              id="availableUntil"
              className="form-control mb-4"
              value={formData.availableUntil}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>
        {disabled ? (
          <></>
        ) : (
          <div className="d-flex justify-content-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
              <button type="button" className="btn btn-secondary me-2">
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn btn-danger" disabled={disabled}>
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}