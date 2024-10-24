import { BsGripVertical, BsPlus } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoCaretDown, IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const formatDate = (dateStr: string): string => {
    const [year, month, day] = dateStr.split('-');
    const date = new Date(Number(year), Number(month) - 1, Number(day)); 
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options); 
  };

  return (
    <div id="wd-assignments" className="me-4 ms-4">
      <div id="wd-assignments-controls" className="text-nowrap">
        <div className="row mb-4">
          <div className="col-5">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white rounded-0 border-end-0">
                  <CiSearch className="fs-1" />
                </span>
              </div>
              <input
                id="wd-search-assignment"
                className="form-control col-6 rounded-0 border-start-0"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="text-nowrap col-7">
            <button
              id="wd-add-assignment"
              className="btn btn-lg btn-danger me-1 float-end"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </button>
            <button
              id="wd-add-assignment-group"
              className="btn btn-lg btn-secondary me-1 float-end"
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Group
            </button>
          </div>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li
          className="list-group-item p-0 mb-5 fs-5 border-gray"
          id="wd-assignments-title"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoCaretDown className="fs-5 me-2" />
            <b id="wd-assignments-title">ASSIGNMENTS</b>
            <div className="float-end">
              <span className="border border-dark rounded-5 p-2 me-1">
                40% of Total
              </span>
              <BsPlus className="fs-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul className="wd-assignment list-group rounded-0">
            {assignments.map((assignment: any) => (
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex">
                <div className="col-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <SlNotebook className="text-success me-3" />
                </div>
                <div className="col">
                  <h3>
                    <a
                      className="wd-assignment-link text-decoration-none text-dark"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </a>
                  </h3>
                  <span className="text-danger">Multiple Modules</span> |  {" "}
                  <b>Not available until</b> {formatDate(assignment.availableFrom)} at 12:00am | <b>Due</b> {formatDate(assignment.dueDate)} at 11:59pm | 100 pts
                </div>
                <div className="col-1">
                  <LessonControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
