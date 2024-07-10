import React from "react";
import "./footer.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>for business</h4>
            <a href="/employee">
              <p>employee</p>
            </a>
            <a href="/healthplan">
              <p>health plan</p>
            </a>
            <a href="/individual">
              <p>indivitual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>resourses</h4>
            <a href="/resource">
              <p>resource center</p>
            </a>
            <a href="/resource">
              <p>testimonal</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>partners</h4>
            <a href="/employer">
              <p>swing tech</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>company</h4>
            <a href="/About">
              <p>about</p>
            </a>
            <a href="/press">
              <p>press</p>
            </a>
            <a href="/career">
              <p>career</p>
            </a>
            <a href="/contact">
              <p>contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>coming soon</h4>
            <div className="socialmedia"></div>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="sb_footer-below">
        <div className="sb_footer-copyright">
            <p>
                @{new Date().getFullYear()} CodeInn.All right reserved.
            </p>
        </div>
        <div className="sb_footer-below-links">
        <a href="/terms"><div><p>Terms&conditions</p></div></a>
        <a href="/privacy"><div><p>privacy</p></div></a>
        <a href="/security"><div><p>security</p></div></a>
        <a href="/cookies"><div><p>cookies</p></div></a>
        </div>
      </div>
    </div>
  );
};
export default footer;
