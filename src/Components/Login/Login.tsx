import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

import { TbLockPassword } from "react-icons/tb";
import { FaUser } from "react-icons/fa";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function Login() {
  interface LoginFormInputs{
    username:string;
    password:string;
  }

  interface AuthContextType{
    // saveUserData:()=>void
    getUserData:()=>void;

  }

//  let {saveUserData}= useContext(AuthContext) as AuthContextType;

let {getUserData}= useContext(AuthContext) as AuthContextType;

  let{register,handleSubmit,formState:{errors}}=useForm<LoginFormInputs>();
  let navigate= useNavigate();

  // Show and hide password with icon
  const [showPassword, setShowPassword]=useState(false);


  let onSubmit= async (data:LoginFormInputs)=>{
    //api
    try {
      let response= await axios.post("https://dummyjson.com/auth/login",data);
      localStorage.setItem("userToken",response?.data?.accessToken);
      // localStorage.setItem("userToken",response?.data?.token);
      await getUserData()

      // saveUserData();
      console.log(response);
      
      toast.success("Wow logged successfully!");
      navigate('/dashboard');
      // navigate('/dashboard',{state:{user:response.data}});
      
      
    } catch (error) {
      toast.error("sorry logged failed!");
      console.log(error);
    }
  }



  return (
    <>
    <div className="login-container">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-5 bg-white rounded p-4">
            <div className="title text-center mb-4">
              <h3 className="mb-4 fw-bold">User Management System</h3>
              <h4 className="fw-bold">SIGN IN</h4>
              <small className="text-muted">Enter your credentials to access your account</small>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label><FaUser className="mb-1" size={15}/> userName</label>
                <input className="form-control" type="text" placeholder="Enter username"
                {...register("username",{required:"Username is required!!"})}
                />
                {errors.username &&<span className="text-danger">{errors.username.message}</span>}

              </div>
             
              <div className="mt-2">
                <label><TbLockPassword className="mb-1" size={18}/> password</label>

                <div className="input-group">
                <input className="form-control" type={showPassword ? "text" :"password"} placeholder="Enter password"
                {...register("password",{required:"Password is required!!"})}
                />
                <span className="input-group-text" onClick={()=>setShowPassword(!showPassword)} 
                style={{cursor:"pointer"}}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>

                {errors.password &&<span className="text-danger">{errors.password.message}</span>}
              </div>
              

              <div className="sub-btn">
                <button className="btn btn-warning w-100 my-4 text-white">Signin</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
        
      
    </>
  )
}
