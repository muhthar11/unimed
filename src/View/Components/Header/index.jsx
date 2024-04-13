import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"; // Make sure the path is correct
import logo from "../../Assets/Images/Mask Group 269.png";
import instagram from "../../Assets/Images/instagram.png";
import linkedin from "../../Assets/Images/linkedin.png";
import x from "../../Assets/Images/x.png";
import search from "../../Assets/Images/search.png";
import searchIcon from "../../Assets/Images/Icon feather-search.png";
import closeIcon from "../../Assets/Images/closeIcon.png";

function Header() {
  const [searchTerm, setSearchTerm] = React.useState(false);
  const changeStatus = () => { 
    console.log('test');
    setSearchTerm(!searchTerm);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header-row">
      {!searchTerm ? (
        <div className="container-fluid header-section">
          <div className="col-3 header-left-side">
            <a className="navbar-brand header-left" href="#">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse header-right" id="navbarNav">
            <div className="col-11">
              <div className="header-right-side">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        className="social-icon"
                        src={linkedin}
                        alt="LinkedIn"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img className="social-icon" src={x} alt="X" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        className="social-icon"
                        src={instagram}
                        alt="Instagram"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <button  className="contact-button btn">Contact us</button>
                  </li>
                </ul>
              </div>
              <div className="header-right-side">
                <ul className="navbar-nav ms-auto header-right-side">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle text-style"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Divisions
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    ></ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-style" aria-current="page" href="#">
                      Partners
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-style" href="#">
                      products
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-style " href="#">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-style" href="#">
                      MEDIA
                    </a>
                  </li>
                  <li class="nav-item">
                    <a className="navbar-brand header-right" href="#">
                      <img onClick={()=>changeStatus()} src={search} alt="search" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="searchBox">
          <img src={searchIcon} alt="searchIcon" />
          <input type="text" placeholder="Search" />
          <button className="contact-button2 btn">Search</button>
          <div className="close">
            <img onClick={()=>changeStatus()} className="closeIcon" src={closeIcon} alt="closeIcon" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
