// import Collapsible from "./components/Collapsible";

import { Link } from "react-router-dom";
import Ship from "../components/images/blog1.jpg"
import Abou from "../components/images/about1.jpg"
import Iconsection from "../components/Iconsection";
import Airfr from "../components/images/blog2.jpg"
import Wareh from "../components/images/blog3.jpg" 
import Packg from "../components/images/blog4.jpg" 
import Raill from "../components/images/blog5.jpg" 
import Trucki from "../components/images/blog6.jpg"
import Door from "../components/images/door.png"
import Custom from "../components/images/custom.png"
import Contract from "../components/images/contract.jpg"
import Collapsible from "../components/Collapsible";
import { Input } from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Firstcomp from "../components/Firstcomp";
export default function Home() {
  return (
    <>


    <Firstcomp />



    <main className="w-screen md:flex md:justify-center md:space-x-5 py-16 px-2 ">
  <div className="w-full md:w-3/5 px-2 text-left mb-3 md:mb-0">



    <div className="text-left">
    <h2 className="text-3xl md:text-4xl font-bold mb-5">SHIPMENTS TRACKING</h2>
    <p className="text-md leading-5"><b>TRANSPORTATION & LOGISTICS -</b> Never be in the dark, know the full condition of your package an it's current location </p>
    </div>

   
  </div>


  <div className=" w-full md:w-3/5 mt-2 ">
 
   

      <input className="border w-3/5 rounded-md h-10 px-2 border-black text-lg font-semibold" placeholder="Enter Tracking Id" />
      


      <button className="ml-2 mt-2 bg-blue-600 w-1/5 text-xl px-3 py-1.5 rounded-md text-white">Track</button>



     

    </div>

   
    
  </main>
  <section className="text-white text-center bg-gradient-to-br from-blue-950 to-black relatve h-fit w-screen px-4 py-10 leading-8 md:flex md:text-left md:pl-20 md:space-x-20">
    <div className="md:w-2/5">

     <h3 className=" text-3xl  font-bold mb-5"> WELCOME TO ASAP PRIME LOGISTICS</h3>

     <p className="text-lg">ASAP Prime Logistics is a world leader in global logistics for companies of all sizes. We maximize the reach of your international sales and distribution efforts, offering consultation and operations for a seamless supply chain solution!
     </p>
<p>
We clear imports through any country customs and deliver quick and easy with our customs brokerage programs. From high volume imports to small container loads, we provide transport and customs clearance to importers worldwide.</p>

<Link to={"/about"} className="bg-white px-2 mb-3 mx-auto w-3/5 rounded-md h-10 text-xl text-black mt-3 md:w-fit md:text-lg md:px-3 md:mt-5 md:bg-blue-600 md:text-white" >Learn More ...</Link>
</div>


<img src={Abou} className="mt-5 rounded-md md:w-2/5 md:border-8 md:border-white"  alt="" />









    </section>

    
  <section className="w-screen py-4 text-center md:flex md:text-left">


<div className="px-5 bg-white shadow-lg mx-auto w-full mt-4 h-fit py-10">


  <h4 className="text-2xl mt-5 font-semibold mb-4  border-l-8 border-l-black pl-2">TRUCKING</h4>

  <p className="text-lg">From Mercedes to Mack Trucks, ASAP Prime Logistic is the freight forward of choice for international auto shippers worldwide</p>

</div>

<div className=" px-5 bg-white shadow-lg mx-auto w-full mt-4 h-fit py-10" >
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

<section className="px-5 text-center  bg-gray-100 py-5 mt-5 md:py-10">
  <h4 className="text-3xl font-bold mb-2">International delivery without the worry</h4>
  <p className="text-lg">We are proud to serve you and have you trust us, it's been 9 years and we still hace you</p>
  <button className="shadow mx-auto border-2 w-3/5 rounded-md h-10 text-xl mt-5 border-sky-500  text-sky-500 md:w-fit md:px-3">Get in touch</button>
</section>
<section className="md:flex">


<section className="mt-10 px-4 w-4/5">

  <h4 className="text-3xl font-bold">WHY CHOOSE US</h4>

  <Collapsible />

</section>

<Iconsection />


</section>


<section className="mt-3 text-zinc-600 bg-gray-100 py-4 px-3">
  
<section className="text-center  py-5 mt-4">
  <p className="font-medium space-x-2 tracking-wider">WE HAVE A WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH THE SERVICES WE OFFER</p>
</section>


  <h2 className="text-center text-black text-3xl mt-3 font-bold">Our <i>Services</i></h2>


<div className="md:w-5/6 md:mx-auto md:flex md:flex-wrap">

  <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">
    
    <img src={Ship} alt="" />


      

    <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Ocean Freight</h3> 
    <p className=" text-lg px-3">
      With our broad range of Ocean Freight products covering different equipment types and consolidation services, we ensure your cargo
      reaches the right place, at the right time in a cost-efficient way.</p>   
      <Link className="pl-3 mt-3 text-blue-800 text-xl  underline" to="/services/ocean">Read more</Link>
    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">
      <img src={Airfr} alt=""/>

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Air Freight</h3>
      <p className="text-lg px-3">This category of products that predominantly use an air mode and offers a choice and offers a choice in delivery speed to best suit customer requirements.</p>
      <p className="text-lg px-3">
        Working together with carefully selected carriers..
      </p>
      <Link className="pl-3 mt-3 text-blue-800 text-xl underline" to="/services/air">Read more</Link>

    </section>

    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">


    <img src={Wareh} alt="" />

    <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Warehousing</h3>
    <p className="text-lg px-3">At ASAP Prime Logistics we offer a comprehensice suit of capabilities and work with a range of best-in-class software partners</p>
    <p className="text-lg px-3">Our state-of-the-art systems monitors andn control all criticcal warehouse processes</p>

    <Link className="pl-3 mt-3 text-blue-800 text-xl underline" to="/services/warehousing">Read more</Link>
    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">
      <img src={Packg} alt="" />

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Package & Store </h3>
      <p className="text-lg px-3">ASAP Prime Logistics dedicated and shared user warehousing solutions are not just about olding stock. There are a wider range of additional services that we offer, as part of an overall...</p>

      <Link className="pl-3 mt-3 text-blue-800 text-xl underline" to="/services/package">Read more</Link>

    </section>


    <section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">
      <img src={Raill} alt="" />

      <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Railway Logistics</h3>
      <p className="text-lg px-3">ASAP Prime Logistics has a flexible, reliable and efficient overland transportation offering, including Road, Rail and Intermodal Services. We have a global capability with services operating...</p>

      <Link className="pl-3 mt-8 text-blue-800 text-xl underline" to="/services/railway">Read more</Link>
    </section>


<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">

  <img src={Trucki} alt="" />

  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Trucking</h3>

  <p className="text-lg px-3">We understand the importance of delivery of goods to their ultimate destination. As general freight forwarders we can arrange shipment of group package and full loads...</p>

  <Link className="pl-3 mt-8 text-blue-800 text-xl underline" to="/services/trucking">Read more</Link>
</section>


<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">

  <img src={Door} alt="" />
  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Door to Door Delivery</h3>
  <p className="text-lg px-3">This is the most common and convenient way of shipment for customers. In this case te custimer is free to all arrangements related to the ship freight container shipments</p>
  <Link className="pl-3 mt-8 text-blue-800 text-xl underline" to="/services/door">Read more</Link>

</section>
<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">

  <img src={Contract} alt="" />

  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Contract Logistics</h3>
  <p className="text-lg px-3">

    We have activities such as planning and designing supply chains, designing facilities, warehousing,transporting and distributing goods, processing orders, collecting payments, managing inventory and even providing certain aspects of customer service.
  </p>
   
  <Link className="pl-3 mt-8 text-blue-800 text-xl underline" to="/services/warehousing">Read more</Link>

</section>

<section className="mt-4 rounded-md pb-4 bg-white border mb-5 px-2 w-full md:w-2/6">
  <img src={Custom} alt="" />
  <h3 className="text-2xl mb-2 mt-4 font-semibold px-3 text-blue-900">Custom Brokerage</h3>
  <p className="text-lg px-3">
    Includes tarrif, custom laws, rules and regulatins for the clearance of imported and exported goods ro merchandise from custom authority; preparation of import and export documents including computation and payment duties, taxes and other charges accruing thereon.
  </p>
  <Link className="pl-3 mt-8 text-blue-800 text-xl underline" to="/services/custom">Read more</Link>

</section>
</div>

</section>

<section className="h-72 bg-gradient-to-br from-blue-950 to-black py-20 text-center px-4 text-gray-100 md:h-96">



<h2 className="text-3xl font-bold md:text-4xl md:mb-5 ">We Provide</h2>
<p className="text-lg mt-4 md:text-xl">The Best Sea And Air Freight Services.</p>
<p className="text-lg mb-4 md:text-xl">

You Can Book Your Shipping From any Country and you would be glad you did.
</p>

<div className="flex space-x-2 justify-center">

<button className=" bg-blue-500 text-white rounded-md py-2 md:w-1/6">
  Learn More
</button>

<button className="w-fit py-1 active:bg-red-400  rounded-md border-2 border-white px-1 md:w-1/6">
  Reach Out to Us Now
</button>
</div>



</section>

{/* 
<section className="text-center mt-4">
  <h3 className="text-3xl font-bold">What People Say</h3>
</section> */}


<section className="mt-5 px-3 py-3 md:flex md:w-4/5 md:flex-wrap md:mx-auto  md:justify-center md:space-x-3 mb-10">

  <div className="md:w-2/5">

 <h3 className="text-3xl font-bold">ASPIRATION & VISION</h3>
 <p>
 When we started out, our main aim was to help people reach where they wanted their product and goods move to. Which is why we're Addy Prime Logistics. Transport movement is our specialization. After 8 years of operations, we have changed from just delivering to making customers happy.
 </p>
 </div>


<div className="mt-4 md:w-2/5 md:mt-0">
  <h3 className="text-3xl font-bold">QUALITY POLICY</h3>
  <p>
  We have a dedication and are bind by this dedication to offer and deliver 100% of what our customer's bring to us. Your goods are delivered in good shape and in cases where goods are not delivered in good shape, kindly notify us of this situation and the faulty party will bear the loss.

  </p>
</div>

<div className="mt-4 md:w-2/5 ">
  <h3 className="text-3xl font-bold">STRENGTH</h3>
  <p>Our strength don't lie in the numbers of offices that we have worldwide, our strength doesn't lie in the number of staffs that we have, our strength doesn't lie in the number of transportation mechanisms that we have. It lies in the smile upon the faces of our customers and corporate bodies.</p>
</div>

<div className="mt-4 md:w-2/5 ">
  <h3 className="text-3xl font-bold">PROJECT SHIPPING</h3>
  <p>
  We accept challenging cargo projects with confidence, assuring a safe & optimal move every time. Our roster of projects include humanitarian airlifts to such remote regions as Sudan, Indonesia, Kosovo and Pakistan as well as moves of massive industrial equipment across continents.
  </p>
</div>
</section>


<section className=" bg-gradient-to-br from-blue-950 to-black text-white py-4 px-5 md:flex md:flex-row-reverse md:justify-center md:space-x-4">
  <section className="md:w-3/6 md:mt-12 md:ml-5">

  <h3 className="text-3xl md:mb-4">Send us a message</h3>
  <form className="md:flex md:flex-col">

  <Input label="Name" type="text" className="mb-3" placeholder="Enter your name" />
  <Input label="Subject" type="text" className="mb-3" placeholder="Enter Subject" />
  <Input label="email" type="email" className="mb-3" placeholder="Enter your email" name="" id="" />
  <Input label="Phone number" type="number" className="mb-3" placeholder="Enter your phone number" name="" id="" />
  <Input label="Message" type="text" className="mb-3" placeholder="Enter your message" />
  <Button className="block bg-blue-600 md:w-fit">Send Now</Button>
  </form>
  </section>

  <section className="md:w-1/5">



<div className="text-center mt-10"> 

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

  <h4 className="text-3xl">Address</h4>
  <p>
    North West Mudlands Mail Center, Sun Street, Wolverhampton, WV11AA
  </p>
</div>


<div className="text-center mt-10"> 


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>


  <h4 className="text-3xl">Phone</h4>
  <p>+44 7943 258552</p>
</div>

<div className="mt-10 text-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 mx-auto h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

  <h4 className="text-3xl">Email</h4>
  <p>info@asapprimelogistics</p>
</div>
</section>


</section>







    </>
  );
}
