import Image from 'next/image'
import React from 'react'
import ProfilePic from '@/public/avatar.jpg'

const ProfileCard = () => {
    return (
        <div className='sm:w-5/6 border-2 bg-gray-50 rounded-3xl drop-shadow-md mx-auto mt-10 h-full sm:h-4/5 flex flex-col sm:flex-row items-center justify-evenly' >

            <div className=''>
                <Image src={ProfilePic} alt='Profile Pic' className='rounded-full' width={200} />
            </div>
            <div className='flex md:gap-10 '>
                <ul className='text-lg  font-medium gap-5 md:flex hidden flex-col'>
                    <li>Name</li>
                    <li>Company / Freelancer</li>
                    <li>Solana Public Address</li>
                    <li>Service Provided</li>
                </ul>
                <ul className='text-lg font-light gap-5 flex flex-col'>
                    <li>Zoro</li>
                    <li>Freelancer</li>
                    <li>4n9V4tTKNAJjvhJ4AeqpyEUMgLNMNsAGrmkB4c9oRAs6 </li>
                    <li>Web Development</li>
                </ul>
            </div>

        </div>
    )
}

export default ProfileCard