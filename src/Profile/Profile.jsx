import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import Change from '../component/Change/Change';

export default function Profile() {
let {user} = useContext(UserContext)
  
 
  return (<>
    <div className='w-3/4 mx-auto py-32' >
      <div className="w-full mx-auto p-10   bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
         
          <div className="flex flex-col items-center ">
              <img className="w-30 h-30 mb-3 rounded-full shadow-lg object-cover " src={user?.photo} alt={user?.name}/>
              <h2 className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">{user?.name}</h2>
              <span className="text-l text-gray-500 dark:text-gray-400">{user?.email}</span>
              <span className="text-l text-gray-500 dark:text-gray-400">{user?.gender}</span>
              <div className="flex mt-4 md:mt-6">
                
              <Change/>
                  
              </div>
          </div>
        </div>
    </div>
    
    
      
  
    </>
  )
}
