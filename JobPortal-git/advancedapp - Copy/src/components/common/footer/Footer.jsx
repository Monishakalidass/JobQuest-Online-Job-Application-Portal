import React from "react";
import { footer } from "../../data/Data";
import "../../../assets/css/footer.css";
import { useNavigate } from "react-router-dom";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/help");
  };

  const handleFooter = () => {
    navigate("/termsandcondition");
  };

  const handleFAQ = () => {
    navigate("/faq");
  };

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you grow your career and reach your goals.</p>
            </div>
            <button className="btn5" onClick={handleContact}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <h2>Need Assistance?</h2>
              <p>Receive updates, hot deals, tutorials, and discounts sent straight to your inbox every month.</p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button className="btn9">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="social">
          </div>
            <div className="footericon">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
            </div>
        </div>
        
        <div className="Terms" onClick={handleFooter}>
          Terms and Conditions
        </div>
        <div className="FAQ" onClick={handleFAQ}>
          FAQ
        </div>
      </footer>
      
      <div className="legal">
        <span>© 2024 Portal. Designed By JOBQUEST.</span>
      </div>
    </>
  );
};

export default Footer;
