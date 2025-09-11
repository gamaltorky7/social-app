import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import * as Zod from "zod";

const schema = Zod.object({
    name: Zod.string().nonempty("name is required").min(3, { message: "Name must be at least 3 characters long" }).max(20, { message: "Name must be at most 20 characters long" }),
    email: Zod.string().nonempty("Email is required").regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Invalid email format" }),
    password: Zod.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, { message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number" }),
    rePassword: Zod.string().nonempty("Confirm password is required"),
    gender: Zod.string().nonempty("gender is required"),
    dateOfBirth: Zod.coerce.date().refine((date) => {
      const today = new Date().getFullYear();
      const birthYear = date.getFullYear();
      // Check if the date is in the past
      if (birthYear < today) {
        return true;
      }
      // If the date is not in the past, return false

      
      // return 
    }, {
      message: "Date of birth must be in the past",
    })

  }).refine((data) => {
    return data.password === data.rePassword;
  }, {
    message: "Passwords do not match",
    path: ["rePassword"], // Specify the path to the field that should receive the error
  });

export default function Register() {

  

  let {register , handleSubmit , formState:{errors}} = useForm({
    resolver: zodResolver(schema)
  })
  let navigate = useNavigate()

  console.log("errors",errors);
  
  async function handleRegister(data){
    
    let response =await axios.post('https://linked-posts.routemisr.com/users/signup' , data).catch((error)=>{
      
      toast.error(error.response?.data?.error);
    })

    if(response?.data?.message=="success"){
    
      toast.success("Registration successful");
      navigate('/login')
    }

    
  }


  return (
    <div className="w-full mx-auto min-h-screen flex items-center justify-center py-28">


      <form onSubmit={handleSubmit(handleRegister)} className="w-full bg-white p-6 rounded-lg shadow-md   my-5">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
          <input {...register("name")} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user name"  />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*************" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <input {...register("rePassword")} type="password" id="rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="*************"/>
          {errors.rePassword && <p className="text-red-500 text-sm">{errors.rePassword.message}</p>}
        </div> 

        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select {...register("gender")} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          
          <option value="male">Male</option>
          <option value="female">Female</option>
          
        </select>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}

        <div className="mb-5">
          <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth</label>
          <input {...register("dateOfBirth")} type="date" id="dateOfBirth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
          {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
        </div>
       
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>






    </div>
  )
}
