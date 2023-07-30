import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Product from "../Product/Product";
import User from "../User/User";
import Blog from "../Blog/Blog";
function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          class="p-3 col-lg-4 text-bg-dark"
          style={{ height: "100vh", maxWidth: "15vw" }}
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-4">Tech Corner</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <Link class="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link class="nav-link text-white" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link class="nav-link text-white" to="/users">
                Users
              </Link>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Customers
              </a>
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
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
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
                <hr class="dropdown-divider" />{" "}
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" mt-5 col-lg-10">
          <Routes>
            <Route path="/products" element={<Product />} />
            <Route path="/users" element={<User />} />
            <Route path="/blogs" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
