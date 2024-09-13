import '../assets/css/userprofile.css'
import Footer from './common/footer/Footer'
import logo from '../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import logo1 from '../assets/images/logo1.png'
import '../assets/css/jobpage.css'
const userprofile = () => {

  const navigate=useNavigate();
  const handlehome = () => {
    navigate("/home");
  };

  const handleback=()=>{
     navigate('/home')
  }
  const handleuser = () => {
    navigate("/userprofile");
  };
  const handleuserhome = () => {
    navigate("/home");
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
        <div className='profileborder'>

        <div className="profile-container">
        <div className="profile-header">
          <h2 className='userp'>User Profile</h2>
        </div>
        <div className="profile-content">
          <div className="profile-picture">
            <img src={logo} alt="User" />
          </div>
          <div className="profile-details">
            <h3> Monisha Kalidass</h3>
            <p>Email: monisha@gmail.com</p>
            <p>Location: Singanallur,Coimbatore</p>
            <p>Applied Job: Software Engineering</p>
            <p>Status: In Process</p>
            <p>Age: 20</p>
          </div>
          <div>
            <button className='backuser' onClick={handleuserhome}>GO TO HOME</button>
          </div>
        </div>
      </div>
        </div>
      <Footer/>
        </>
      )
    }
    
    export default userprofile

    