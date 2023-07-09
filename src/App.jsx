
import { Navbar } from "@nextui-org/react";
import Nbar from "./components/Nbar";
import {Image} from "@nextui-org/react";
import ShipmentIm from "./components/images/erial-photography-container-terminal.jpg"

export default function App() {
  return (
    <>
   <Nbar />
   <div className=" w-full bg-black ">
  <Image className="object-cover h-full w-full" src={ShipmentIm} alt="" />
</div>




    </>
  );
}
