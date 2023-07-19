
import Airfr from "../../components/images/blog2.jpg"

export default function Air() {
  return (
    <>
    
           
<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">AIR FREIGHT</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home/ </span> Services /  Air Freight</p>
</header>



<main className="px-3 md:px-5 mb-5">
    
    
    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">AIR FREIGHT</h2>


    <div className="md:flex">

        <div className="text-gray-500 ">
            <p className="md:text-lg">
            AIR FORWARD is a category of products that predominately use an air mode and offers a choice in delivery speeds to best suit customer requirements.


            </p>

            <p className="md:text-lg">
            Working together with carefully selected carriers, we operate with schedules on all the worlds major routes so you can plan with certainty for greater efficiency.



            </p>

            <p className="md:text-lg">
            Our AIR FORWARD offer is also highly flexible to meet specific customer requirements. While door to door is our standard offering, airport to airport, door to airport and airport to door options are also available.


            </p>
        </div>
        <img className="md:w-2/5" src={Airfr} alt="" />
    </div>
    
    
    
    
    </main></>
  )
}
