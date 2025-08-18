import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function AddUser() {
  interface userFormData{
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    phone: string;
    birthDate: string;
  }

  let {register, handleSubmit, formState:{errors}}=useForm<userFormData>();
  let navigate= useNavigate();

  let onSubmit= async (data:userFormData)=>{
    //api

  console.log(data);
  
    try {
      let response= await axios.post("https://dummyjson.com/users/add",data);
      console.log(response);
      toast.success("Wow add user successfully!");
      navigate('/dashboard/users-list');
      
      
    } catch (error) {
      toast.error("sorry logged failed!");
      console.log(error);
      
      
    }
  }
  return (
    <>
      <div>
      <div className="my-4 mx-3">
        <h3 className="fw-bold">Add User</h3>
        <hr/>
      </div>
       

        <form className="m-5 shadow-lg p-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <label>First Name</label>
              <input className="form-control mt-1" type="text" placeholder="Enter First Name"
                {...register("firstName",{required:"firstName is required!!"})}
                />
                {errors.firstName &&<span className="text-danger">{errors.firstName.message}</span>}

            </div>
            <div className="col-md-6">
              <label>Last Name</label>
              <input className="form-control mt-1" type="text" placeholder="Enter Last Name"
                {...register("lastName",{required:"lastName is required!!"})}
                />
                {errors.lastName &&<span className="text-danger">{errors.lastName.message}</span>}

            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-6">
              <label>Email</label>
              <input className="form-control mt-1" type="text" placeholder="Enter Email"
                {...register("email",{required:"email is required!!",pattern:{
                  value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message:"email should be contain on character @"
                }})}
                />
                {errors.email &&<span className="text-danger">{errors.email.message}</span>}

            </div>
            <div className="col-md-6">
              <label>Age</label>
              <input className="form-control mt-1" type="text" placeholder="Enter Age"
                {...register("age",{required:"age is required!!",
                pattern:{
                  value:/^(1[89]|[2-9]\d)$/,
                  message:"enter number only from 18 to 99 "
                }

              })}
                />
                {errors.age &&<span className="text-danger">{errors.age.message}</span>}

            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>Phone Number</label>
              <input className="form-control mt-1" type="text" placeholder="Enter Phone Number"
                {...register("phone",{required:"phone is required!!"})}
                />
                {errors.phone &&<span className="text-danger">{errors.phone.message}</span>}

            </div>
            <div className="col-md-6">
             <label>birth Date</label>
              <input className="form-control mt-1" type="date" placeholder="Enter birth Date"
                {...register("birthDate",{required:"birthDate is required!!"})}
                />
                {errors.birthDate &&<span className="text-danger">{errors.birthDate.message}</span>}

            </div>
          </div>
          <div className="my-5 text-center">
            <button className="btn btn-warning w-50 text-white">Add User</button>
          </div>
        </form>
      </div>
        
       
      
      
    </>
  )
}
