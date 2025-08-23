import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


export default function UpdateUser() {
    let location = useLocation();
    let navigate = useNavigate();
    let user= location.state;
    console.log(user);

    const [formData, setFormData]=useState({
      firstName: "",
      lastName:"",
      email: "",
      age: "",
      phone: "",
      birthDate: ""
    });

    useEffect(()=>{
      if(user){
        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "" ,
          email: user.email || "",
          age: user.age || "",
          phone: user.phone || "",
          birthDate: user.birthDate || ""

        });
      }
    },[user]);

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    // React.ChangeEvent<HTMLInputElement>

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>) =>{
     try {
      // e.preventDefault();
      e.preventDefault();
      await axios.put(`https://dummyjson.com/users/${user.id}`,formData);
      toast.success("Wow update user successfully!");
      navigate('/dashboard/users-list');
      
     } catch (error) {
      // toast.error("sorry failed! update");
      console.log(error);
      
     }
    }
    

  return (
    <>
       <div>
        <div className="my-4 mx-3">
          <h3 className="fw-bold">Update User</h3>
          <hr/>
        </div>
       

        <form className="m-5 shadow-lg p-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label>First Name</label>
              <input value={formData.firstName} onChange={handleChange} name="firstName" className="form-control mt-1" type="text" placeholder="Enter First Name"
                />

            </div>
            <div className="col-md-6">
              <label>Last Name</label>
              <input value={formData.lastName} onChange={handleChange} name="lastName" className="form-control mt-1" type="text" placeholder="Enter Last Name"
                />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-6">
              <label>Email</label>
              <input value={formData.email} onChange={handleChange} name="email" className="form-control mt-1" type="text" placeholder="Enter Email"
                />
            </div>
            <div className="col-md-6">
              <label>Age</label>
              <input value={formData.age} onChange={handleChange} name="age" className="form-control mt-1" type="text" placeholder="Enter Age"
                />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>Phone Number</label>
              <input value={formData.phone} onChange={handleChange} name="phone" className="form-control mt-1" type="text" placeholder="Enter Phone Number"
                />
            </div>
            <div className="col-md-6">
             <label>birth Date</label>
              <input value={formData.birthDate ? new Date(formData.birthDate).toISOString().split("T")[0]:""} onChange={handleChange} name="birthDate" className="form-control mt-1" type="date" placeholder="Enter birth Date"
                />
            </div>
          </div>
          
          <div className="my-5 text-center">
            <button className="btn btn-warning w-50 text-white">Update</button>
          </div>
        </form>
      </div>
       
      
    </>
  )
}
