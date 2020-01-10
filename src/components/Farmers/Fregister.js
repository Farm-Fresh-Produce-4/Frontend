import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fRegisterRequest } from "../../actions";

const Fregister = props => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  });

  const { register, errors, reset } = useForm();

  console.log("checking for new user", newUser);

  const handleSubmit = event => {
    event.preventDefault();
    props.fRegisterRequest(newUser);
    props.history.push("/flogin");
    reset();
  };

  const handleChanges = event => {
    event.preventDefault();
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title p-b-34">
              Sell your produce
            </span>

            <div
              className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
              data-validate="Type user name"
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="input100"
                ref={register}
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
                onChange={handleChanges}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type="submit">
                Sign up
              </button>
            </div>

            <div className="w-full text-center p-t-27 p-b-239">
              <span className="txt1"></span>

              <a href="#" className="txt2"></a>
            </div>

            <div className="w-full text-center">
              <Link to="/flogin" className="txt3">
                Sign In
              </Link>
            </div>
          </form>

          <img
            src={require("../../img/farmland.jpg")}
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

export default connect(mapStateToProps, { fRegisterRequest })(Fregister);

/* Old form /*
/* <div>
      <h2>Create new Farm</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register}
          onChange={handleChanges}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          ref={register}
          onChange={handleChange}
        />
        <br /> 
         <input
          type="tel"
          placeholder="Phone number"
          name="Phone"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
        {errors.Phone && <p>Must enter valid phone number!</p>}
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
          onChange={handleChanges}
        />
        {errors.password && <p> Must have password!</p>}
        <br />
        <p>I have read the Terms and Conditions.</p>
        <input
          type="checkbox"
          placeholder="Terms"
          name="check"
          ref={register({ required: true })}
        />
        {errors.Terms && <p> Must accept terms and Conditions!</p>}
        <br />
        <input type="submit" value="Create Account" />
      </form>
      <p>Have an account?</p>
      <Link to="/flogin">Sign In </Link>
    </div> */
