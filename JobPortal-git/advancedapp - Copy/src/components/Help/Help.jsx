import React, { useState } from 'react';
import '../../assets/css/Help.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../common/footer/Footer';
import { IoIosLogOut } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import logo1 from '../../assets/images/logo1.png'
import '../../assets/css/jobpage.css'

const HelpPage = () => {
    const navigate=useNavigate();

    const handlehome = () => {
      navigate("/home");
    };

    const handleuser = () => {
      navigate("/userprofile");
    };
  
    const handleAbout = () => {
      navigate("/about");
    };
  
    const handleContact = () => {
      navigate("/help");
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log("Search query:", searchQuery);
      // Add further logic here, such as sending the search query to the server or updating state
    };
  
    const handleLogout = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log me out",
        customClass: {
          popup: "custom-size",
          title: "swal2-title",
          content: "swal2-content",
          confirmButton: "swal2-confirm",
          cancelButton: "swal2-cancel"
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // If user confirms, display success message
          Swal.fire({
            title: "Logged Out!",
            text: "You have been successfully logged out.",
            icon: "success",
            customClass: {
              title: "swal2-title",
              content: "swal2-content",
              confirmButton: "swal2-confirm"
            }
          }).then(() => {
            // After displaying the success message, navigate to the login page
            navigate("/login");
          });
        }
      });
    };

 const handlesaveupdate=()=>{
    navigate("/home")
 }
 const handleback=()=>{
    navigate("/home")
 }
  return (
    <>

<nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <img src={logo1} alt="Avatar" style={{ height: "8vh", width: "4%", borderRadius: '120px', position: 'absolute', marginTop: '-14px' }} ></img>
            <p style={{ color: 'white', position: 'absolute', marginLeft: '80px', marginTop: '10px' }}>JOB QUEST</p>
            <a href="#" className="navbar-link" onClick={handlehome}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" onClick={handleAbout} style={{ position: 'absolute', marginLeft: '30px' }}>About</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link" onClick={handleContact} style={{ position: 'absolute', marginLeft: '110px' }} >Contact</a>
          </li>
        </ul>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <div className="logouticon1" onClick={handleuser}>
            <IoPersonCircle />
          </div>
          <div className='logouticon' onClick={handleLogout}>
            <IoIosLogOut />
          </div>
        </form>
      </nav>
    <div className='helpwhole'>

    <div className="support-page">
      <h2 className="page-title">Contact Customer Support</h2>
      <p>If you have any questions or need assistance, please don't hesitate to contact our customer support team. We are here to help you.</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: moni@gmail.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name"  onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          </div>
          <button className="submit-button" type="submit" onClick={handlesaveupdate}>Submit</button>
          <button className="cancel-button" type="submit" onClick={handleback}>Cancel</button>
        </form>
      </div>
    </div>

    </div>
    <Footer/>
    </>
    
  );
};

export default HelpPage;
