import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { unenrollCourse, enrollCourse } from "./EnrollmentReducer";
import { fetchAllCourses } from "./Courses/client";
import axios from "axios";

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
  const isStudent = currentUser?.role === "STUDENT";
  const [allCourses, setAllCourses] = useState([]);
  const [displayCourses, setDisplayCourses] = useState(false);
  const [coursesMap, setCoursesMap] = useState(courses);
  const [loading, setLoading] = useState(false);

  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
  const COURSES_API = `${REMOTE_SERVER}/api/courses`;
  const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get(COURSES_API);
      setAllCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setAllCourses([]);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const isEnrolled = (courseId: any) => {
    return enrollments.some(
      (enrollment: any) => enrollment.course === courseId && enrollment.user === currentUser?._id
    );
  };

  useEffect(() => {
    if (displayCourses) {
      setCoursesMap(allCourses);
    } else {
      const enrolledCourses = allCourses.filter((course: any) => 
        isEnrolled(course._id)
      );
      setCoursesMap(enrolledCourses);
    }
  }, [displayCourses, enrollments, allCourses]);

  const handleEnrollments = () => {
    setDisplayCourses(!displayCourses);
  };

  const handleEnroll = async (courseId: string) => {
    setLoading(true);
    try {
      const enrollment = {
        user: currentUser._id,
        course: courseId
      };
      
      const response = await axios.post(`${ENROLLMENTS_API}/create`, enrollment);
      dispatch(enrollCourse(response.data));
    } catch (error) {
      console.error("Error enrolling in course:", error);
      alert("Failed to enroll in course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnenroll = async (courseId: string) => {
    setLoading(true);
    try {
      const enrollment = enrollments.find(
        (e: any) => e.course === courseId && e.user === currentUser._id
      );
      
      if (!enrollment) {
        console.error("Enrollment not found");
        return;
      }

      await axios.delete(`${ENROLLMENTS_API}/${enrollment._id}`);
      dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      alert("Failed to unenroll from course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {!isStudent && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
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
          <button 
            onClick={handleEnrollments} 
            className="btn btn-primary"
            disabled={loading}
          >
            {displayCourses ? "Show My Courses" : "Show All Courses"}
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
          {coursesMap.map((course: any) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/AI.jpeg" width="100%" height={160} alt="course" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    {!isStudent && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
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
                      </>
                    )}
                    {isStudent && (
                      <>
                        {isEnrolled(course._id) ? (
                          <button
                            id="wd-edit-course-unenroll"
                            onClick={(event) => {
                              event.preventDefault();
                              handleUnenroll(course._id);
                            }}
                            className="btn btn-danger me-2 float-end"
                            disabled={loading}
                          >
                            {loading ? "Processing..." : "Unenroll"}
                          </button>
                        ) : (
                          <button
                            id="wd-edit-course-enroll"
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnroll(course._id);
                            }}
                            className="btn btn-success me-2 float-end"
                            disabled={loading}
                          >
                            {loading ? "Processing..." : "Enroll"}
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