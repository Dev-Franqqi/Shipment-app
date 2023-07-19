import Custom from "../../components/images/custom.png"

export default function Customb() {
  return (
    <>
    
<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">CONTRACT BROKERAGE</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home</span> Services / Custom Brokerage</p>
</header>
   


<main className="px-3 md:px-5 mb-5">

    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">
        CUSTOM BROKERAGE
    </h2>

    <div className="md:flex">

    <div className="text-gray-500 md:text-lg">
        <p className="md:text-lg">
        Customs brokerage refers to the services provided by professionals or companies that facilitate the import and export of goods across international borders. These experts, known as customs brokers or custom house agents, help individuals and businesses navigate the complex procedures and regulations associated with customs clearance.


        </p>

        <p className="md:text-lg">

        Customs brokers play a crucial role in ensuring smooth and efficient movement of goods through customs checkpoints. They possess specialized knowledge of import and export laws, tariffs, duties, and various regulatory requirements imposed by the customs authorities of different countries.

        </p>

        <p className="md:text-lg">
            
Engaging the services of a customs broker offers several benefits, including expertise in navigating complex customs procedures, minimizing the risk of errors or delays, and ensuring compliance with applicable regulations. By leveraging their knowledge and experience, customs brokers help businesses and individuals streamline international trade operations and avoid costly penalties or disruptions in the supply chain.

        </p>
    </div>
    <img className="md:w-2/5" src={Custom} alt="" />
    </div>

</main>
    
    </>
  )
}
