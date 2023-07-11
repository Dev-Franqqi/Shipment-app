import Collapsible from "./components/Collapsible";
import Nbar from "./components/Nbar";
import {Image} from "@nextui-org/react";
import Styles from "./components/Home.module.css";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import About from "./components/images/about1.jpg"
import Translate from "./components/Translate";
import Iconsection from "./components/Iconsection";
export default function App() {
  return (
    <>
   <Nbar />
      <div className={Styles.firstSection}>



  <div className="px-2 absolute bottom-20 text-white md:text-black">


   <Translate />
    <h1 className="text-4xl font-bold">SHIP WORLDWIDE</h1>
    <p className="text-2xl italic">Transportation and logistics</p>

    </div>

  </div>

    <main className="w-screen md:flex py-16 px-2 ">
  <div className="w-full md:w-3/5 px-2 text-left mb-3 md:mb-0">



    <div className=" text-left">
    <h2 className="text-3xl md:text-4xl font-semibold mb-5">SHIPMENTS <span className="italic">Tracking</span></h2>
    <p className="text-md leading-5"><b>TRANSPORTATION & LOGISTICS -</b> Never be in the dark, know the full condition of your package an it's current location </p>
    </div>

   
  </div>


  <div className="md:px-4 w-full mt-2 sm:w-3/5 md:flex">
 
   

      <Input width="80%" className="border-2 border-black" label="Enter Tracking Id" />
      


      <Button size={"md"} className="ml-2 mt-2 bg-blue-400  md:mt-10 md:ml-2 text-white">Track</Button>


     

    </div>

   
    
  </main>
  <section className="text-white text-center relatve h-fit w-screen bg-black px-4 py-10">
     <h3 className=" text-3xl text-center font-bold mb-5"> WELCOME TO ASAP PRIME LOGISTICS</h3>

     <p>ASAP Prime Logistics is a world leader in global logistics for companies of all sizes. We maximize the reach of your international sales and distribution efforts, offering consultation and operations for a seamless supply chain solution!
     </p>
<p>
We clear imports through any country customs and deliver quick and easy with our customs brokerage programs. From high volume imports to small container loads, we provide transport and customs clearance to importers worldwide.</p>

<Button size="md" className="bg-white mb-3 mx-auto text-black mt-3" >Learn More ...</Button>


<Image src={About} className="mt-5 rounded-md" alt="" />









    </section>

    
  <section className="w-screen py-4 text-center ">


<div className="px-3 w-full shadow-lg mx-auto bg-white h-fit py-10">


  <h4 className="text-2xl mt-5 font-semibold mb-4  border-l-8 border-l-black pl-2">TRUCKING</h4>

  <p className="text-lg">From Mercedes to Mack Trucks, ASAP Prime Logistic is the freight forward of choice for international auto shippers worldwide</p>

</div>

<div className=" px-5 bg-whiten shadow-lg mx-auto w-full mt-4 h-fit py-10">
  <h4 className="text-2xl border-l-8 border-l-black font-semibold mt-5 mb-4 pl-2">AIR FREIGHT</h4>
 

  <p className="text-lg">ASAP Prime Logistics specializes in providing ustom tailored ocean/sea freight logistics solutions for a wide variety of cargo.</p>

</div>

<div className="px-5 bg-white shadow-lg mx-auto w-full mt-4 h-fit py-10">
  <h4 className="text-2xl  border-l-8 border-l-black pl-2 font-semibold mt-5 mb-4">OCEAN FREIGHT</h4>
  <p className="text-lg">
    ASAP Prime Logistics specalize in providing expert ocean freight forwarrding services to companies large and small.
  </p>
</div>
</section>

<section className="px-5 text-center  bg-gray-100 py-5 mt-5">
  <h4 className="text-3xl font-bold mb-2">International delivery <i className="font-bold">without the worry</i></h4>
  <p className="text-lg">We are proud to serve you and have you trust us, it's been 9 years and we still hace you</p>
  <Button className="shadow mx-auto border-2 mt-4 border-sky-500  text-sky-500">Get in touch</Button>
</section>

<section className="mt-10 px-4">

  <h4 className="text-4xl font-bold">WHY CHOOSE US</h4>

  <Collapsible />

</section>

<Iconsection />

<section className="text-center px-6 bg-gray-300 py-5 mt-4">
  <p className="font-medium space-x-2 tracking-wider">WE HAVE A WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH THE SERVICES WE OFFER</p>
</section>

<section className="mt-3 py-4">
  <h2 className="text-center text-2xl font-bold">Our <i>Services</i></h2>
</section>










    </>
  );
}
