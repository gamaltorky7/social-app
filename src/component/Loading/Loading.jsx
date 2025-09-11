import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {

    let skeletonArray = new Array(10).fill(0);


  return (
    <div className='w-full mx-auto'>
      <div className="my-5">
              
            {skeletonArray.map((item, index) => {
              return (
                <div key={index} className="cardItem w-3/4 mx-auto my-5 rounded-2xl bg-white p-5 dark:bg-gray-800  dark:shadow-gray-700">
                      {/* For variant="text", adjust the height via font-size */}
                      <Skeleton variant="text" sx={{ fontSize: '2rem' }} baseColor="gray" />
                      {/* For other variants, adjust the size with `width` and `height` */}
                      <Skeleton variant="circular" width={40} height={40} baseColor="gray"  />
                      <Skeleton variant="rectangular" className="h-20" baseColor="gray"/>
                      <Skeleton variant="rounded" className="h-20 " baseColor="gray"/>
                </div>
              )})}
            </div>
    </div>
  )
}
