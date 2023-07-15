// import Collapsible from "./components/Collapsible";

import { Link } from "react-router-dom";
import Styles from "./components/Home.module.css";
import Ship from "./components/images/blog1.jpg"
import About from "./components/images/about1.jpg"
import Translate from "./components/Translate";
import Iconsection from "./components/Iconsection";
import Airfr from "./components/images/blog2.jpg"
import Wareh from "./components/images/blog3.jpg" 
import Packg from "./components/images/blog4.jpg" 
import Raill from "./components/images/blog5.jpg" 
import Trucki from "./components/images/blog6.jpg"
 
export default function App() {
  return (
    <>

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
 
   

      <input className="border-2 border-black" placeholder="Enter Tracking Id" />
      


      <button className="ml-2 mt-2 bg-blue-400  md:mt-10 md:ml-2 text-white">Track</button>


     

    </div>

   
    
  </main>
  <section className="text-white text-center relatve h-fit w-screen bg-black px-4 py-10">
     <h3 className=" text-3xl text-center font-bold mb-5"> WELCOME TO ASAP PRIME LOGISTICS</h3>

     <p>ASAP Prime Logistics is a world leader in global logistics for companies of all sizes. We maximize the reach of your international sales and distribution efforts, offering consultation and operations for a seamless supply chain solution!
     </p>
<p>
We clear imports through any country customs and deliver quick and easy with our customs brokerage programs. From high volume imports to small container loads, we provide transport and customs clearance to importers worldwide.</p>

<button className="bg-white mb-3 mx-auto text-black mt-3" >Learn More ...</button>


<img src={About} className="mt-5 rounded-md" alt="" />









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
  <button className="shadow mx-auto border-2 mt-4 border-sky-500  text-sky-500">Get in touch</button>
</section>

<section className="mt-10 px-4">

  <h4 className="text-4xl font-bold">WHY CHOOSE US</h4>

  {/* <Collapsible /> */}

</section>

<Iconsection />


<section className="mt-3 text-zinc-600 bg-gray-100 py-4 px-3">
  
<section className="text-center  py-5 mt-4">
  <p className="font-medium space-x-2 tracking-wider">WE HAVE A WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH THE SERVICES WE OFFER</p>
</section>
  <h2 className="text-center text-2xl font-bold">Our <i>Services</i></h2>
  <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
    
    <img src={Ship} alt="" />


      

    <h3 className="text-2xl mb-2 mt-4 font-semibold px-3">Ocean Freight</h3> 
    <p className=" text-lg px-3">
      With our broad range of Ocean Freight products covering different equipment types and consolidation services, we ensure your cargo
      reaches the right place, at the right time in a cost-efficient way.</p>   
      {/* <Link>Read more</Link> */}
    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
      <img src={Airfr} alt=""/>

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3">Air Freight</h3>
      <p className="text-lg px-3">This category of products that predominantly use an air mode and offers a choice and offers a choice in delivery speed to best suit customer requirements.</p>
      <p className="text-lg px-3">
        Working together with carefully selected carriers..
      </p>
      {/* <Link>Read more</Link> */}

    </section>

    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">


    <img src={Wareh} alt="" />

    <h3 className="text-2xl mb-2 mt-4 font-semibold px-3">Warehousing</h3>
    <p className="text-lg px-3">At ASAP Prime Logistics we offer a comprehensice suit of capabilities and work with a range of best-in-class software partners</p>
    <p className="text-lg px-3">Our state-of-the-art systems monitors andn control all criticcal warehouse processes</p>

    {/* <Link>Read more</Link> */}
    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
      <img src={Packg} alt="" />

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3">Package & Store </h3>
      <p className="text-lg px-3">ASAP Prime Logistics dedicated and shared user warehousing solutions are not just about olding stock. There are a wider range of additional services that we offer, as part of an overall...</p>

      {/* <Link>Read more</Link> */}

    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
      <img src={Raill} alt="" />

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3">Railway Logistics</h3>
      <p className="text-lg px-3">ASAP Peeimw Logistics has a flexible, reliable and efficient overland transportation offering, including Road, Rail and Intermodal Services. We have a global capability with services operating...</p>

      {/* <Link>Read more</Link> */}
    </section>


<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">

  <img src={Trucki} alt="" />

  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3">Trucking</h3>

  <p className="text-lg px-3">We understand the importance of delivery of goods to their ultimate destination. As general freight forwarders we can arrange shipment of group package and full loads...</p>

  {/* <Link>Read more</Link> */}
</section>


<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">

  {/* <img src={Doort} alt="" /> */}
  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3">Door to Door Delivery</h3>
  <p className="text-lg px-3">This is the modt common and convenient way of shipment for customers. In this case te custimer is free to all arrangements related to the ship freight container shipments</p>

</section>
<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">

  
   

</section>
</section>










    </>
  );
}
