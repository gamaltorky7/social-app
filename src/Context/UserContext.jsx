import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export let UserContext = createContext()


export function UserContextProvider(props){

    let [user , setuser]= useState(null)

    async function getUser() {

     let {data} = await  axios.get(`https://linked-posts.routemisr.com/users/profile-data`, {
        headers:{
          token: localStorage.getItem("token")
        }
      })
      // console.log(data);
      
      if(data.message == "success"){

        setuser(data.user)
    
        
      }
    }

 useEffect(() => {
  if (localStorage.getItem("token")) {
    getUser();
  }
}, []);
    
return  <UserContext.Provider value={{ getUser , user , setuser}}>

      {props.children}
    </UserContext.Provider>
  
}