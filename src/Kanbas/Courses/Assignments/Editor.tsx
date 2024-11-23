import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const assignment = assignments.find((a: any) => a._id === aid);

  const disabled = currentUser.role !== "FACULTY";
  const [formData, setFormData] = useState({
    name: assignment?.title || "Assignment Name",
    course: cid,
    description: assignment?.description || "Assignment description",
    points: assignment?.points || 100,
    dueDate: assignment?.dueDate || "",
    availableFrom: assignment?.availableFrom || "",
    availableUntil: assignment?.availableUntil || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const payload = {
      _id: aid,
      title: formData.name,
      description: formData.description,
      points: formData.points,
      dueDate: formData.dueDate,
      availableFrom: formData.availableFrom,
      availableUntil: formData.availableUntil,
      course: formData.course,
    };

    if (assignment) {
      dispatch(updateAssignment(payload));
    } else {
      dispatch(addAssignment(payload));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Assignment Name */}
        <label htmlFor="name">
          <h3>Assignment Name</h3>
        </label>
        <input
          id="name"
          className="form-control mb-4"
          value={formData.name}
          onChange={handleChange}
          disabled={disabled}
        />

        {/* Description */}
        <label htmlFor="description">
          <h4>Description</h4>
        </label>
        <textarea
          id="description"
          className="form-control mb-4"
          style={{ height: "200px" }}
          value={formData.description}
          onChange={handleChange}
          disabled={disabled}
        />

        {/* Points */}
        <div className="row mb-4">
          <label htmlFor="points" className="col-lg-4 text-lg-end">
            Points
          </label>
          <div className="col-lg-8">
            <input
              id="points"
              type="number"
              className="form-control"
              value={formData.points}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-4">
          <label htmlFor="wd-groups" className="col-lg-4 text-lg-end">
            Assignment Group
          </label>
          <div className="col-lg-8">
            <select id="wd-groups" className="form-select" disabled={disabled}>
              <option value="1">ASSIGNMENTS</option>
              <option value="2">LABS</option>
            </select>
          </div>
        </div>

        {/* Display Grade */}
        <div className="row mb-4">
          <label htmlFor="wd-display-grade-as" className="col-lg-4 text-lg-end">
            Display Grade as
          </label>
          <div className="col-lg-8">
            <select id="wd-display-grade-as" className="form-select" disabled={disabled}>
              <option value="1">PERCENTAGES</option>
              <option value="2">MARKS</option>
            </select>
          </div>
        </div>

        {/* Submission Type */}
        <div className="row mb-4">
          <label htmlFor="wd-submission-type" className="col-lg-4 text-lg-end">
            Submission Type
          </label>
          <div className="col-lg-8 border border-1 p-2 rounded">
            <select id="wd-submission-type" className="form-select mb-4" disabled={disabled}>
              <option value="1">ONLINE</option>
              <option value="2">OFFLINE</option>
            </select>
            <p><b>Online Entry Options</b></p>
            {["Text entry", "Website URL", "Media Recordings", "Student Annotations", "File Upload"].map((option, index) => (
              <div className="form-check" key={index}>
                <input
                  type="checkbox"
                  id={`wd-${option.toLowerCase().replace(" ", "-")}`}
                  className="form-check-input"
                  disabled={disabled}
                />
                <label className="form-check-label">{option}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Assignment Dates */}
        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">Assign</div>
          <div className="col-lg-8 border border-2 p-2 rounded">
            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
            <input id="wd-assign-to" className="form-control mb-4" value="Everyone" disabled />

            <label htmlFor="dueDate" className="form-label">Due Date</label>
            <input
              type="date"
              id="dueDate"
              className="form-control mb-4"
              value={formData.dueDate}
              onChange={handleChange}
              disabled={disabled}
            />

            <label htmlFor="availableFrom" className="form-label">Available from</label>
            <input
              type="date"
              id="availableFrom"
              className="form-control mb-4"
              value={formData.availableFrom}
              onChange={handleChange}
              disabled={disabled}
            />

            <label htmlFor="availableUntil" className="form-label">Available until</label>
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

        {/* Buttons */}
        {!disabled && (
          <div className="d-flex justify-content-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
              <button type="button" className="btn btn-secondary me-2">Cancel</button>
            </Link>
            <button type="submit" className="btn btn-danger">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}
