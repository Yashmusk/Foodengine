import "./Register.css";
import Button from "@mui/material/Button";
const Register = () => {
  return (
    <div className="container">
      <div class="box">
        <span className="text1">Register</span>
        <div>
          <label className="form-label">Name</label>

          <input type="text" className="name1" placeholder="Name..." />
        </div>
        <br />
        <div>
          <label className="form-label">Email Address</label>

          <input type="text" className="name1" placeholder="Email..." />
        </div>
        <br />
        <div>
          <label className="form-label">Password</label>

          <input
            type="text"
            className="name1"
            placeholder="Password must be 8 digit long containing atleast 1 number,letter and a special character..."
          />
        </div>
        <br />
        <Button
          variant="contained"
          href="#contained-buttons"
          sx={{ display: "flex", padding: 1 }}
        >
          REGISTER
        </Button>
      </div>
    </div>
  );
};
export default Register;
