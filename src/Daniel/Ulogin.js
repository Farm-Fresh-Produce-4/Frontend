import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { uLoginRequest } from "../actions";

const Ulogin = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { register, errors, reset } = useForm();
  console.log(errors);

  const handleSubmit = event => {
    event.preventDefault();
    props.uLoginRequest(user);
    props.history.push("/uhome");
  };

  const handleChanges = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
    reset();
  };

  return (
    <div>
      <h2>Sign in to account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register({ required: true })}
          value={user.username}
          onChange={handleChanges}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
          value={user.password}
          onChange={handleChanges}
        />

        <input type="submit" value="Sign In" />
      </form>
      <p>Don't have an account?</p>
      <Link to="/uregister">Create One </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { uLoginRequest })(Ulogin);
