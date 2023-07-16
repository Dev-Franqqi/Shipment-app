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
import Door from "./components/images/door.png"
import Custom from "./components/images/custom.png"
import Contract from "./components/images/contract.jpg"
import Nbar from "./components/Nbar";
import Collapsible from "./components/Collapsible";
export default function App() {
  return (
    <>

    <Nbar />


    <main className="w-screen md:flex py-16 px-2 ">
  <div className="w-full md:w-3/5 px-2 text-left mb-3 md:mb-0">



    <div className="text-left">
    <h2 className="text-3xl md:text-4xl font-bold mb-5">SHIPMENTS TRACKING</h2>
    <p className="text-md leading-5"><b>TRANSPORTATION & LOGISTICS -</b> Never be in the dark, know the full condition of your package an it's current location </p>
    </div>

   
  </div>


  <div className=" w-full mt-2 ">
 
   

      <input className="border-2 w-3/5 rounded-md h-10 px-2 border-black text-lg font-semibold" placeholder="Enter Tracking Id" />
      


      <button className="ml-2 mt-2 bg-blue-600 w-1/5 text-xl px-3 py-1.5 rounded-md text-white">Track</button>


     

    </div>

   
    
  </main>
  <section className="text-white text-center relatve h-fit w-screen bg-black px-4 py-10 leading-8">
     <h3 className=" text-3xl text-center font-bold mb-5"> WELCOME TO ASAP PRIME LOGISTICS</h3>

     <p>ASAP Prime Logistics is a world leader in global logistics for companies of all sizes. We maximize the reach of your international sales and distribution efforts, offering consultation and operations for a seamless supply chain solution!
     </p>
<p>
We clear imports through any country customs and deliver quick and easy with our customs brokerage programs. From high volume imports to small container loads, we provide transport and customs clearance to importers worldwide.</p>

<button className="bg-white mb-3 mx-auto w-3/5 rounded-md h-10 text-xl text-black mt-3" >Learn More ...</button>


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
  <h4 className="text-3xl font-bold mb-2">International delivery without the worry</h4>
  <p className="text-lg">We are proud to serve you and have you trust us, it's been 9 years and we still hace you</p>
  <button className="shadow mx-auto border-2 w-3/5 rounded-md h-10 text-xl mt-5 border-sky-500  text-sky-500">Get in touch</button>
</section>

<section className="mt-10 px-4">

  <h4 className="text-3xl font-bold">WHY CHOOSE US</h4>

  <Collapsible />

</section>

<Iconsection />


<section className="mt-3 text-zinc-600 bg-gray-100 py-4 px-3">
  
<section className="text-center  py-5 mt-4">
  <p className="font-medium space-x-2 tracking-wider">WE HAVE A WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH THE SERVICES WE OFFER</p>
</section>
  <h2 className="text-center text-black text-3xl mt-3 font-bold">Our <i>Services</i></h2>
  <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
    
    <img src={Ship} alt="" />


      

    <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Ocean Freight</h3> 
    <p className=" text-lg px-3">
      With our broad range of Ocean Freight products covering different equipment types and consolidation services, we ensure your cargo
      reaches the right place, at the right time in a cost-efficient way.</p>   
      <a className="pl-3 mt-3 text-blue-800 text-xl" href="#">Read more</a>
    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
      <img src={Airfr} alt=""/>

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Air Freight</h3>
      <p className="text-lg px-3">This category of products that predominantly use an air mode and offers a choice and offers a choice in delivery speed to best suit customer requirements.</p>
      <p className="text-lg px-3">
        Working together with carefully selected carriers..
      </p>
      <a className="pl-3 mt-3 text-blue-800 text-xl" href="#">Read more</a>

    </section>

    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">


    <img src={Wareh} alt="" />

    <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Warehousing</h3>
    <p className="text-lg px-3">At ASAP Prime Logistics we offer a comprehensice suit of capabilities and work with a range of best-in-class software partners</p>
    <p className="text-lg px-3">Our state-of-the-art systems monitors andn control all criticcal warehouse processes</p>

    <a className="pl-3 mt-3 text-blue-800 text-xl" href="#">Read more</a>
    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
      <img src={Packg} alt="" />

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Package & Store </h3>
      <p className="text-lg px-3">ASAP Prime Logistics dedicated and shared user warehousing solutions are not just about olding stock. There are a wider range of additional services that we offer, as part of an overall...</p>

      <a className="pl-3 mt-3 text-blue-800 text-xl" href="#">Read more</a>

    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
      <img src={Raill} alt="" />

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Railway Logistics</h3>
      <p className="text-lg px-3">ASAP Prime Logistics has a flexible, reliable and efficient overland transportation offering, including Road, Rail and Intermodal Services. We have a global capability with services operating...</p>
``
      <a className="pl-3 mt-3 text-blue-800 text-xl" href="#">Read more</a>
    </section>


<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">

  <img src={Trucki} alt="" />

  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Trucking</h3>

  <p className="text-lg px-3">We understand the importance of delivery of goods to their ultimate destination. As general freight forwarders we can arrange shipment of group package and full loads...</p>

  <a className="pl-3 mt-3 text-blue-800 text-xl" href="#">Read more</a>
</section>


<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">

  <img src={Door} alt="" />
  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Door to Door Delivery</h3>
  <p className="text-lg px-3">This is the most common and convenient way of shipment for customers. In this case te custimer is free to all arrangements related to the ship freight container shipments</p>

</section>
<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">

  <img src={Contract} alt="" />

  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Contract Logistics</h3>
  <p className="text-lg px-3">

    We have activities such as planning and designing supply chains, designing facilities, warehousing,transporting and distributing goods, processing orders, collecting payments, managing inventory and even providing certain aspects of customer service.
  </p>
   

</section>

<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full">
  <img src={Custom} alt="" />
  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Custom Brokerage</h3>
  <p className="text-lg px-3">
    Includes tarrif, custom laws, rules and regulatins for the clearance of imported and exported goods ro merchandise from custom authority; preparation of import and export documents including computation and payment duties, taxes and other charges accruing thereon.
  </p>
</section>
</section>

<section className="h-72 bg-gradient-to-bl from-black py-20 to-zinc-700 text-center px-4 text-white">



<h2 className="text-3xl font-bold ">We Provide</h2>
<p className="text-lg mt-4">The Best Sea And Air Freight Services.</p>
<p className="text-lg mb-4">

You Can Book Your Shipping From any Country and you would be glad you did.
</p>

<div className="flex space-x-2 justify-center">

<button className=" bg-white text-black rounded-md py-2">
  Learn More
</button>

<button className="w-fit py-1  rounded-md border-2 border-white px-1">
  Reach Out to Us Now
</button>
</div>


</section>


<section className="text-center mt-4">
  <h3 className="text-3xl font-bold">What People Say</h3>
</section>







    </>
  );
}
