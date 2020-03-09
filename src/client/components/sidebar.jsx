import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { navbarActive } = this.props;
    return (
      <nav id="sidebar" className={navbarActive}>
        <h1>
          <Link to="/" className="logo">
            N.
          </Link>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <Link to="/">
              <span className="fa fa-home"></span> Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="fa fa-sticky-note"></span> History
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="fa fa-cogs"></span> Analytics
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="fa fa-user"></span> About
            </Link>
          </li>
        </ul>

        <div className="footer">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | TUKL-NUST
          </p>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
