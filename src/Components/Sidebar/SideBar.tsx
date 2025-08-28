import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { GrUserSettings } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

export default function SideBar() {

  let{userData, logoutUser}:any=useContext(AuthContext);
   console.log(userData);

   let navigate =useNavigate();

   const handleLogout=()=>{
    logoutUser();
    navigate("/");
   }

  // add active class to links in sidebar
  const {pathname}=useLocation();

  let[collapsed, setCollapsed]= useState(false);

  let toggleCollapse=()=>{
    setCollapsed(! collapsed);
  }


  return (
    <div className="sidebarContainer" style={{minHeight:"100%"}} >
    <Sidebar collapsed={collapsed}  style={{minHeight:"100%"}}>
    <div className="d-flex justify-content-end">
      {collapsed ? 
      <TbLayoutSidebarRightCollapseFilled onClick={toggleCollapse} size={30} className="bg-warning me-4 mt-2 myIcon" /> 
      : <TbLayoutSidebarLeftCollapseFilled onClick={toggleCollapse} size={30} className="bg-warning me-4 mt-2 myIcon"/>
      }
    </div>


      <h4 className="side-title fw-bold my-3 mx-2">UMS</h4>
      <div className="text-center my-3">
        <img src={userData?.image} alt="profile" className="w-25 rounded-circle"/>
        <h5>{userData?.firstName}</h5>
        <h6 className="text-warning">Admin</h6>
      </div>


    <Menu>
      <MenuItem className={`${pathname === '/dashboard'? "active": null}`} icon={<FaHome />} component={<Link to="/dashboard" />}>Home</MenuItem>
      <MenuItem className={`${pathname === '/dashboard/users-list'? "active": null}`} icon={<FaUsersGear />} component={<Link to="/dashboard/users-list" />}> Users</MenuItem>
      <MenuItem className={`${pathname === '/dashboard/add-user'? "active": null}`}  icon={<GrUserSettings />} component={<Link to="/dashboard/add-user" />}> Add user</MenuItem>
      <MenuItem className={`${pathname === '/dashboard/profile'? "active": null}`} icon={<CgProfile />} component={<Link to="/dashboard/profile" />}> Profile</MenuItem>
      <MenuItem  icon={<MdLogout />} onClick={handleLogout}> Logout</MenuItem>
    </Menu>
    
</Sidebar>;


      
    </div>
  )
}
