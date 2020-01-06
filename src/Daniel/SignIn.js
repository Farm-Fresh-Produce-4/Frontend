import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const { register, handleSubmit, errors,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      reset()
  }
  console.log(errors);
  
  return (
      <div>
            <h2>Sign in to account</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email Address" name="Email Address" ref={register({required: true})} />
      <br/>
      <input type="password" placeholder="Password" name="Password" ref={register({required: true})} />

      <input type="submit" value= "Sign In" />
    </form>
      <p>Don't have an account?</p>
      <Link to="/Register" >Create One </Link>
      </div>
  );
}