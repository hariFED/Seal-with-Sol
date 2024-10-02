import React from 'react'
import SolLogo from '@/public/solana-sol-logo.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Homepage = () => {
    return (
        <div className='flex flex-col gap-5 mt-48  items-center justify-center  '>

            <div className='text-5xl font-bold flex items-center gap-4'>

                SEAL with SOL <Image src={SolLogo} alt='Solana Logo' width={40} />
            </div>
            <div className='w-2/4 text-center text-lg'>
                Seal Your Contracts with Sol simplifies contract signing by leveraging Solana's blockchain technology. Effortlessly create, sign, and verify agreements securely and efficiently—making your contracts just a click away!
            </div>
            <div>

                <Link href="/user/dashboard">   <Button variant="outline"> Create contract</Button></Link>
            </div>


        </div>
    )
}

export default Homepage