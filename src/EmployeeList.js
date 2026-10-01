import './EmployeeList.css';
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import EmployeeAddEdit from "./EmployeeAddEdit";

export default function EmployeeList() {
  const [data, setData] = useState([]);
const navigate = useNavigate();
 const params = useParams();

  useEffect(() => {
    fetch("https://localhost:7149/api/Employee/Get/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const formetedData = data.map((d) => {
    return (
      <tr key={d.empID}>

        <td>
          <div className="employee-info">

            <div className="employee-avatar">
              {d.empName
                ? d.empName.charAt(0).toUpperCase()
                : "E"}
            </div>

            <div className="employee-name-info">
              <strong>{d.empName}</strong>
              <span>{d.empEmail}</span>
            </div>

          </div>
        </td>

        <td>
          <span className="employee-code">
            {d.empCode}
          </span>
        </td>

        <td>
          <span className="position-text">
            {d.empPosition}
          </span>
        </td>

        <td>
          <span className="department-badge">
            {d.empDepartment}
          </span>
        </td>

        <td>
          <span className="contact-text">
            {d.empContact}
          </span>
        </td>

<td>
  <div className="employee-actions">

    <button
      type="button"
      className="action-btn action-view"
      title="View Employee"
      aria-label="View Employee"
    >
      <span>👁</span>
    </button>

    <button
      type="button"
      className="action-btn action-edit"
      title="Edit Employee"
      aria-label="Edit Employee"
      onClick={() => {
    navigate("/EmployeeAddEdit/" + d.empID);
  }}
    >
      <span>✏️</span>
    </button>

    <button
      type="button"
      className="action-btn action-delete"
      title="Delete Employee"
      aria-label="Delete Employee"
      onClick={() => {
          fetch(
            "https://localhost:7149/api/Employee/DeleteOnly/" + d.empID,
            {
              method: "DELETE"
            }
          ).then((res) => {

            if (!res.ok) {
            throw new Error("Delete failed");
            }

              navigate("/EmployeeList"); fetch("https://localhost:7149/api/Employee/Get/")
    .then((res) => res.json())
    .then((res) => {
      setData(res.data);
    });
            })
        }}
    >
      <span>🗑</span>
    </button>

  </div>
</td>       

      </tr>
    );
  });

  return (
    <div className="employee-page">

      {/* Page Header */}

      <div className="employee-page-header">

        <div>
          <span className="page-subtitle">
            EMPLOYEE MANAGEMENT
          </span>

          <h1>Employee List</h1>

          <p>
            Manage and view employee information
          </p>
        </div>

       <button
  className="add-employee-btn"
  onClick={() => {
    navigate("/EmployeeAddEdit");
  }}
>
  + Add Employee
</button>

      </div>


      {/* Employee Table */}

      <div className="employee-table-card">

        <div className="table-top">

          <div>
            <h2>Employees</h2>

            <p>
              All registered employees
            </p>
          </div>

          <div className="employee-count">
            {data.length} Employees
          </div>

        </div>


        <div className="table-wrapper">

          <table className="employee-table">

            <thead>
              <tr>
                
                <th>EMPLOYEE</th>
                <th>CODE</th>
                <th>POSITION</th>
                <th>DEPARTMENT</th>
                <th>CONTACT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {formetedData}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}