import { useState } from "react";
import "./Login.css";
import Typography from "@mui/material/Typography";
import validator from "validator";
const Login = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const handleSignIn = () => {
    console.log("hi");
    if (!validator.isEmail(email)) {
      alert("enter valid email address");
    }
    if (pass.length < 8) {
      alert("Password length is short");
    } else if (pass.length > 50) {
      alert("Password length is too long");
    } else if (pass.search(/\d/) === -1) {
      alert("Password must contain a number");
    } else if (pass.search(/[a-zA-Z]/) === -1) {
      alert("Password must contain a letter");
    } else if (pass.search(/[A-Z]/) === -1) {
      alert("Password must contain an uppercase letter");
    } else if (pass.search(/[!@#$%^&*]/) === -1) {
      alert("Password must contain a special character");
    }
  };

  return (
    <div className="container">
      <div className="centered-box1">
        <img
          className="img1"
          src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?t=st=1715806012~exp=1715809612~hmac=fd59cdf925ae75de866c26523a6f34c4d3f156cff694d4361a5b432ffec5f778&w=1480"
          alt="Exploding Burger"
        />
      </div>
      <div className="centered-box2">
        <div className="form">
          <Typography sx={{ color: "white", padding: 4 }}>LOGIN</Typography>
          <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="exampleFormControlInput2" className="form-label1">
              Password
            </label>
            <br />
            <input
              type="password"
              className="form-control1"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                console.log(e.target.value);
              }}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$"
              required
            />
          </div>
          <div className="btn1">
            <button className="signinbtn" onClick={handleSignIn}>
              Sign in
            </button>
          </div>
          <div className="text">
            <Typography sx={{ color: "white" }}>
              Don't have an account yet!
            </Typography>
            <Typography sx={{ color: "white", cursor: "pointer", padding: 2 }}>
              Register for free
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
