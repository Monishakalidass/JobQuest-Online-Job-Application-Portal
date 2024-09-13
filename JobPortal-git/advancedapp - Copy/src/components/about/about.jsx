import Back from "../common/Back"
import img from "../images/about.jpg"
import '../../assets/css/about.css'
import Heading from "../common/Heading";
import { useNavigate } from "react-router-dom";
import Footer from "../common/footer/Footer";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import logo1 from '../../assets/images/logo1.png'
import '../../assets/css/jobpage.css'

const About = () => {
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
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to our jobQuest! We've streamlined the process to make it easier than ever for talented individuals like you to join our team. Whether you're a seasoned professional or just starting your career journey, our jobQuest is designed to help you find the perfect opportunity. </p>
            <p>Explore our diverse range of open positions, submit your application with ease,and employees are empowered to grow and succeed. Join us on this exciting journey and take the next step toward building a rewarding career with us!</p>
            <button className='btn2'>More About Us</button>
            <button className='btn10' onClick={handleback}>Back</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt=''style={{width:'500px',marginRight:'20px'}} />
          </div>
        </div>
       
      </section>
      <Footer/>
    </>
  )
}

export default About
