import React from "react";

import Styles from "./Home.module.css";

export default function Firstcomp() {
  return (
    <>
      <div className={Styles.firstSection}>
        <div className="px-2 absolute bottom-20 text-white">
          <div id="google_translate_element"></div>

          <h1 className="text-4xl font-bold">SHIP WORLDWIDE</h1>
          <p className="text-2xl italic">Transportation and logistics</p>
        </div>
      </div>
    </>
  );
}
