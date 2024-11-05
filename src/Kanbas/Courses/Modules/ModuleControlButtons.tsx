import React from "react";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaPencil } from "react-icons/fa6";

export default function LessonControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const disabled = currentUser.role !== "FACULTY";

  return (
    <div className="float-end">
      {!disabled && (
        <>
          <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
          <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
        </>
      )}
      <GreenCheckmark />
      <FaPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}