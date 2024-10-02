import { Button } from '@/components/ui/button'
import Logo from '@/public/logo.png'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className=" w-4/5 mx-auto my-10 flex items-center justify-between">
            <div>
                <Image src={Logo} alt="Logo" width={80} className='' />
            </div>

            <div>
                <Button className="px-8 tracking-wider rounded-3xl">Login / SignUp</Button>
            </div>
        </div>

    )
}

export default Navbar