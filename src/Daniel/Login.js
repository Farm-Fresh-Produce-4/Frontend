import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { uLoginRequest } from "../actions";

const Login = props => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const { register, errors, reset } = useForm();

  console.log(errors);

  const handleSubmit = e => {
    e.preventDefault();
    props.uLoginRequest(formData);
    reset();
  };
  console.log(errors);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Sign in to account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="Username"
          ref={register({ required: true })}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          ref={register({ required: true })}
          onChange={handleChange}
        />

        <input type="submit" value="Sign In" />
      </form>
      <p>Don't have an account?</p>
      <Link to="/Register">Create One </Link>
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

export default connect(mapStateToProps, { uLoginRequest })(Login);
