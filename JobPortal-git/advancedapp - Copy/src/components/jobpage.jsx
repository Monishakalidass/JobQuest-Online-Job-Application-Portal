import { useState } from 'react';
import '../assets/css/jobpage.css';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import Footer from './common/footer/Footer';
import { IoPersonCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import logo1 from '../assets/images/logo1.png';

const jobPage= () => {
  // const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(null); // State to track current filter

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Add further logic here, such as sending the search query to the server or updating state
  };

  const navigate = useNavigate();

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

  const handleform = () => {
    navigate("/jobform");
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

  // Filter handlers
  const handleFilterPremium = () => {
    setFilter('premium');
  };

  const handleFilterFree = () => {
    setFilter('free');
  };

  // Jobs data with premium/free status
  const jobs = [
    { title: "Software Engineer", company: "Zoho", location: "Building No. 20, 7th Floor,Devarabeesanahalli, Outer Ring Road,Bangalore - 560103, Karnataka", description: "We are looking for a talented software engineer to join our team.", type: "premium" },
    { title: "Web Developer", company: "TCS", location: "sholinganallur,chennai", description: "Join our team as a web developer and work on exciting projects.", type: "free" },
    { title: "Frontend Developer", company: "Tech Solutions Ltd.", location: "Sydney, Australia", description: "Join our team as a web developer and work on exciting projects.", type: "premium" },
    { title: "Backend Developer", company: "CTS", location: "sholinganallur,chennai", description: "Join our team as a web developer and work on exciting projects.", type: "free" },
    { title: "Software Developer", company: "CTS", location: "sirucheri,chennai", description: "Join our team as a web developer and work on exciting projects.", type: "free" },
    { title: "Web Developer", company: "Keal", location: "Whitefield Main Road,Bangalore - 560066, Karnataka", description: "Join our team as a web developer and work on exciting projects.", type: "premium" },
    { title: "Web Developer", company: "CodingMart", location: "Codingmart Technologies Pvt. Ltd. Flat No. 301, Sai Teja Residency,Road No. 10, Jubilee Hills,Hyderabad - 500033, Telangana, India", description: "Join our team as a web developer and work on exciting projects.", type: "free" },
    { title: "Data Scientist", company: "IBM", location: "Whitefield Main Road,Bangalore - 560066, Karnataka", description: "Join our team as a web developer and work on exciting projects.", type: "premium" },
    { title: "Devops Developer", company: "COOPER", location: "Hi-Tech City, Madhapur,Hyderabad - 500081", description: "Join our team as a web developer and work on exciting projects.", type: "free" },
    { title: "Data Analyst", company: "TURING", location: "Bangalore", description: "Join our team as a web developer and work on exciting projects.", type: "free" },
    { title: "Data Analyst", company: "NI instruments", location: "1234 Tech Park Road,Cyber City,Madhapur,Hyderabad - 500081,", description: "Join our team as a web developer and work on exciting projects.", type: "premium" },
    { title: "Full Stack Developer", company: "NI instruments", location: "1234 Tech Park Road,Cyber City,Madhapur,Hyderabad - 500081,", description: "Join our team as a web developer and work on exciting projects.", type: "premium" },
    // Add more job data
  ];

  // Apply filtering if filter is set
  const filteredJobs = filter ? jobs.filter(job => job.type === filter) : jobs;

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
      <div className='profileborder1'>
        <div className="filter-buttons">
          <button className="filter-button" onClick={handleFilterPremium}>Premium</button>
          <button className="filter-button1" onClick={handleFilterFree}>Free</button>
        </div>
        <div className="cards-container">
          {/* Map through filtered jobs */}
          {filteredJobs.map((job, index) => (
            <div className="work-card" key={index}>
              <h2 className="work-title">{job.title}</h2>
              <h3 className="work-company">Company:{job.company}</h3>
              <p className="work-location">Location: {job.location}</p>
              <p className="work-description">{job.description}</p>
              <button className="apply-button" onClick={handleform}>Apply</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default jobPage;
