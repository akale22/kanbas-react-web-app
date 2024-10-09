import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>
        
            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span></td>
            <td className="wd-login-id">001231231S</td>
            <td className="wd-section">S100</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-08</td>
            <td className="wd-total-activity">11:22:36</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Rogers</span></td>
            <td className="wd-login-id">009264810T</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">PROFESSOR</td>
            <td className="wd-last-activity">2023-09-26</td>
            <td className="wd-total-activity">04:22:16</td> </tr>

            <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span>{" "}
              <span className="wd-last-name">Romanoff</span></td>
            <td className="wd-login-id">006181126T</td>
            <td className="wd-section">S100</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2022-08-22</td>
            <td className="wd-total-activity">08:22:45</td> </tr>
        </tbody>
      </table>
    </div> );}