import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">EMPLOYEE MANAGEMENT SYSTEM</span>

          <h1>
            Manage Your <span>Employees</span>
            <br />
            Smarter &amp; Faster
          </h1>

          <p>
            A simple and efficient employee management portal to manage
            employee information, track records, and keep your organization
            organized.
          </p>

          <div className="hero-buttons">
            <Link to="/EmployeeList" className="primary-button">
              View Employees
            </Link>

            <a href="#features" className="secondary-button">
              Explore Features
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="dashboard-preview">
          <div className="preview-header">
            <div>
              <span className="preview-label">Overview</span>
              <h3>Employee Dashboard</h3>
            </div>

            <div className="preview-menu">•••</div>
          </div>

          <div className="preview-cards">
            <div className="preview-card">
              <div className="preview-icon blue">👥</div>
              <div>
                <span>Total Employees</span>
                <strong>128</strong>
              </div>
            </div>

            <div className="preview-card">
              <div className="preview-icon green">✓</div>
              <div>
                <span>Active Employees</span>
                <strong>114</strong>
              </div>
            </div>

            <div className="preview-card">
              <div className="preview-icon orange">◷</div>
              <div>
                <span>On Leave</span>
                <strong>14</strong>
              </div>
            </div>
          </div>

          <div className="activity-box">
            <div className="activity-title">
              <strong>Recent Activity</strong>
              <span>View All</span>
            </div>

            <div className="activity-row">
              <div className="activity-avatar">JD</div>
              <div>
                <strong>John Doe</strong>
                <p>Updated employee profile</p>
              </div>
              <small>2 min</small>
            </div>

            <div className="activity-row">
              <div className="activity-avatar purple">AS</div>
              <div>
                <strong>Alex Smith</strong>
                <p>Joined the organization</p>
              </div>
              <small>1 hr</small>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Everything You Need to Manage Employees</h2>
          <p>
            Keep your employee information organized and accessible from one
            centralized platform.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon blue-bg">👥</div>
            <h3>Employee Management</h3>
            <p>
              Manage employee profiles, contact information, positions,
              departments, and other important records.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon green-bg">📊</div>
            <h3>Employee Overview</h3>
            <p>
              Get a clear overview of your workforce and quickly access
              important employee information.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon orange-bg">🔒</div>
            <h3>Secure Information</h3>
            <p>
              Keep employee information organized with a structured and
              reliable management system.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon purple-bg">⚡</div>
            <h3>Quick Access</h3>
            <p>
              Find employee records quickly and navigate between different
              sections with ease.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <span>READY TO GET STARTED?</span>
          <h2>Manage Your Employee Records Easily</h2>
          <p>
            Access employee information and keep your workforce organized
            from one place.
          </p>
        </div>

        <Link to="/EmployeeList" className="cta-button">
          Explore Employees →
        </Link>
      </section>

    </div>
  );
}