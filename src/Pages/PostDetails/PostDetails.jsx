import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import defPhoto from '../../assets/default-profile.png';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../component/Loading/Loading';
// import CommentOption from '../../component/CommentOption/Commentoption';
import { UserContext } from '../../Context/UserContext';
import CommentOption from './../../component/CommentOption/CommentOption';


export default function PostDetails() {

   let {postId} = useParams()
const {user} = useContext(UserContext)
let {data,isloading} = useQuery({
  queryKey: ['postDetails', postId],
  queryFn: getPostDetails,
})

const userLoginId = user?._id;

   async function getPostDetails() {
      return await axios.get(`https://linked-posts.routemisr.com/posts/${postId}`, {
            headers: {
                token: localStorage.getItem("token"),
            },
    })
        
}
let post = data?.data.post;

if (!post) return <Loading />
let {user:{photo,name} , image , comments , createdAt , body ,id } = post



  return (
    
    <div className='py-28'>
      {
        
        <div  className="cardItem  w-3/4 mx-auto my-5 rounded-2xl bg-white p-5 dark:bg-gray-800  dark:shadow-gray-700 "
          >
            <div className="cardItem-avatar">
              <div className="flex items-center gap-4">
                <img className="w-10 h-10 rounded-full" src={photo} alt="" />
                <div className="font-medium dark:text-white">
                  <div className='dark:text-white'>{name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(createdAt).toLocaleDateString()}{" "}
                    {new Date(createdAt).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>

            <p className="my-5 text-zinc-600 dark:text-white">{body}</p>
            <img src={image} className="w-full rounded-2xl" alt="" />

            <div className="cardFooter my-5">
              <p className="text-zinc-400 dark:text-gray-400">{comments.length} comment</p>
            </div>

            {
                post.comments.map((comment)=> {
                  let Cid = comment.commentCreator._id;
                  const CommentId = comment._id;
                  
                  return <div key={comment._id} className="card-comment bg-gray-300 my-5 p-3 rounded-2xl dark:bg-gray-700  dark:shadow-gray-700">
                    <div className="cardItem-avatar flex items-center justify-between content-center">
                      <div className="cardItem-avatar">
                        <div className="flex items-center gap-4">
                        {comment.commentCreator.photo.includes('undefined') ?
                          <img
                            className="w-10 h-10 rounded-full"
                            src= {defPhoto}
                            alt="" />
                          :
                          <img
                            className="w-10 h-10 rounded-full"
                            src={comment.commentCreator.photo}
                            alt=""
                          />
                        }
                          <div className="font-medium dark:text-white">
                            <div>
                              {comment.commentCreator.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(
                                comment.createdAt
                              ).toLocaleDateString()}{" "}
                              {new Date(
                                comment.createdAt
                              ).toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      {Cid === userLoginId && <CommentOption CommentId={CommentId}  />}
                    </div>
                    <p className="my-5 text-zinc-600 dark:text-white mx-2.5">
                      {comment.content}
                    </p>
                  </div>
                })
            }
          </div>
      }
    </div>
  )
}
