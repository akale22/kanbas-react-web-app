import { BsGripVertical, BsPlus } from "react-icons/bs";
import { SlNotebook } from "react-icons/sl";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoCaretDown, IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
export default function Assignments() {
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
            <li
              className="list-group-item p-3 ps-1 d-flex"
              id="wd-assignment-list-item"
            >
              <div className="col-1">
                <BsGripVertical className="me-2 fs-3" />
                <SlNotebook className="text-success me-3" />
              </div>

              <div className="col">
                <h3>
                  <a
                    className="wd-assignment-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Assignments/125"
                  >
                    A1
                  </a>
                </h3>
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13
                at 11:59pm | 100 pts
              </div>

              <div className="col-2">
                <LessonControlButtons />
              </div>
            </li>

            <li
              className="list-group-item p-3 ps-1 d-flex"
              id="wd-assignment-list-item"
            >
              <div className="col-1">
                <BsGripVertical className="me-2 fs-3" />
                <SlNotebook className="text-success me-3" />
              </div>

              <div className="col">
                <h3>
                  <a
                    className="wd-assignment-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Assignments/125"
                  >
                    A2
                  </a>
                </h3>
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20
                at 11:59pm | 100 pts
              </div>

              <div className="col-2">
                <LessonControlButtons />
              </div>
            </li>

            <li
              className="list-group-item p-3 ps-1 d-flex"
              id="wd-assignment-list-item"
            >
              <div className="col-1">
                <BsGripVertical className="me-2 fs-3" />
                <SlNotebook className="text-success me-3" />
              </div>

              <div className="col">
                <h3>
                  <a
                    className="wd-assignment-link text-decoration-none text-dark"
                    href="#/Kanbas/Courses/1234/Assignments/125"
                  >
                    A3
                  </a>
                </h3>
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27
                at 11:59pm | 100 pts
              </div>

              <div className="col-2">
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
