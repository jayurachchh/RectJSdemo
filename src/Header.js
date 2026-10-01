import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          Employee <span>Portal</span>
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/EmployeeList" className="nav-link">
            Employees
          </Link>
          
          <Link to="/ProductList" className="nav-link">
            Product
          </Link>
        </nav>

      </div>
    </header>
  );
}