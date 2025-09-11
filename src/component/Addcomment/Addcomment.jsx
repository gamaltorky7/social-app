import { useMutation } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { data } from 'react-router';

export default function Addcomment({postKey ,refetch}) {

    let {register, handleSubmit} = useForm()

     let {mutate} = useMutation({
        mutationFn: handleAddComment,
        onSuccess: () => {
            // value.content = '';
            toast.success("Comment added successfully");
            refetch();
            
            
        },
        onError: (error) => {
            toast.error(error.response.data.error);
            console.log(error);
            
        }
    })

    
   async function handleAddComment(value) {
        let commentData = {
            post: postKey,
            content: value.content
        }
        return await axios.post(`https://linked-posts.routemisr.com/comments`,commentData , {
            headers: {
                token: localStorage.getItem('token'),
            }})   
           

    }
    

  return (
    <form onSubmit={handleSubmit(mutate)} className='w-full mx-auto my- py-5 flex items-center content-center gap-3 justify-between'>
      <input {...register('content')} type="text" id="content" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Add Comment ...."  />
        <button type="submit" className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add </button>
    </form>
  )
}
