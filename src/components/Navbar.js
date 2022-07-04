import React from 'react'
import { Link } from 'react-router-dom'
import onlineTeaching from './images/onlineTeaching.png'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar__ sticky">
        <div class="container-fluid">
          <img src={onlineTeaching} className="teachImg" alt="..." />
          <Link class="text-white navbar-brand" to="/">WebTeach</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" collapse  navbar-collapse" id="navbarSupportedContent">
            <ul class=" navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link class="text-white nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="text-white nav-link active" aria-current="page" to="/services">Services</Link>
              </li>
              <li class="nav-item">
                <Link class="text-white nav-link active" aria-current="page" to="/courses">Courses</Link>
              </li>

              <li class="nav-item">
                <Link class="text-white nav-link active" aria-current="page" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
