import React from 'react'
import error from './error';




 const takeTime= ()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('success')
        
      }, 3000);
    })
 }

const Profile = async () => {
 await takeTime()
 throw new Error('Error Occurred')

  return (
    <div className='flex border h-[600px]'>
      {/* Profile */}
      <div className=' w-[300px] border flex pt-5 justify-center'>sidebar</div>
      <div className=' w-full flex items-center justify-center'>right Home</div>
    </div>
  )
}

export default Profile