import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeAddEdit.css";

export default function Addnew() {

  const [data, setData] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  // Check whether ID exists in URL
  const isEdit = params.id !== undefined;

  // Get employee by ID when Edit mode
  useEffect(() => {

    if (isEdit) {

      fetch(
        "https://localhost:7149/api/Employee/Get" + params.id
      )
        .then((res) => {
          console.log("GET Status:", res.status);
          return res.json();
        })
        .then((res) => {

          console.log("GET Response:", res);

          // If your API returns data inside res.data
          setData(res.data);

        })
        .catch((err) => {
          console.log("Get Employee Error:", err);
        });

    }

  }, [params.id, isEdit]);


  const handleChange = (field, value) => {

    setData({
      ...data,
      [field]: value
    });

  };


  const handleSubmit = () => {

    const formData = new FormData();

    formData.append("EmpID", params.id);
    formData.append("empName", data.empName || "");
    formData.append("empCode", data.empCode || "");
    formData.append("empPosition", data.empPosition || "");
    formData.append("empContact", data.empContact || "");
    formData.append("empEmail", data.empEmail || "");
    formData.append("empDepartment", data.empDepartment || "");
    formData.append("empDateOfBirth", data.empDateOfBirth || "");
    formData.append("empProfileImage", data.empProfileImage || "");
    formData.append("empProofImage", data.empProofImage || "");
    formData.append("empProofName", data.empProofName || "");
    formData.append("empManagerId", data.empManagerId ?? "");
    formData.append("empPerHourCharge", data.empPerHourCharge || "");
    formData.append("empGitLink", data.empGitLink || "");


    // =========================
    // EDIT
    // =========================
if (isEdit) {

  const updateData = {
    EmpID: Number(params.id),
    empName: data.empName || "",
    empCode: data.empCode || "",
    empPosition: data.empPosition || "",
    empContact: data.empContact || "",
    empEmail: data.empEmail || "",
    empDepartment: data.empDepartment || "",
    empDateOfBirth: data.empDateOfBirth || "",
    empProfileImage: data.empProfileImage || "",
    empProofImage: data.empProofImage || "",
    empProofName: data.empProofName || "",
    empManagerId: data.empManagerId ?? "",
    empPerHourCharge: data.empPerHourCharge || "",
    empGitLink: data.empGitLink || ""
  };

  fetch(
    "https://localhost:7149/api/Employee/Update/",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateData)
    }
  )
    .then((res) => {

      console.log("Update HTTP Status:", res.status);
      console.log("Update HTTP OK:", res.ok);

      return res.json();

    })
    .then((res) => {

      console.log("Update API Response:", res);

      if (res.status === true) {
        navigate("/EmployeeList");
      } else {
        console.log("Update Failed");
      }

    })
    .catch((err) => {

      console.log("Update Error:", err);

    });
}

    // =========================
    // ADD
    // =========================

    else {

      fetch(
        "https://localhost:7149/api/Employee/Insert/",
        {
          method: "POST",
          body: formData
        }
      )
        .then((res) => {

          console.log("Insert HTTP Status:", res.status);
          console.log("Insert HTTP OK:", res.ok);

          return res.json();

        })
        .then((res) => {

          console.log("Insert API Response:", res);

          if (res.status === true) {

            navigate("/EmployeeList");

          } else {

            console.log("Insert Failed");

          }

        })
        .catch((err) => {

          console.log("Insert Error:", err);

        });

    }

  };


  return (
    <div className="employee-form-page">

      <div className="employee-form-header">

        <div>

          <span className="form-subtitle">
            EMPLOYEE MANAGEMENT
          </span>

          <h1>
            {isEdit ? "Edit Employee" : "Add New Employee"}
          </h1>

          <p>
            {isEdit
              ? "Update employee information"
              : "Create a new employee record"}
          </p>

        </div>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/EmployeeList")}
        >
          ← Back to Employees
        </button>

      </div>


      <div className="employee-form-card">


        {/* ================= BASIC INFORMATION ================= */}

        <div className="form-section">

          <div className="section-title">

            <h2>Basic Information</h2>

            <p>
              Enter the employee's basic details
            </p>

          </div>


          <div className="form-grid">

            <div className="form-group">

              <label>Employee Name</label>

              <input
                type="text"
                placeholder="Enter employee name"
                value={data.empName || ""}
                onChange={(e) =>
                  handleChange("empName", e.target.value)
                }
              />

            </div>


            <div className="form-group">

              <label>Employee Code</label>

              <input
                type="text"
                placeholder="Enter employee code"
                value={data.empCode || ""}
                onChange={(e) =>
                  handleChange("empCode", e.target.value)
                }
              />

            </div>


            <div className="form-group">

              <label>Position</label>

              <input
                type="text"
                placeholder="Enter employee position"
                value={data.empPosition || ""}
                onChange={(e) =>
                  handleChange("empPosition", e.target.value)
                }
              />

            </div>


            <div className="form-group">

              <label>Department</label>

              <input
                type="text"
                placeholder="Enter department"
                value={data.empDepartment || ""}
                onChange={(e) =>
                  handleChange("empDepartment", e.target.value)
                }
              />

            </div>

          </div>

        </div>


        {/* ================= CONTACT INFORMATION ================= */}

        <div className="form-section">

          <div className="section-title">

            <h2>Contact Information</h2>

            <p>
              Enter employee contact details
            </p>

          </div>


          <div className="form-grid">

            <div className="form-group">

              <label>Contact</label>

              <input
                type="text"
                placeholder="Enter contact number"
                value={data.empContact || ""}
                onChange={(e) =>
                  handleChange("empContact", e.target.value)
                }
              />

            </div>


            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter email address"
                value={data.empEmail || ""}
                onChange={(e) =>
                  handleChange("empEmail", e.target.value)
                }
              />

            </div>


            <div className="form-group">

              <label>Date of Birth</label>

              <input
                type="date"
                value={
                  data.empDateOfBirth
                    ? data.empDateOfBirth.substring(0, 10)
                    : ""
                }
                onChange={(e) =>
                  handleChange("empDateOfBirth", e.target.value)
                }
              />

            </div>


            <div className="form-group">

              <label>Per Hour Charge</label>

              <input
                type="number"
                placeholder="Enter per hour charge"
                value={data.empPerHourCharge || ""}
                onChange={(e) =>
                  handleChange("empPerHourCharge", e.target.value)
                }
              />

            </div>

          </div>

        </div>


        {/* ================= ADDITIONAL INFORMATION ================= */}

        <div className="form-section">

          <div className="section-title">

            <h2>Additional Information</h2>

            <p>
              Enter employee profile and management details
            </p>

          </div>


          <div className="form-grid">

            <div className="form-group">

              <label>Manager</label>

              <select
                value={
                  data.empManagerId === true ||
                  data.empManagerId === 1 ||
                  data.empManagerId === "1"
                    ? "1"
                    : data.empManagerId === false ||
                      data.empManagerId === 0 ||
                      data.empManagerId === "0"
                    ? "0"
                    : ""
                }
                onChange={(e) =>
                  handleChange(
                    "empManagerId",
                    Number(e.target.value)
                  )
                }
              >

                <option value="">
                  Select Manager Status
                </option>

                <option value="1">
                  Yes
                </option>

                <option value="0">
                  No
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>Proof Name</label>

              <input
                type="text"
                placeholder="Enter proof name"
                value={data.empProofName || ""}
                onChange={(e) =>
                  handleChange("empProofName", e.target.value)
                }
              />

            </div>


            <div className="form-group full-width">

              <label>Git Profile</label>

              <input
                type="text"
                placeholder="Enter Git profile URL"
                value={data.empGitLink || ""}
                onChange={(e) =>
                  handleChange("empGitLink", e.target.value)
                }
              />

            </div>

          </div>

        </div>


        {/* ================= DOCUMENTS ================= */}

        <div className="form-section">

          <div className="section-title">

            <h2>Documents & Images</h2>

            <p>
              Enter employee image information
            </p>

          </div>


          <div className="form-grid">

            <div className="form-group">

              <label>Profile Image</label>

              <input
                type="text"
                placeholder="Enter profile image"
                value={data.empProfileImage || ""}
                onChange={(e) =>
                  handleChange(
                    "empProfileImage",
                    e.target.value
                  )
                }
              />

            </div>


            <div className="form-group">

              <label>Proof Image</label>

              <input
                type="text"
                placeholder="Enter proof image"
                value={data.empProofImage || ""}
                onChange={(e) =>
                  handleChange(
                    "empProofImage",
                    e.target.value
                  )
                }
              />

            </div>

          </div>

        </div>


        {/* ================= BUTTONS ================= */}

        <div className="form-actions">

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/EmployeeList")}
          >
            Cancel
          </button>


          <button
            type="button"
            className="save-btn"
            onClick={handleSubmit}
          >

            {isEdit
              ? "Update Employee"
              : "+ Add Employee"}

          </button>

        </div>

      </div>

    </div>
  );
}