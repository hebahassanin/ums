import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
import {createContext, useEffect, useState, type ReactNode} from 'react';

interface User{
    id:string;
    firstName:string;
    email:string;

    ////
    lastName:string;
    age:number;
    phone: string;
  birthDate: string;


}
interface AuthContextType{
    userData:User | null;
    // saveUserData:()=>void
    //
    getUserData:()=>Promise<void>;
}

export const AuthContext= createContext<AuthContextType | null>(null)

interface AuthContextProvProps{
    children:ReactNode
} 
 
export default function AuthContextProvider({children}: AuthContextProvProps){
    const [userData, setUserData]=useState<User | null>(null)

    // const saveUserData=()=>{
    //     const encodenToken =localStorage.getItem('userToken')

    //     if(encodenToken){
    //         const decodedToken = jwtDecode<User>(encodenToken)
    //         setUserData(decodedToken)
    //     }
    // }

    // useEffect(()=>{
    //     if(localStorage.getItem("userToken")){
    //         saveUserData()
    //     }
    // },[])

    const getUserData= async()=>{
        const token=localStorage.getItem('userToken');
        if(token){
            try {
                let {data} = await axios.get("https://dummyjson.com/user/me",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setUserData(data)
                
            } catch (error) {
                console.log("Error fetching user",error);
                
                
            }
        }

    }

    useEffect(()=>{
        if(localStorage.getItem("userToken")){
            getUserData()
        }
    },[])

   

    return(
        // <AuthContext.Provider value={{userData,saveUserData}}>{children}</AuthContext.Provider>
        <AuthContext.Provider value={{userData,getUserData}}>{children}</AuthContext.Provider>
    )
}