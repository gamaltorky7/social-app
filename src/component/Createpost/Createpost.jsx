import React, { useContext, useRef } from 'react'
import { UserContext } from '../../Context/UserContext'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'

export default function Createpost({refetch}) {
  let { user }=  useContext(UserContext)
  let inputFile = useRef()
  let {register , handleSubmit} = useForm()
  
 let {mutate} = useMutation({
    mutationFn: handleCreatePost,
    onSuccess: () => {
        // body.value = '';
        toast.success("Post created successfully");
        refetch();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    }
  })

 async  function handleCreatePost(value) {

    let formData = new FormData();
    {value.body &&  formData.append('body', value.body);}
    {inputFile.current.files[0] && formData.append('image', inputFile.current.files[0]);}
    
    return await axios.post(`https://linked-posts.routemisr.com/posts`, formData, {
        headers: {
            token: localStorage.getItem('token'),
        }
    })
    
    
  }
  return (
    <form onSubmit={handleSubmit(mutate)} className='w-full mx-auto my-5 bg-white p-5 rounded-2xl shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        
        <h2 className='text-2xl'>Post Something</h2>
        <div className='flex items-center my-5 justify-between'>
            <img className="w-10 h-10 rounded-full" src={user?.photo} alt={user?.name}/>
            <div className="w-full mx-3">
                <input {...register('body')} type="text" id="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type SomeThing ...."  />
            </div>
            <label htmlFor="uploadphoto"><i className="fa-solid fa-image fa-2x text-blue-900 hover:cursor-pointer"></i></label>
            <input ref={inputFile} type="file" hidden id='uploadphoto' />
        </div>

        <button type="Submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Post</button>

    </form>
    
  )
}
