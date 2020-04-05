import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { navbarActive } = this.props;
    return (
      <nav id="sidebar" className={navbarActive}>
        <h1>
          <NavLink to="/" className="logo">
            N.
          </NavLink>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="active">
            <NavLink to="/">
              <span className="fa fa-home"></span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="fa fa-sticky-note"></span> History
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="fa fa-cogs"></span> Analytics
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="fa fa-user"></span> About
            </NavLink>
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
