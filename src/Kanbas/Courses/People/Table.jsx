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
            <td className="wd-total-activity">10:21:32</td> 
            </tr>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Vivek</span>{" "}
              <span className="wd-last-name">Dhir</span></td>
            <td className="wd-login-id">02119</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:01:32</td> 
            </tr>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tapan</span>{" "}
              <span className="wd-last-name">Narra</span></td>
            <td className="wd-login-id">001224521S</td>
            <td className="wd-section">S102</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2021-10-01</td>
            <td className="wd-total-activity">09:21:32</td> 
            </tr>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Sai</span>{" "}
              <span className="wd-last-name">Charan</span></td>
            <td className="wd-login-id">001224521S</td>
            <td className="wd-section">S106</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2019-10-01</td>
            <td className="wd-total-activity">08:21:32</td> 
            </tr>
        </tbody>
      </table>
    </div> );}