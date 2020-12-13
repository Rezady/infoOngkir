import React from "react";
import { NavLink } from "react-router-dom";

function NavbarItem() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-4 px-5 mx-auto">
        <div class="container">
          <NavLink class="navbar-brand" to="/">
            InfoOngkir
          </NavLink>

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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/" class="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/form" class="nav-link" aria-current="page">
                  Form
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarItem;
