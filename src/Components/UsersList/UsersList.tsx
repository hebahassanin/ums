import axios from "axios";
import {useEffect, useState} from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


interface user{
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}

export default function UsersList() {
  let [users,setUsers] = useState<user[]>([]);
  let [userId,setUserId] = useState<number | null>(null);
  let [userData,setUserData] = useState<user | null>(null);


  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user:user) => {
    setShow(true);
    setUserId(user.id);
    setUserData(user);

  }
 

  // delete user
  let deleteUser= async()=>{
    try {
      await axios.delete(`https://dummyjson.com/users/${userId}`);
      handleClose();
      toast.success(`deleted ${userData?.firstName}`);
      getUsers();
      
    } catch (error) {
      toast.error("sorry deleted fail");
      
    }
  }


  let navigate= useNavigate();
  let getUsers=async()=>{
    try {
      let response = await axios.get("https://dummyjson.com/users");
      setUsers(response?.data?.users);

    } catch (error) {
      console.log(error);
    }
  }

  // Update User Data
  let handleUpdate=(user:user)=>{
    navigate("/dashboard/update-user",{state: user });
    // navigate(`/dashboard/update-user${user}`);

  }
  let navigateToAddUser=()=>{
    navigate("/dashboard/add-user");
  }

  useEffect(()=>{
    getUsers();

  },[])
  return (
    <div>
      <div className="d-flex justify-content-between mt-4 mx-3">
        <h3 className="fw-bold">UsersList</h3>
        <button className="btn btn-warning text-white" onClick={navigateToAddUser}>Add new user</button>
      </div>
      <hr className="mx-3"/>

      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>profile</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
          <th>phone</th>
          <th>birthdate</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>(
          <tr key={user?.id}>
            <td>{user?.id}</td>
            <td><img src={user?.image} className="w-25"/></td>
            <td>{user?.firstName}</td>
            <td>{user?.lastName}</td>
            <td>{user?.email}</td>
            <td>{user?.phone}</td>
            <td>{user?.birthDate}</td>
            <td>
              <CiEdit size={30} onClick={()=> handleUpdate(user)} className="text-warning" />
              <FaRegTrashAlt size={25}  onClick={()=>handleShow(user)} className="text-danger mx-1" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

    {/* Modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want to delete {userData?.firstName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteUser}>
            Confirm delete
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}
