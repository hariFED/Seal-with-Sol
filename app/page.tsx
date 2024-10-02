import { div } from "framer-motion/client";
import Homepage from "./common/home/page";
import Navbar from "./components/Navbar";


export default function Home() {
  return (

    <div>

      <Navbar />
      <div className="container mx-auto  flex items-center justify-center ">


        <Homepage />

      </div>
    </div>

  );
}
