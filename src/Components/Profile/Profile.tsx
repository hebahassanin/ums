import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Profile() {

  let{userData}:any=useContext(AuthContext);

  return (
    <>

    <div>
      <div className="my-4 mx-3">
        <h3 className="fw-bold">Profile</h3>
        <hr/>
      </div>
       

        <form className="m-5 shadow-lg p-5">

          <div className="row justify-content-center text-center mb-4">
            <div className="col-md-12">
            <img src={userData?.image} alt="profile" className="rounded-circle" style={{width:"70px"}}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>First Name</label>
              <input value={userData?.firstName} className="form-control mt-1" type="text" placeholder="Enter First Name" disabled
                />

            </div>
            <div className="col-md-6">
              <label>Last Name</label>
              <input value={userData?.lastName} className="form-control mt-1" type="text" placeholder="Enter Last Name" disabled
                />

            </div>
          </div>

          <div className="row my-4">
            <div className="col-md-6">
              <label>Email</label>
              <input value={userData?.email} className="form-control mt-1" type="text" placeholder="Enter Email" disabled
                />

            </div>
            <div className="col-md-6">
              <label>Age</label>
              <input value={userData?.age}  className="form-control mt-1" type="text" placeholder="Enter Age" disabled
                />

            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>Phone Number</label>
              <input value={userData?.phone} className="form-control mt-1" type="text" placeholder="Enter Phone Number" disabled
                />

            </div>
            <div className="col-md-6">
             <label>birth Date</label>
              <input value={userData?.birthDate ? new Date(userData.birthDate).toISOString().split("T")[0]:""} className="form-control mt-1" type="date" placeholder="Enter birth Date" disabled
                />

            </div>
          </div>
        </form>
      </div>
      
    </>
  )
}
