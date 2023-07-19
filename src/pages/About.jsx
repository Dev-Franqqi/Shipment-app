
import Abou from "../components/images/about1.jpg"

export default function About() {
  return (
<>


<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">About Us</h1>

    <p className="font-semibold">Home  /  About ASAP Prime Logistics</p>
</header>


<main className="px-3 ">
  <div className="md:flex">
  <div className="md:px-5" >

    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">About ASAP Prime Logistics</h2>


    <p className="text-gray-500 md:text-lg">
    We are deeply proud of the contribution we can make in our daily work. Everything that is moved from one place to another needs the aid of logistics but behind this simple truth one finds millions of stories.

    </p>
    <p className="text-gray-500 md:text-lg mt-3">
    As the logistics company for the world, we form the backbone of trade, ensuring that whatever needs to be delivered, gets delivered. A shipment placed in our trust may include life saving medicines, or a birthday present from a friend, or hold a company's entire existence in the form of a prototype.
    </p>
    <p className="text-gray-500 md:text-lg">
    We not only deliver parcels and packages, and make sure containers arrive at ports: we deliver prosperity, we transport health, we power growth, we deliver joy. Every day we connect people, improving their lives.

    </p>
  </div>

    <img src={Abou} className="border-white rounded-md mb-3 border-8 w-2/5" alt="" />

    </div>
      <div className="px-3 md:text-lg md:mt-5 md:mb-5">

    <h3 className="mt-2 text-2xl mb-4 text-blue-950 font-semibold tracking-wide md:text-3xl md:mt-6">CORPORATE RESPONSIBILITY</h3>
    <p className="text-gray-500 md:text-lg">
    Corporate Responsibility is an integral part of our corporate strategy. With Living Responsibility as our motto, we focus on environmental protection (GoGreen), disaster management (GoHelp) and education (GoTeach) and support employee volunteerism (Global Volunteer Day, Living Responsibility Fund).
    </p>
    </div>

</main>
    


</>
  )
}
