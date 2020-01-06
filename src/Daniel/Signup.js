import React from 'react'
import {useForm} from 'react-hook-form'

function SignUp() {
const{register, handleSubmit, errors} = useForm();

const onSubmit = data=>{
console.log(data);
}
console.log(errors)

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder= 'First Name' name ="firstName" ref={register} />
            <br/>
            <input type="text" placeholder="Last Name" name= "lastName" ref={register} />
            <br/>
            <input type="tel" placeholder="Phone number" name="Phone" ref={register({required: true, minLength: 6, maxLength: 12})} />
            {errors.Phone && <p>Must enter valid phone number!</p>}
            <br/>
            <input type= 'password' placeholder= 'Password' name= "password" ref= {register({required:true})} />
            {errors.password && <p> Must have password!</p>}
            <br/>
            <p>I have read the Terms and Conditions.</p>
            <input type="checkbox" placeholder="Terms" name="check" ref={register({required: true})} />
            {errors.Terms && <p> Must accept terms and Conditions!</p>}
            <br/>
            <input type="submit" value= "Create Account"/>
        </form>
        </div>
    )
}

export default SignUp