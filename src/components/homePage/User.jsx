import React from 'react'
import Lottie from "lottie-react";
import UserAnimation from './UserAnimation.json'

const User = (props) => {
  return (
    <>
      <div className='w-[400px] h-[200px] flex flex-col justify-start items-center rounded-xl bg-slate-50 drop-shadow-xl p-4'>
        <div className='w-full flex flex-row items-center justify-start gap-[15px] px-4 '>
          {/* <img src={props.img} alt="" /> */}
          <div className='w-[55px] h-[55px] bg-slate-200 drop-shadow-lg rounded-lg border-[1.5px] border-slate-500'></div>
          <div className='flex flex-col justify-center'>
            <div className='text-[18px] font-semibold'>{props.name}</div>
            <div className='text-[16px] text-gray-500 font-regular'>{props.bio}</div>
          </div>
        </div>
        <div className='my-[6px] text-[15px] px-[4px] py-[2px] font-poppins font-medium bg-gray-200 rounded-lg text-gray-500'>{props.address}</div>
        <div className='my-[12px] text-[16px] h-[50px] w-full flex flex-row px-[4px] items-center justify-around gap-[12px]'>
          <div className='flex flex-col justify-center items-center text-center'>
            <div className='text-slate-900 h-[32px]'>Post<br/>Karma</div>
            <div className='font-bold mt-[16px]'>{props.posts}</div>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <div className='text-slate-900 h-[32px]'>Comment<br/>Karma</div>
            <div className='font-bold mt-[16px]'>{props.comments}</div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='text-slate-900  h-[32px] pt-4'>Followers</div>
            <div className='font-bold mt-[16px]'>{props.followers}</div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col w-full justify-center items-center aspect-1 mt-[25px]">
        <Lottie
          animationData={UserAnimation}
          className="flex justify-center items-center min-w-[250px] max-w-[450px] aspect-1"
          loop={true}
        />
      </div>
    </>
  )
}

User.defaultProps = {
  name: '<USER>',
  bio: '<SHORT BIO>',
  address: 'rgerw3428296w4youaheuergtdqalieryuh',
  posts: '1K',
  comments: '1K',
  followers: '1K'
}

export default User