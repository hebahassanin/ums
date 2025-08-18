
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './Components/AuthLayout/AuthLayout';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import Home from './Components/Home/Home';
import UsersList from './Components/UsersList/UsersList';
import AddUser from './Components/AddUser/AddUser';
import Profile from './Components/Profile/Profile';

import { ToastContainer} from 'react-toastify';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import AuthContextProvider from './context/AuthContext';

function App() {
  
  const routes=createBrowserRouter([
    {path:'/',
     element:<AuthLayout/>,
     errorElement: <NotFound/>,
    children:[
      {index:true,element:<Login/>},
      {path:'login',element:<Login/>}
    ]
   },
    {path:'dashboard',
      element:<MasterLayout/>,
      errorElement: <NotFound/>,
      children:[
        {index:true,element:<Home/>},
        {path:'home',element:<Home/>},
        {path:'users-list',element:<UsersList/>},
        {path:'add-user',element:<AddUser/>},
        {path:"update-user",element:<UpdateUser/>},
        {path:'profile',element:<Profile/>}
      ]
    }
  ])

  return (
    <>
    <ToastContainer />
    

     <AuthContextProvider>
     <RouterProvider router={routes}></RouterProvider>
     
    </AuthContextProvider>

    </>
  )
}

export default App
