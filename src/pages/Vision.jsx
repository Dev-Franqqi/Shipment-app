import Wareh from "../components/images/blog3.jpg";

export default function Vision() {
  return (
    <>
      <header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
        <h1 className="text-2xl mb-1 font-bold md:text-4xl">Our Vision</h1>

        <p className="font-semibold">Home / Vision Asap Prime Logistics</p>
      </header>
      <main className="px-3 py-10 text-gray-500 md:flex">
        <div className="md:px-5">
          <h2 className="text-blue-950 text-2xl font-semibold mb-5 md:text-4xl">
            Our Vision
          </h2>

          <p className="md:text-xl">
            Our vision is to establish ourselves as the best logistics service
            provider by garnering the respect of our shippers and developing
            successful and satisfied customers and employees by focusing on our
            niche: re-engineering the approach to solving our customers
            logistics processes and freight management needs, especially those
            who ship freight via less-than-truckload (LTL).
          </p>
        </div>

        <img
          className="border-8 border-white rounded-md mb-10 md:w-2/5 md:rounded-md md:border-8"
          src={Wareh}
          alt=""
        />
      </main>
    </>
  );
}
