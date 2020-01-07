import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { uRegisterRequest } from "../actions";

const Register = props => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { register, errors, reset } = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    props.uRegisterRequest(formData);
    reset();
  };
  console.log(errors);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Create new account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register}
          onChange={handleChange}
        />
        <br />
        {/* <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          ref={register}
          onChange={handleChange}
        />
        <br /> */}
        {/* <input
          type="tel"
          placeholder="Phone number"
          name="Phone"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
        {errors.Phone && <p>Must enter valid phone number!</p>}
        <br /> */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
          onChange={handleChange}
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
      <Link to="/Login">Sign In </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token,
    username: state.username,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { uRegisterRequest })(Register);
