import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Createpost from "../../component/Createpost/Createpost";
import PostOption from "../../component/PostOption/PostOption";
import { UserContext } from "../../Context/UserContext";
import defPhoto from "../../assets/default-profile.png";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../component/Loading/Loading";
import Pagination from "../../component/Pagination/Pagination";
import Addcomment from "../../component/Addcomment/Addcomment";
import Scrolltop from "../../component/Scrolltop/Scrolltop";

export default function Home() {
  let {user} = useContext(UserContext);
  let [pagenum , setpagenum] = useState(1);
  let {data , isLoading,isError,error ,refetch} = useQuery({
    queryKey: ['posts', pagenum],
    queryFn: getAllPosts,})
    // console.log(pagenum);
    

  async function getAllPosts() {
    return  await axios.get(
      `https://linked-posts.routemisr.com/posts?limit=50&sort=-createdAt&page=${pagenum}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
  }
  let posts = data?.data.posts;

  return (<>

    <div className="  md:w-3/4 mx-auto pt-28 ">
      <Createpost refetch = {refetch}/>
      </div> 
    {
      isLoading ? 
     <Loading />:
      
      <div className=" mx-auto md:w-3/4">
      {posts.map((post) => {
        
        let {_id,body,image, user: { name, photo },createdAt,comments} = post;
        let postUserId = post.user._id;
        let userLoginId = user._id;
        
        return (
          
          <div
            key={_id}
            className="cardItem mx-auto my-5 rounded-2xl bg-white p-5 dark:bg-gray-800  dark:shadow-gray-700 "
          >
            <div className="cardItem-header flex justify-between items-center w-full">
              <div className="cardItem-avatar">
              <div className="flex items-center gap-4">
                <img className="w-10 h-10 rounded-full" src={photo} alt="" />
                <div className="font-medium dark:text-white">
                  <div>{name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(createdAt).toLocaleDateString()}{" "}
                    {new Date(createdAt).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
            {
              postUserId === userLoginId && <PostOption refetch={refetch} postId={_id} />
            }
            </div>

            <p className="my-5 text-zinc-600 dark:text-white">{body}</p>
            <img src={image} className="w-full rounded-2xl" alt="" />

            <div className="cardFooter flex justify-between my-5">
              <p className="text-zinc-400">{comments.length} comment</p>
              <Link to={"/postdetails/" + _id} className="text-blue-400">
                see post details
              </Link>
            </div>



            {
              comments.length > 0 && 
              <div className="card-comment bg-gray-300 p-3 rounded-2xl  dark:bg-gray-700  dark:shadow-gray-700">
                <div className="cardItem-header flex justify-between items-center">
                  <div className="cardItem-avatar">
                  <div className="flex items-center gap-4">
                    {comments[comments.length - 1].commentCreator.photo.includes('undefined') ?
                      <img
                      className="w-10 h-10 rounded-full"
                      src= {defPhoto}
                      alt=""
                      />
                      :
                      <img
                      className="w-10 h-10 rounded-full"
                      src={comments[comments.length - 1].commentCreator.photo}
                      alt=""
                    />
                    }
                    
                    
                    <div className="font-medium dark:text-white">
                      <div>
                        {comments[comments.length - 1].commentCreator.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(
                          comments[comments.length - 1].createdAt
                        ).toLocaleDateString()}{" "}
                        {new Date(
                          comments[comments.length - 1].createdAt
                        ).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                  </div>

                 {/* {commentid === userLoginId &&
                  <CommentOption  />} */}
                  
                </div>
                <p className="my-5 text-zinc-600 dark:text-white">
                  {comments[comments.length - 1].content}
                </p>
              </div>
            }
            <Addcomment postKey={_id} refetch={refetch} />

          </div>
        );
      })}
    </div>}
    <Pagination pagenum={pagenum} setfun={setpagenum} />
    <Scrolltop />
  </>
    
    
    
  );
}
