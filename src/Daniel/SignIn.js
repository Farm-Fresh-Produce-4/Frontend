import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email Address" name="Email Address" ref={register({required: true})} />
      <br/>
      <input type="password" placeholder="Password" name="Password" ref={register({required: true})} />

      <input type="submit" value= "Sign In" />
    </form>
  );
}