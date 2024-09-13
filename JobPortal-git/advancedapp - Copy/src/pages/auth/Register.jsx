import { MdMail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { TbLockCheck } from "react-icons/tb";
import '../../assets/css/Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Perform sign-in action or navigate to another page
    navigate("/home");
  }

  const handleLogin = () => {
    navigate("/login");
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    return password.length >= 6;
  }

  return (
    <div className="logincontainer">
      <div className='wrapper'>
        <form onSubmit={handleSignIn}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder='Email Address'
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
            <FaUserLock className="icon"/>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder='Confirm Password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <TbLockCheck className="icon" />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Sign in</button>
          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={handleLogin}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
