import Navbar from "./navbar";

function HomePage() {
  return (
    <>
      <Navbar/>
      {/* --------------home pic---------------- */}
      <section id="one" className="row">
        <div className="intro"></div>
      </section>
      {/* --------------catogeries---------------- */}
      <h2 style={{ textAlign: "center", marginTop: "4%" }}>Menu</h2>
      <div
        className="container d-flex flex-wrap gap-5 w-100 mt-5"
        style={{ justifyContent: "space-evenly" }}
      >
        <div className="card card-menu ">
          <a href="Catogaries.html ">
            {" "}
            <img src="pizamenu.jpg " className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">PIZZA</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="burgermenu.jpeg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">BURGER</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="bubbletea.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">BUBBLE TEA</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="wafflesmenu.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">WAFFLES</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="milkshakes.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">MILKSHAKES</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="sundeasmenu.jpeg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">SUNDEAS</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="cookie.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">COOKIE DOUGH</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="wrapsmenu.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">Wraps</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="icecreammenu.jpeg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">ICE CREAM</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="classicmenu.jpeg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">CLASSIC GELATO</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="kidsmenu.jpeg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">KIDS GELATO</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="savermenu.jpeg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">SAVER MENU</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="drinks.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">DRINKS</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="crisps.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text"> Crisps</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="dipsauce.svg" className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text"> SAUCE DIPS</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
        <div className="card card-menu">
          <a href="Catogaries.html ">
            {" "}
            <img src="donutsmenu.jpeg " className="card-img-top" alt="..." />
          </a>
          <div className="card-body " style={{ textAlign: "center" }}>
            <h5 className="card-text">DONUTS</h5>
            <p className="card-text">14 items</p>
          </div>
        </div>
      </div>
      {/* why choose us ------------ */}
      <div className="row d-flex alig-items-center">
        <h1
          className="text-dark mt-5 "
          data-aos="fade-up"
          style={{ textAlign: "center" }}
        >
          Why Choose Us
        </h1>
        <div className="col-lg-6 mt-3">
          <div className="row my-3 d-flex justify-content-around">
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img alt="hahaAlt" src="Service.png" className="img-fluid" />
            </div>
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img alt="hahaAlt" src="Service2.png" className="img-fluid" />
            </div>
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img alt="hahaAlt" src="Service3.png" className="img-fluid" />
            </div>
            <div
              className="col-lg-5 col-md-5 my-2 box text-center"
              data-aos="fade-up"
            >
              <img alt="hahaAlt" src="Service4.png" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5" data-aos="fade-up">
          <img alt="hahaAlt" src="whychoose.png" className="img-fluid" />
        </div>
        <div
          className="col-lg-8 text-center offset-lg-2"
          data-aos="fade-up"
        ></div>
      </div>
      {/* Recent-posts Blog - Home Page */}
      <section
        id="recent-posts"
        className="recent-posts"
        style={{ marginTop: "5%" }}
      >
        {/*  Section Title */}
        <div className="container section-title " data-aos="fade-up">
          <h2 style={{ textAlign: "left" }}>Blogs</h2>
        </div>
        {/* End Section Title */}
        <div className="container  mt-4">
          <div className="row gy-4">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <article className="text1">
                <div className="post-img">
                  <img src="Blog1.png" alt="" className="img-fluid" />
                  <p>
                    Great food and reasonable prices. recommended to best time
                    with Great customer service Great food and reasonable
                    prices. recommended to best time with Great customer service
                    Great food and reasonable prices. recommended to best time
                    with Great customer service.....{" "}
                  </p>
                  <p style={{ textAlign: "end" }}>Read More &gt;&gt;</p>
                </div>
              </article>
            </div>
            {/* End post list item */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <article className="text1">
                <div className="post-img">
                  <img src="blog3.png" alt="" className="img-fluid" />
                  <p>
                    Great food and reasonable prices. recommended to best time
                    with Great customer service Great food and reasonable
                    prices. recommended to best time with Great customer service
                    Great food and reasonable prices. recommended to best time
                    with Great customer service.....{" "}
                  </p>
                  <p style={{ textAlign: "end" }}>Read More &gt;&gt;</p>
                </div>
              </article>
            </div>
            {/* End post list item */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <article className="text1">
                <div className="post-img">
                  <img src="blog2.png" alt="" className="img-fluid" />
                  <p>
                    Great food and reasonable prices. recommended to best time
                    with Great customer service Great food and reasonable
                    prices. recommended to best time with Great customer service
                    Great food and reasonable prices. recommended to best time
                    with Great customer service.....{" "}
                  </p>
                  <p style={{ textAlign: "end" }}>Read More &gt;&gt;</p>
                </div>
              </article>
            </div>
            {/* End post list item */}
          </div>
          {/* End recent posts list */}
        </div>
      </section>
      {/* End Blog Section */}
      <div className="map-card d-flex">
        <div
          className="location text-center"
          style={{
            border: 0,
            width: "100%",
            maxWidth: 600,
            height: 450,
            backgroundColor: "#fff4d9",
            margin: "0 auto",
          }}
        >
          <h2 style={{ marginTop: "10%" }}>Visit Us</h2>
          <div
            className="location-card"
            style={{ width: "80%", height: "70%", margin: "0 auto" }}
          >
            <p style={{ fontWeight: "bold" }}>
              <i className="bi bi-telephone-fill" /> &nbsp;Booking Request
            </p>
            <h3 style={{ color: "#E57C35" }}>+92300000000</h3>
            <p style={{ fontWeight: "bold" }}>
              <i className="bi bi-geo-alt" /> &nbsp;Location
            </p>
            <p>600 N Washington Ave Suite C203, Minneapolis, MN 55401</p>
            <h4>Open Time</h4>
            <p style={{ color: "gray" }}>
              Monday to Friday: 10:00 am - 10:30 pm
            </p>
            <p style={{ color: "gray" }}>
              Saturday to Sunday: 6:00 am - 11:00 pm
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}
        >
          <iframe
            style={{ border: 0, width: "100%", height: 450 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            // frameBorder={0}
            homePageowFullScreen=""
          />
        </div>
      </div>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about ">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>
                  {" "}
                  <img src="logo-removebg-preview (1).png" alt="" />
                </span>
              </a>
              <p>
                Welcome to our Foodelicious, where culinary magic meets
                exceptional dining. Explore a world of flavors, indulge in
                delectable creations, and embark on a gastronomic journey like
                no other. Discover your new food paradise!
              </p>
            </div>
            {/* <div class="col-lg-2 col-6 footer-links">
    <h4>Useful Links</h4>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div> */}
            {/* <div class="col-lg-2 col-6 social-links">
    <h4>Social Links</h4>

     <li> <i class="bi bi-twitter" style="color: lightblue;"></i></li>
     <li>  <i class="bi bi-facebook" style="color: skyblue;"></i></li>
      <li>  <i class="bi bi-instagram" style="color: palevioletred;"></i></li>
        <li>   <i class="bi bi-linkedin"style="color: aqua;"></i></li>
    
  </div> */}
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Get New &amp; Offers</h4>
              <p>Follow the latest articles and resources </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>

  );
}
export default HomePage;
