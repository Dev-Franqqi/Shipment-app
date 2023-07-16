import React from 'react'
import Translate from "./Translate";

import Styles from "./Home.module.css";

export default function Firstcomp() {
  return (
   <>

         <div className={Styles.firstSection}>



  <div className="px-2 absolute bottom-20 text-white">


   <Translate />
    <h1 className="text-4xl font-bold">SHIP WORLDWIDE</h1>
    <p className="text-2xl italic">Transportation and logistics</p>

    </div>
    

  </div>

   
   </>
  )
}
