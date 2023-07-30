import React from "react";
import "./Mysidebar.css";
import { Route, Routes, Link } from "react-router-dom";
import Product from "../Product/Product";
import Blog from "../Blog/Blog";
import User from "../User/User";
import InviationList from "../InviationList/InviationList";

function Mysidebar() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            {/* partie fixe (les liens de navigations ) */}
            <div
              class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
              style={{ width: "280px;", height: "100vh" }}
            >
              <a
                href="/"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-4">My App</span>
              </a>
              <hr />
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <Link  class="nav-link active" to="/products"> PRODUCTS </Link>
                </li>
                <li>
                  <a href="#" class="nav-link text-white"></a>
                </li>
                <li>
                 
                  <Link  class="nav-link text-white" to="/users"> USERS </Link>
                </li>
                <li>
                 
                  <Link  class="nav-link text-white" to="/blogs"> BLOGS </Link>
                </li>
                <li>
                  <a href="#" class="nav-link text-white">
                    TODOS
                  </a>
                </li>
                <li>
                    <Link  class="nav-link text-white" to="/friends"> friends </Link>
                </li>
              </ul>
              <hr />
              <div class="dropdown">
                <a
                  href="#"
                  class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a class="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-9 bg-danger">
            {/* dynamic content */}
            <Routes>
                    <Route path="/products" element={<Product />} />
                    <Route path="/users" element={<User />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/friends" element={<InviationList />} />
            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Mysidebar;
