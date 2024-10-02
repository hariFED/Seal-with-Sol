import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HandCoins, LayoutDashboard, LogOutIcon, Notebook, ReceiptText } from 'lucide-react'
import ProfilePic from "@/public/avatar.jpg"
import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-4/5 mx-auto pt-20 h-full flex flex-col justify-between drop-shadow-md'>
            <div className='flex flex-col gap-10'>
                <div className='flex items-center gap-5 '>
                    <Avatar className='border-4 border-green-300 animate-bounce'>
                        <AvatarImage src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611057.jpg?size=626&ext=jpg&ga=GA1.1.488100122.1727627096&semt=ais_hybrid" />
                        <AvatarFallback>Zoro</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className='font-bold'>Zoro</h3>
                        <h6 className='flex items-center gap-2'><span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span>Freelancer</h6>
                    </div>
                </div>

                <hr />
                <div>
                    <ul className='flex flex-col gap-5'>
                        <li className='flex gap-2 items-center hover:bg-gray-200 p-4 rounded-lg duration-150 cursor-pointer '>
                            <LayoutDashboard /> Dashboard
                        </li>
                        <li className='flex gap-2 items-center hover:bg-gray-200 p-4 rounded-lg duration-150 cursor-pointer '>
                            <ReceiptText /> Contracts
                        </li>
                        <li className='flex gap-2 items-center hover:bg-gray-200 p-4 rounded-lg duration-150 cursor-pointer'>
                            <HandCoins />Transcations
                        </li>
                        <li className='flex gap-2 items-center hover:bg-gray-200 p-4 rounded-lg duration-150 cursor-pointer'>
                            <Notebook />
                            Ledger
                        </li>
                    </ul>
                </div>


            </div>
            <div>
                <hr />
                <div className='my-20 flex gap-2 items-center hover:bg-red-400 hover:text-white p-4 rounded-lg duration-150 cursor-pointer' >
                    <LogOutIcon /> LogOut
                </div>

            </div>


        </div>
    )
}

export default Sidebar