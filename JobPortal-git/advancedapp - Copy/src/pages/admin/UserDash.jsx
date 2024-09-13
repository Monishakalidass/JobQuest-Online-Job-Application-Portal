
import { SidebarDataAdmin } from './SidebarDataAdmin';
import "../../assets/css/AdminDashboard.css" // Import your CSS for styling
import { Link } from 'react-router-dom';

const UserAdminDash = () => {
  
  return (
    <>
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
      <div id='navbarcard'>

        <div id='spacetable'>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Application ID</th>
                  <th>Applicant Name</th>
                  <th>Applicant Email</th>
                  <th>Applicant JobTitle</th>
                  <th> Company</th>
                  <th>Location</th>
                  <th>Amount</th>
                </tr>
                <td>123</td>
                <td>Monisha</td>
                <td>monisha@gmail.com</td>
                <td>Software Engineering</td>
                <td>Zoho</td>
                <td>Salem</td>
                <td>8000</td>
                <td>
                   <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete </button>
                </td>
              </thead>
              <tr>
                <td>6789</td>
                <td>Surya</td>
                <td>surya@gmail.com</td>
                <td>WebDeveloper</td>
                <td>TCS</td>
                <td>Salem</td>
                <td>9000</td>
                <td>
                   <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete </button>
                </td>
                 
              </tr>
              
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAdminDash;
