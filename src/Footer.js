import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">EP</div>

            <div>
              <h3>Employee Portal</h3>
              <p>
                Manage employee information easily and efficiently.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <Link to="/">Home</Link>
            <Link to="/EmployeeList">Employees</Link>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Information</h4>

            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          {/* System */}
          <div className="footer-column">
            <h4>Employee Portal</h4>

            <p>Employee Management</p>
            <p>Secure & Reliable</p>
            <p>Easy to Use</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">

          <p>
            © 2026 <strong>Employee Portal</strong>. All rights reserved.
          </p>

          <p>
            Employee Management System
          </p>

        </div>

      </div>
    </footer>
  );
}