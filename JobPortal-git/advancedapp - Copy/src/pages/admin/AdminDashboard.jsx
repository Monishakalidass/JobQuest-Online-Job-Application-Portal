
import { SidebarDataAdmin } from './SidebarDataAdmin';
import "../../assets/css/AdminDashboard.css"
import { BiLogOutCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { MdPeopleAlt } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { PiUserListFill, PiX } from "react-icons/pi";
import Swal from "sweetalert2";
const AdminDashboard = () => {
  const navigate=useNavigate();
  const handlenotifications=()=>{
    navigate("/helpdash")
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

  const ApplicantsDetails = 200;  
  const JobDetails = 2000; 
  const HelpDetails = 35; 


  return (
    <>
      <div id='overview'>
        <adminHeader/>
        <nav className="sidebardash">
          <ul className="nav-menu">
            {SidebarDataAdmin.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.path} className="nav-link">
                  {item.icon}
                  <span className="nav-text">{item.title}</span>
                </a>
              </li>
            ))}
            
          </ul>
        </nav>
      

            <div className="navadmin" >
            
              <div className="input-box">
          <input type="text" placeholder='Search' required   />
          <div className='prosearch'>

          <IoMdSearch size={30} color='white'/> 
          </div>
          
        </div>
              
              
              <div className='profileicon1'>
              <IoMdNotifications size={40} onClick={handlenotifications}/> 
              </div>
              <div className='profileicon'>
            <BiLogOutCircle size={40} onClick={handleLogout}/>
              </div>
             
            </div>
        <div id='navbarcard'>

          

          <div id='spacetable'>
            <div className="containerdash">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Applicants</h5>
                    <div className='icon1'>

                    <MdPeopleAlt  size={30}/>
                    </div>
                    <p className="carddash-text">{ApplicantsDetails}</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Jobs</h5>
                    <div className='icon1'>

                    <IoIosListBox size={30} />
                    </div>
                    <p className="carddash-text">{JobDetails}</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Help</h5>
                    <div className='icon1'>

                    <PiUserListFill size={30} />
                    </div>
                    <p className="carddash-text">{HelpDetails}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
