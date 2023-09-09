import Ship from "../../components/images/blog1.jpg";

export default function Oceanpage() {
  return (
    <>
      <header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
        <h1 className="text-2xl mb-1 font-bold md:text-4xl">SEA FREIGHT</h1>

        <p className="font-semibold">
          {" "}
          <span className="text-gray-400">Home/ </span> Services / Sea Freight
        </p>
      </header>

      <main className="px-3 md:px-5">
        <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">
          OCEAN/ SEA FREIGHT
        </h2>

        <div className="md:flex">
          <div>
            <p className="md:text-lg">
              With our broad range of Ocean Freight products covering different
              equipment types and consolidation services, we ensure your cargo
              reaches the right place, at the right time in a cost-efficient
              way.
            </p>

            <p className="md:text-lg">
              We work with a spread of ocean carriers covering major carrier
              alliances with planned space protection from every major container
              port in the world to deliver reliability.
            </p>

            <p className="md:text-lg">
              Naturally, our expertise also includes focused and professional
              handling of all conventional cargo transportation.
            </p>

            <p className="md:text-lg">
              OCEAN FORWARD - As one of the largest Ocean Freight service
              providers for Full Container Load (FCL) and Less-than-Container
              Load (LCL) shipments, we currently handle in excess of 2.8 million
              TEU’s and more than 2 million cubic meters of LCL freight
              annually, across all continents.
            </p>
          </div>

          <img className="md:w-2/5" src={Ship} alt="" />
        </div>
      </main>
    </>
  );
}
