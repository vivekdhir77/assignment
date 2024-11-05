import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "../Assignments/reducer";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons({ assignmentId }: { assignmentId: string }) {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isFaculty = currentUser.role === "FACULTY";

  const confirmDelete = () => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div className="float-end">
      {isFaculty && (
        <FaTrash
          className="text-danger me-2 mb-1"
          data-bs-toggle="modal"
          data-bs-target={`#deleteModal-${assignmentId}`}
          style={{ cursor: "pointer" }}
        />
      )}
      <div
        id={`deleteModal-${assignmentId}`} className="modal fade" tabIndex={-1} aria-labelledby={`deleteModalLabel-${assignmentId}`} aria-hidden="true" data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`deleteModalLabel-${assignmentId}`}>
                Confirm Deletion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to delete the assignment</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}