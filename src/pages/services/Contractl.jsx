import Contract from "../../components/images/contract.jpg"

export default function Contractl() {
  return (
   <>

<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">CONTRACT LOGISTICS</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home</span> Services / Contract Logistics</p>
</header>
   

   <main className="px-3 md:px-5">
    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">CONTRACT LOGISTICS</h2>

    <div className="md:flex ">
        <div className="text-gray-500 md:text-lg">
            <p>
            In contract logistics, companies partner with specialized logistics providers to optimize their supply chain processes and achieve operational efficiency. The logistics provider assumes responsibility for specific logistics functions, allowing the client company to focus on its core competencies and providers offer a range of services tailored to meet the unique requirements of each client.
            </p>

            <p>
            By outsourcing logistics functions to experts in the field, companies can benefit from several advantages. Contract logistics providers bring expertise, infrastructure, and technology to streamline operations, enhance visibility, and improve overall supply chain performance. They have the ability to scale resources according to demand fluctuations, which helps companies reduce costs and improve flexibility.
            </p>

            <p>
            Contract logistics enables companies to tap into a global network of distribution centers and transportation modes, facilitating efficient movement of goods across different geographies. This becomes especially crucial for companies operating in international markets or dealing with complex supply chain requirements.
            </p>
        </div>
        <img className="md:w-2/5" src={Contract} alt="" />
    </div>
   </main>
   </>
  )
}
