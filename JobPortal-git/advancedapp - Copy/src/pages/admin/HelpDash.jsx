
import { SidebarDataAdmin } from './SidebarDataAdmin';
import "../../assets/css/AdminDashboard.css"// Import your CSS for styling


const HelpDash = () => {
  
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
                  <th>User ID</th>
                  <th> Name</th>
                  <th>Email</th>
                  <th>Help Message</th>
                  
                </tr>
                <tr>
                  <td>3456</td>
                  <td>Harismita</td>
                  <td>haris@gmail.com</td>
                  <td>I have a issue in applying</td>
                </tr>
              </thead>
              {/* <tbody>
               
                 
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpDash;
