
import Packg from "../../components/images/blog4.jpg" 

export default function Package() {
  return (
  <>
  <header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">PACKAGING</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home</span> Services /  Packaging</p>
</header>

  <main className="px-3 md:px-5">

    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">
        VALUE ADDED SERVICES
    </h2>

    <div className="md:flex">
        <div className="text-gray-500">
            <p className="md:text-lg">
            Addy Prime Logistics dedicated and shared user warehousing solutions are not just about holding stock. There are a wide range of additional services that we offer, as part of an overall solution that can improve the performance of your supply chain.
            </p>

            <p className="md:text-lg">
                
From sub-assembly, packaging services, customization, postponement, kitting, sequencing to pre retail activities across all industry sectors, we help you reduce costs, reduce inventories, and better match supply with demand. Co locating these services alongside the storage of your products not only saves money but removes steps in the supply chain.

            </p>




            <p className="md:text-lg">

            The elimination of transportation time to a packaging facility means you can reduce your lead times and decrease your inventory. And by having Addy Prime Logistics form all these activities you receive the same visibility and operational excellence that you have grown to expect from the market leader in contract logistics.
            </p>

        </div>

        <img className="md:w-2/5" src={Packg} alt="" />
    </div>

  </main>
  </>
  )
}
