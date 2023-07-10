
import Nbar from "./components/Nbar";
import {Image} from "@nextui-org/react";
import Styles from "./components/Home.module.css";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import About from "./components/images/about1.jpg"

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
    <p className="text-sm leading-5"><b>TRANSPORTATION & LOGISTICS -</b> Never be in the dark, know the full condition of your package an it's current location </p>
    </div>

   
  </div>


  <div className="md:px-4 w-full mt-2 md:w-3/5 md:flex">

    <div className="ml-10">

      <Input width="80%" className="ml-5 " label="Enter Tracking Id" />
      
    </div>

      <Button hideIn="xs" size={"md"} className="ml-14 mt-2 bg-blue-400  md:mt-10 md:ml-2 text-white">Track</Button>


     

    </div>

   
    
  </main>
  <section className="text-white relatve h-fit w-screen bg-black px-4 py-10">
     <h3 className=" text-3xl font-bold mb-5"> WELCOME TO ASAP PRIME LOGISTICS</h3>

     <p>ASAP Prime Logistics is a world leader in global logistics for companies of all sizes. We maximize the reach of your international sales and distribution efforts, offering consultation and operations for a seamless supply chain solution!
     </p>
<p>
We clear imports through any country customs and deliver quick and easy with our customs brokerage programs. From high volume imports to small container loads, we provide transport and customs clearance to importers worldwide.</p>

<Button size="md" className="bg-white text-black mt-3" >Learn More ...</Button>


<Image src={About} className="mt-5 rounded-md" alt="" />









    </section>

    
  <section className="w-screen py-4 ">


<div className="px-5 w-5/6 shadow-lg mx-auto bg-white h-fit py-10">


  <h4 className="text-2xl mt-5 mb-4">TRUCKING</h4>

  <p className="text-sm">From Mercedes to Mack Trucks, ASAP Prime Logistic is the freight forward of choice for international auto shippers worldwide</p>

</div>

<div className=" px-5 bg-white shadow-lg mx-auto w-5/6 mt-4 h-fit py-10">
  <h4 className="text-2xl mt-5 mb-4">AIR FREIGHT</h4>

  <p className="text-sm">ASP Prime Logistics specializes in providing ustom tailored ocean/sea freight logistics solutions for a wide variety of cargo.</p>

</div>

<div className="px-5 bg-white shadow-lg mx-auto w-5/6 mt-4 h-fit py-10">
  <h4 className="text-2xl mt-5 mb-4">OCEAN FREIGHT</h4>
  <p className="tet-sm">
    ASAP Prime Logistics specail in providing expert ocean freight forwarrding services to companies large and small.
  </p>
</div>
</section>

<section className="px-5  bg-gray-100 py-5 mt-5">
  <h4 className="text-3xl mb-2">International delivery <i>without the worry</i></h4>
  <p className="text-sm">We are proud to serve you and have you trust us, it's been 9 years and we still hace you</p>
  <Button className="shadow mt-4 border-sky-500  text-sky-500">Get in touch</Button>
</section>










    </>
  );
}
