import React from "react";
function Navbar(){

    return(
<div className="nav-shadow-box bg-white" style={{ height: "10vh" }}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a href="index.html" className="logo">
              <img
                src="logo.jpg"
                className="logo"
                height="20px"
                alt="logoImg"
              />
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
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul
                className="navbar-nav me-auto "
                style={{ paddingLeft: "35%", fontFamily: "Jost" }}
              >
                <li className="nav-item "></li>
                <li>
                  <a
                    className="nav-link scrollto active px-4 "
                    href="index.html"
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item "></li>
                <li>
                  <a className="nav-link scrollto   px-4 " href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item"></li>
                <li>
                  <a className="nav-link scrollto px-4" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="d-flex ">
                <div className="box-nav">
                  <form name="search">
                    <input
                      type="text"
                      className="input"
                      name="txt"
                      onmouseout="this.value = ''; this.blur();"
                    />
                    <i
                      style={{
                        fontSize: "large",
                        marginTop: "-6px",
                        marginRight: 4,
                      }}
                      className="bi bi-search"
                    />
                  </form>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="gap-2">
                  <a href="cart.html ">
                    {" "}
                    <i
                      className="bi bi-cart3"
                      style={{ color: "brown", fontSize: "x-large" }}
                    />
                  </a>
                  <i
                    className="bi bi-person"
                    style={{ color: "brown", fontSize: "x-large" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
        
    );
}
export default Navbar;