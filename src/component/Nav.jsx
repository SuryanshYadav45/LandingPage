import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import '../styles/nav.css'
import logo from "../assests/logo.png"

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-expand-md navbar-dark  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="123px" height="30px"/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto  ">
              <li class="nav-item">
                <a class="nav-link anchor active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link anchor active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link anchor active" aria-current="page" href="#">
                  Projects
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Service1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Service2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Service3
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Service4
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link anchor active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link anchor active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <FontAwesomeIcon className="nav-link search" icon={faSearch} />
              </li>
            </ul>
            <div class="ms-auto divIcon">
              <a href="/" className="social"><FontAwesomeIcon className="socialicon" icon={faFacebookF} /></a>
              <a href="/" className="social"><FontAwesomeIcon className="socialicon" icon={faTwitter} /></a>
              <a href="/" className="social"><FontAwesomeIcon className="socialicon" icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
