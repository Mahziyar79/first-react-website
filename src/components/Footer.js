import logo from "../assets/images/white_logo.png";
import { FaFacebookF,FaInstagram,FaYoutube,FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <h2>
          Join the adventure Newsletter to receive our best vacation deals{" "}
        </h2>
        <h4>You can Unsubscribe any time</h4>
        <div className="footer-form">
          <form>
            <input type="text" placeholder="Your Email..." />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="about-footer">
          <h3>About Us</h3>
          <ul>
            <li>How it Works</li>
            <li>Careers</li>
            <li>Testimonials</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="contact-footer">
          <h3>Contact Us</h3>
          <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Destinations</li>
            <li>Sponsorship</li>
          </ul>
        </div>
        <div className="video-footer">
          <h3>Videos</h3>
          <ul>
            <li>Submit Video</li>
            <li>Agency</li>
            <li>Influencer</li>
            <li>Ambassadors</li>
          </ul>
        </div>
        <div className="social-footer">
          <h3>Social Media</h3>
          <ul>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="footer-detail">
        <div className="footer-detail-img">
          <img alt="logo-footer" src={logo} />
        </div>
        <div className="social-footer">
          <ul>
            <li>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
