import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProtectedContentModification from "../ProtectedContentModification";
import {
  addEnrollment,
  deleteEnrollment,
  setEnrollments,
} from "../enrollmentsReducer";
import { useState, useEffect } from "react";
import * as enrollmentsClient from "./client";

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
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const dispatch = useDispatch();

  async function enrollInCourse(course: string) {
    const enrollment = {
      user: currentUser?._id,
      course: course,
    };
    const newEnrollment = await enrollmentsClient.enrollUserInCourse(
      enrollment
    );
    dispatch(addEnrollment(newEnrollment));
  }

  async function unenrollFromCourse(course: string) {
    const enrollment = enrollments.find(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === course
    );
    await enrollmentsClient.deleteEnrollment(enrollment._id);
    dispatch(deleteEnrollment(enrollment._id));
  }

  function isEnrolledInCourse(course: string) {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === course
    );
  }

  const fetchEnrollments = async () => {
    const enrollments = await enrollmentsClient.getEnrollmentsForUser(
      currentUser?._id
    );
    dispatch(setEnrollments(enrollments));
  };

  useEffect(() => {
    fetchEnrollments();
  }, [courses]);

  return (
    <div id="wd-dashboard" className="ms-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title" className="m-0">
          Dashboard
        </h1>
        <ProtectedContentModification role="STUDENT">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowAllCourses(!showAllCourses);
            }}
          >
            Enrollments
          </button>
        </ProtectedContentModification>
      </div>
      <hr />
      <ProtectedContentModification role="FACULTY">
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            {" "}
            Add{" "}
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
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </ProtectedContentModification>
      <h2 id="wd-dashboard-published">
        Published Courses ({enrollments.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 mb-4">
          {courses.map((course) => {
            return (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key={course._id}
              >
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    // to={
                    //   isEnrolledInCourse(course._id)
                    //     ? `/Kanbas/Courses/${course._id}/Home`
                    //     : "/Kanbas/Dashboard"
                    // }
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img
                      src="/images/reactjs.jpg"
                      width="100%"
                      height={160}
                      alt="React Logo"
                    />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name}{" "}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}{" "}
                      </p>
                      <button className="btn btn-primary"> Go </button>

                      <ProtectedContentModification role="FACULTY">
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
                      </ProtectedContentModification>
                      <ProtectedContentModification role="STUDENT">
                        {isEnrolledInCourse(course._id) ? (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              unenrollFromCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              enrollInCourse(course._id);
                            }}
                            className="btn btn-success float-end"
                          >
                            Enroll
                          </button>
                        )}
                      </ProtectedContentModification>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
