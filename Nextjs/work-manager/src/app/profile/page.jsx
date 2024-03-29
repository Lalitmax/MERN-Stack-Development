import React from 'react'



const takeTime = async () => {

  return await new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve('success')

    }, 3000)
  })



}

const Profile = async () => {
  await takeTime()

  return (
    <div className='flex border h-[600px]'>
      {/* Profile */}
      <div className=' w-[300px] border flex pt-5 justify-center'>sidebar</div>
      <div className=' w-full flex items-center justify-center'>right Home</div>
    </div>
  )
}

export default Profile