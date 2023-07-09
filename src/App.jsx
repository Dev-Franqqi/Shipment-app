
import Nbar from "./components/Nbar";
import {Image} from "@nextui-org/react";
import Styles from "./components/Home.module.css";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

export default function App() {
  return (
    <>
   <Nbar />
      <div className={Styles.firstSection}>



  <div className="px-2 absolute bottom-20 text-white md:text-black">


      
    <h1 className="text-4xl font-bold">SHIP WORLDWIDE</h1>
    <p className="text-2xl italic">Transportation and logistics</p>

    </div>

  </div>

    <main className="w-screen md:flex py-16 px-2 md:px-20">
  <div className="w-full md:w-3/5 px-10 mb-3 md:mb-0">



    <div className=" text-left">
    <h2 className="text-3xl md:text-4xl font-semibold mb-5">SHIPMENTS <span className="italic">Tracking</span></h2>
    <p className="text-md leading-5"><b>TRANSPORTATION & LOGISTICS -</b> Never be in the dark, know the full condition of your package an it's current location </p>
    </div>

   
  </div>


  <div className="md:px-4 w-full mt-2 md:w-3/5 flex">
      <Input width="80%" label="Enter Tracking Id" />
      <Button size={"md"} className="hidden md:block bg-blue-400  md:mt-10 md:ml-2 text-white">Track</Button>
      <Button size={"xs"} className=" md:hidden bg-blue-400  text-white">Track</Button>

    </div>
    
  </main>






    </>
  );
}
