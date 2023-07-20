
import Door from "../../components/images/door.png"

export default function Doort() {
  return (<>
    <header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">TRUCKING</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home/ </span> Services /  Door To DOor Delivery</p>
</header>


<main className="px-3 md:px-5 mb-5">
    <h2 className="mt-5 text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">DOOR TO DOOR DELIVERY</h2>

    <div className="text-gray-500 md:flex md:px-2">

        <div>
            <p className="md:text-lg">

            Door-to-door delivery ensures convenience as you don't have to worry about coordinating with multiple parties or making extra trips to pick up your packages. Whether you are receiving a small parcel or a large shipment, the delivery person will bring it directly to you, eliminating the need for you to travel or rearrange your schedule.



            </p>

            <p className="md:text-lg">
            This service provides peace of mind. You can track the progress of your package, knowing exactly when it will arrive. Many delivery companies offer real-time tracking systems or notifications, allowing you to stay informed about the whereabouts of your shipment and plan accordingly.

            </p>

            <p className="md:text-lg">

            Additionally, door-to-door delivery enhances security. By entrusting the responsibility of transporting your packages to professionals, you can be confident that they will be handled with care and delivered safely to your doorstep. Reputable courier services have stringent security measures in place, ensuring the protection of your valuable items.

            </p>
        </div>
        <img className="md:w-2/5" src={Door} alt="" />
    </div>
</main>
</>

  )
}
