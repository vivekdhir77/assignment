import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { unenrollCourse, enrollCourse } from "./EnrollmentReducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const isStudent = currentUser.role === "STUDENT";
  const [displayCourses, setDisplayCourses] = useState(false);
  const [coursesMap, setCoursesMap] = useState(
    courses.filter((course) =>
      enrollments.some(
        (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id
      )
    )
  );
  const isEnrolled = (courseId: any) => {
    return enrollments.some(
      (enrollment: any) => enrollment.course === courseId && enrollment.user === currentUser._id
    );
  };
  const handleEnrollments = () => {
    setDisplayCourses((prevDisplayCourses) => {
      const newDisplayCourses = !prevDisplayCourses;
      if (newDisplayCourses) {
        setCoursesMap(courses);
      } else {
        setCoursesMap(courses.filter((course) =>
            enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id && enrollment.course === course._id
            )
          )
        );
      }

      return newDisplayCourses;
    });
  };
  useEffect(() => {
    const updatedCoursesMap = displayCourses
      ? courses
      : courses.filter((course) =>
          enrollments.some(
            (enrollment: any) =>
              enrollment.user === currentUser._id && enrollment.course === course._id
          )
        );
    setCoursesMap(updatedCoursesMap);
  }, [courses, enrollments, displayCourses, currentUser._id]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isStudent ? (
        <div></div>
      ) : (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </div>
      )}
      {isStudent && (
        <div className="d-flex justify-content-end w-100">
          <button onClick={handleEnrollments} className="btn btn-primary">
            Enrollments
          </button>
        </div>
      )}
      <h2 id="wd-dashboard-published">
        {isStudent ? (
          displayCourses ? (
            <>All Courses ({coursesMap.length})</>
          ) : (
            <>Enrolled Courses ({coursesMap.length})</>
          )
        ) : (
          <>Published Courses ({coursesMap.length})</>
        )}
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {coursesMap
            .map((course: any) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src="/AI.jpeg" width="100%" height={160} alt="course" />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name} </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary"> Go </button>
                      {!isStudent && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end "
                          id="wd-delete-course-click "
                        >
                          Delete
                        </button>
                      )}
                      {!isStudent && (
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      )}

                      {isStudent && (
                        <>
                          {isEnrolled(course._id) ? (
                            <button
                              id="wd-edit-course-unenroll "
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(
                                  unenrollCourse({ user: currentUser._id, course: course._id })
                                );
                              }}
                              className="btn btn-danger me-2 float-end"
                            >
                              Unenroll
                            </button>
                          ) : (
                            <button
                              id="wd-edit-course-unenroll "
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(
                                  enrollCourse({ user: currentUser._id, course: course._id })
                                );
                              }}
                              className="btn btn-success me-2 float-end"
                            >
                              Enroll
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}