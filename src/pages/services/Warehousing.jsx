import Wareh from "../../components/images/blog3.jpg" 


export default function Warehousing() {
  return (
   <>

           
<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">WAREHOUSING</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home/ </span> Services /  Warehousing</p>
</header>


<main className="px-3 mc:px-5 mb-5">

<h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">
    WAREHOUSE MANAGEMENT SYSTEM
</h2>


<div className="md:flex">
    <div>
        <p className="md:text-lg">
        At Addy Prime Logistics we offer a comprehensive suite of capabilities and work with a range of best-in-class software partners. Our state-of-the-art systems monitor and control all critical warehouse processes.
        </p>

        <p className="md:text-lg">

        They also provide support for transport and distribution operations and communicate with customs and other authorities. Moreover, unlike many of our competitors, our scale means we deploy a large number of these systems in any given year, you benefit therefore from this unrivalled experience and expertise.

        </p>


            <p className="md:text-lg">
            Warehouse management systems record all events and activities in the receipt, handling and storage of products and orders in the warehouse or distribution center, including the location of inventory.
            </p>
            

    </div>


    <img className="md:w-2/5" src={Wareh} alt="" />
</div>

</main>


   
   </>
  )
}
