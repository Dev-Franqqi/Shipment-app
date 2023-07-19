import Office from "../components/images/office.jpg"
export default function Contact() {
  return (
    <>
    
    
<header className="bg-gradient-to-br from-blue-950 to-black text-white text-center py-12 ">
    <h1 className="text-2xl mb-1 font-bold md:text-4xl">Contact Us</h1>

    <p className="font-semibold"> <span className="text-gray-400">Home</span>  /  Contact</p>
</header>


<main className="text-gray-500 mb-3 px-3 mt-5">
    
    <h2 className="text-gray-500 text-lg font-semibold">CONTACT DETAILS</h2>
    <h3 className="text-bg-950 text-2xl font-semibold">Our Office</h3>

    <div className="md:flex md:space-x-10">

    <img className="mt-3 mb-4 border-8 border-white rounded-md w-2/5" src={Office} alt="" />
        <div>

    <div className="w-3/5 mt-5">

    <h4 className="font-semibold text-blue-950 text-xl">Office Address</h4>
     <p>North West Midlands Mail Center, Sun Street, Wolverhampton, WV1 1AA</p>

     <p><a href="mailto:info@asapprimelogistics">info@asapprimelogistics</a></p>
    
    <a href="http://wa.me/+447943268552">+44 7043 258552</a>
    
    </div>


    <div className="mb-5 mt-5 w-3/5">
        <h4>Business Hours</h4>

        <p>
            Mon -Thu: 8:30AM - 6:00pm
        </p>
        <p>
            Fri: 9:00AM - 5:30PM
        </p>

        <p>
            Sat: 10:00AM - 4:00PM
        </p>
    </div>

    <div>
        <div>


            <p>
                CALL TODAY:
                <span className="text-sky-500">   +44 7943 258552</span>
            </p>

            <p>
                EMAIL US:
                <span className="text-sky-500">  info@asapprimelogistics
                </span>
            </p>
        </div>
    </div>
    </div>

    </div>



</main>

</>
  )
}
