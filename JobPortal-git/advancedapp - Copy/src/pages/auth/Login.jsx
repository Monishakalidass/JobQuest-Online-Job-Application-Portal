import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import '../../assets/css/Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    navigate("/home");
  }

  const handlesignin = () => {
    navigate("/register");
  }

  const handleforgotpassword = () => {
    navigate("/forgotpassword");
  }

  const validateEmail = (email) => {
    // Regular expression to validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    // Basic validation for password length
    return password.length >= 6;
  }

  return (
    <div className="logincontainer">
      <div className='wrapper'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder='EmailAddress'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdMail className="icon"/>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon"/>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#" onClick={handleforgotpassword}>Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={handlesignin}>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
