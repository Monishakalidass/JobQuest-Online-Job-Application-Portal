import React from "react";
import Heading from "../../common/Heading";
import "../../../assets/css/hero.css"
import Footer from "../../common/footer/Footer";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import logo1 from "../../../assets/images/logo1.png"
const Hero = () => {

  const navigate=useNavigate();
  const handlenavjob=()=>
  {
    navigate("/jobpage")
  }
  const handleherohome=()=>
  {
    navigate("/home")
  }
  const handleabout=()=>
  {
    navigate("/about")
  }
  const handlehelp=()=>
  {
    navigate("/help")
  }
  const handleuser=()=> 
  {
    navigate("/userprofile  ")
  }
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
  return (
    <>
   <section className='heronav'>
    <div className='container'>
        <div className="hero-navbar">
        <img src={logo1} alt="Avatar" style={{height:"8vh",width:"4%",borderRadius:'120px',position:'absolute',marginTop:'7px',marginLeft:'10px'}} ></img>
        <p style={{color:'white',position:'absolute',marginLeft:'88px',marginTop:'23px'}}>JOB QUEST</p>

            <div className="hero-top">
                <h2 onClick={handleherohome}>Home</h2>
            </div>
            <div className="hero-top1">
                <h2 onClick={handleabout}>About</h2>
            </div>
            <div className="hero-top2">
                <h2 onClick={handlehelp}>Contact</h2>
            </div>
            <div className="buticon1" onClick={handleuser}>
            <IoPersonCircle />
            </div>
            <div className="buticon" onClick={handleLogout}>
            <IoIosLogOut /> {/* <LogoutOutlined /> */}
            </div>
        </div>
        <div className="toptxt">
        <Heading title='Search Your Next Job' subtitle='Your Dream Job Waiting.' />
        </div>
          <button className='btn1' onClick={handlenavjob}>
            Explore Jobs
          </button>
    </div>
</section>
<Footer/>

    </>
  )
}

export default Hero;
