import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./style.css";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import CourseProtectedRoute from "./Courses/ProtectedRoute"
import { enrollCourse } from "./EnrollmentReducer";
import { useDispatch, useSelector } from "react-redux";

export default function Kanbas() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = () => {
    const newCourseId = new Date().getTime().toString();
    const newCourse = { ...course, _id: newCourseId };

    setCourses((prevCourses) => [...prevCourses, newCourse]);

    dispatch(
      enrollCourse({
        _id: newCourseId, // Use the same ID for both the course and the enrollment
        course: newCourseId, // Use the same course ID for the enrollment
        user: currentUser?._id, // Add the current user's ID to the enrollment
      })
    );
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="Courses/:cid/*"
            element={
              <CourseProtectedRoute>
                <Courses courses={courses} />
              </CourseProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}