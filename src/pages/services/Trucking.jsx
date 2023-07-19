import Trucki from "../../components/images/blog6.jpg"


export default function Trucking() {
  return (
<>
<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">TRUCKING</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home</span> Services /  Trucking</p>
</header>


<main className="px-3">

    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">TRUCKING /ROAD</h2>

    <div className="flex"> 

        <div className="">
            <p className="text-gray-500 md:text-lg">
            At Addy Prime Logistics Ltd there’s no such thing as one-size-fits-all solution as our diverse and demanding client base would testify. With our strategically placed depots and our expanding modern fleet consisting of over 60 trucks, we will find the right transportation solution for your specific needs.
            </p>

            <p className="text-gray-500 md:text-lg">

            Our extensive knowledge and four decades in the business, allows us to provide a reliable, flexible and professional service, giving you options to meet your capacity, cost and delivery date requirements.
            </p>

            <ul className="md:text-lg text-gray-500">
                <li>Round the clock service nationally and internationally</li>

                <li>
                    Expanding fleet of vehicles for all road haulage work
                </li>

                <li>
                    Loads of up to 44 tonnes transported to anywhere in the UK or Internationally
                </li>
                <li>
                    Contractual arrangements adn one off haulage work available
                </li>
            </ul>
        </div>

        <img className="md:w-2/5" src={Trucki} alt="" />
    </div>


</main>


</>
  )
}
