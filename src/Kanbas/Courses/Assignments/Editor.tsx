import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cid, aid } = useParams();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const currAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const getFutureDate = (daysAhead: number) => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + daysAhead);
    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, "0");
    const day = String(futureDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const [_id, setId] = useState(currAssignment?._id || "");
  const [title, setTitle] = useState(currAssignment?.title || "");
  const [course, setCourse] = useState(currAssignment?.course || "");
  const [points, setPoints] = useState(currAssignment?.points || 0);
  const [availableFrom, setAvailableFrom] = useState(
    currAssignment?.availableFrom || getCurrentDate()
  );
  const [availableUntil, setAvailableUntil] = useState(
    currAssignment?.availableUntil || getFutureDate(7)
  );
  const [dueDate, setDueDate] = useState(
    currAssignment?.dueDate || getFutureDate(14)
  );
  const [description, setDescription] = useState(
    currAssignment?.description || ""
  );
  const isNew = aid === "newAssignment";

  const setAssignment = async () => {
    const assignment = {
      _id,
      title,
      course,
      points: points || 100,
      availableFrom: availableFrom || getCurrentDate(),
      availableUntil: availableUntil || getFutureDate(7),
      dueDate: dueDate || getFutureDate(14),
      description: description || "",
    };

    if (isNew) {
      // setting values for the fields not in assignment editor (id and course)
      assignment._id = "A" + Math.floor(Math.random() * 100) + 100;
      assignment.course = cid!;
      await coursesClient.createAssignmentForCourse(cid!, assignment);
      dispatch(addAssignment(assignment));
    } else {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (currAssignment && _id === "") {
    setId(currAssignment._id);
    setTitle(currAssignment.title);
    setCourse(currAssignment.course);
    setPoints(currAssignment.points);
    setAvailableFrom(currAssignment.availableFrom);
    setAvailableUntil(currAssignment.availableUntil);
    setDueDate(currAssignment.dueDate);
    setDescription(currAssignment.description);
  }

  return (
    <div id="wd-assignments-editor" className="ms-4">
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input
        className="form-control mb-4"
        id="wd-name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-4"
        id="wd-description"
        rows={10}
        onChange={(e) => setDescription(e.target.value)}
      >
        {description}
      </textarea>

      <div>
        <div className="row mb-4">
          <div className="col-3">
            <label className="form-label float-end" htmlFor="wd-points">
              Points
            </label>
          </div>
          <div className="col-9">
            <input
              className="form-control"
              id="wd-points"
              value={points || 0}
              onChange={(e) => setPoints(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-3">
            <label className="form-label float-end" htmlFor="wd-group">
              Assignment Group
            </label>
          </div>
          <div className="col-9">
            <select className="form-select" id="wd-group">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-3">
            <label
              className="form-label float-end"
              htmlFor="wd-display-grade-as"
            >
              Display Grade As
            </label>
          </div>
          <div className="col-9">
            <select className="form-select" id="wd-display-grade-as">
              <option selected value="PERCENTAGE">
                Percentage
              </option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-3">
            <label
              className="form-label float-end"
              htmlFor="wd-submission-type"
            >
              Submission Type
            </label>
          </div>
          <div className="col-9">
            <div className="border rounded p-3">
              <select className="form-select mb-4" id="wd-display-grade-as">
                <option selected value="ONLINE">
                  Online
                </option>
              </select>
              <b>Online Entry Options</b>
              <div className="form-check mb-3 mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="check-text-entry"
                  id="wd-text-entry"
                />
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>
              <div className="form-check mt-3 mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="check-website-url"
                  id="wd-website-url"
                />
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website URL
                </label>
              </div>
              <div className="form-check mb-3 mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="check-media-recordings"
                  id="wd-media-recordings"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check mb-3 mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="check-student-annotation"
                  id="wd-student-annotation"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check mb-3 mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="check-file-upload"
                  id="wd-file-upload"
                />
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-3">
            <label className="form-label float-end">Assign</label>
          </div>
          <div className="col-9">
            <div className="border rounded p-3">
              <div className="row mb-4 ms-1 me-1">
                <label className="form-label" htmlFor="wd-assign-to">
                  <b>Assign to</b>
                </label>
                <input
                  className="form-control"
                  id="wd-assign-to"
                  value="Everyone"
                />
              </div>
              <div className="row mb-4 ms-1 me-1">
                <label className="form-label" htmlFor="wd-due-date">
                  <b>Due</b>
                </label>
                <input
                  className="form-control"
                  type="date"
                  id="wd-due-date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>

              <div className="row mb-4">
                <div className="col-6">
                  <label
                    className="form-label ms-3"
                    htmlFor="wd-available-from"
                  >
                    <b>Available from</b>
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="wd-available-from"
                    value={availableFrom}
                    onChange={(e) => setAvailableFrom(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label
                    className="form-label ms-3"
                    htmlFor="wd-available-until"
                  >
                    <b>Until</b>
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="wd-available-until"
                    value={availableUntil}
                    onChange={(e) => setAvailableUntil(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="col-12" />
        <div className="col-12">
          <button className="btn btn-danger float-end" onClick={setAssignment}>
            Save
          </button>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="btn btn-secondary float-end me-1"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
