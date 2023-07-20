import Raill from "../../components/images/blog5.jpg" 


export default function Railway() {
  return (
    <>

             
<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">RAILWAY</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home/ </span> Services /  Railway</p>
</header>


<main className="px-3 md:px-6 mb-5">

    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">RAILWAY/ROAD</h2>

    <div className="md:flex">
        <div>
            <p className="md:text-lg text-gray-500">
            Addy Prime Logistics has a flexible, reliable and efficient overland transportation offering, including Road, Rail and Intermodal Services. We have a global capability with services operating in Europe, North Africa, Middle East, Asia Pacific and Americas.

            </p>
        </div>
        <img className="md:w-2/5" src={Raill} alt="" />
    </div>
</main>

    
    
    </>
  )
}
