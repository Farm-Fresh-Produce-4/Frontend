import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fLoginRequest } from "../../actions";
import "../css/main.css";
import "../css/util.css";

const Flogin = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { register, errors, reset } = useForm();
  console.log(errors);

  const handleSubmit = event => {
    event.preventDefault();
    props.fLoginRequest(user);
    props.history.push("/fhome");
  };

  const handleChanges = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
    reset();
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title p-b-34">Farmer Login</span>

            <div
              className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
              data-validate="Type user name"
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="input100"
                ref={register({ required: true })}
                value={user.username}
                onChange={handleChanges}
              />
              <span className="focus-input100"></span>
            </div>
            <div
              className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
              data-validate="Type password"
            >
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input100"
                ref={register({ required: true })}
                value={user.password}
                onChange={handleChanges}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                Sign in
              </button>
            </div>

            <div className="w-full text-center p-t-27 p-b-239">
              <span className="txt1"></span>

              <a href="#" className="txt2"></a>
            </div>

            <div className="w-full text-center">
              <Link to="/fregister" className="txt3">
                Sign Up
              </Link>
            </div>
          </form>

          <img
            src={require("../img/farmland2.jpg")}
            className="login100-more"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fLoginRequest })(Flogin);

/* Old login form */

// <div>
//   <h2>Sign in to your farm</h2>
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       placeholder="Username"
//       name="username"
//       ref={register({ required: true })}
//       value={user.username}
//       onChange={handleChanges}
//     />
//     <br />
//     <input
//       type="password"
//       placeholder="Password"
//       name="password"
//       ref={register({ required: true })}
//       value={user.password}
//       onChange={handleChanges}
//     />

//     <input type="submit" value="Sign In" />
//   </form>
//   <p>Don't have an account?</p>
//   <Link to="/fregister">Create One </Link>
// </div>
