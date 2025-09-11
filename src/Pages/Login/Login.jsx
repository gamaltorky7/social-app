import axios from "axios";
import { get, useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import * as Zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";



const schema = Zod.object({
    email: Zod.string().nonempty("Email is required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Invalid email format" }),
    password: Zod.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, { message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number" }),

  })

export default function Login() {

  let { getUser } = useContext(UserContext)

  let {register , handleSubmit , formState:{errors}} = useForm({
    resolver: zodResolver(schema)
  })
  let navigate = useNavigate()

  
  async function handleLogin(data){
    // console.log(data);

    let response =await axios.post('https://linked-posts.routemisr.com/users/signin' , data).catch((error)=>{
      // console.log(error);
      toast.error(error.response?.data?.error);
    })

    if(response?.data?.message=="success"){
      // console.log(response);
      localStorage.setItem('token',response.data.token)
      toast.success("Login successful");
      getUser()
      navigate('/home')
    }

    
  }


  return (
    <div className="gap-10 flex-col py-28   md:flex min-h-screen justify-center items-center  lg:flex-row lg:gap-20 lg:py-0 lg:px-0 lg:min-h-screen lg:justify-center lg:items-center lg:mx-auto lg:max-w-6xl">

      <div className="w-full mx-auto mb-5 md:mb-0 text-center">
        <h1 className="text-gray-800 lg: fa-4x font-bold  ">Keep Contact</h1>
        <p className="text-zinc-600 fa-2x">Connect with friends and the world around you on Keep Contact</p>
      </div>
    
      <div className="mx-auto  bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 lg: w-3/4" >

        <form onSubmit={handleSubmit(handleLogin)} className="">
          
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          
          <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </form>

      </div>
    </div>
  )
}
