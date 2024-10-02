import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import Contracts from '../contracts/page'
import ProfileCard from '@/app/components/ProfileCard'
import TotalContracts from '@/app/components/TotalContracts'
import PendingContracts from '@/app/components/PendingContracts'

const DashBoard = () => {
    return (
        <div className='min-h-screen flex '>

            <div className='w-1/6 border-r-[1px] h-screen bg-gray-50 '>
                <Sidebar />
            </div>
            <div className='w-full'>
                <div className='w-full h-1/2 mx-auto'>
                    <ProfileCard />
                </div>
                <div className='w-4/5 mx-auto flex h-1/3 items-center justify-center'>
                    <div className='w-1/2 flex items-center justify-center border-2 h-full'>
                        <TotalContracts />
                    </div>
                    <div className='w-1/2'>
                        <PendingContracts />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashBoard