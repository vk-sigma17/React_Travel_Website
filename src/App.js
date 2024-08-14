import React from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import Data from "./Data"

export default function App(){
  const dataElements = Data.map((item) => {
    return <Card 
        key={item.id}
        {...item}
    />
  })

  return (
    <div className="container">
      <Navbar />
      <section>

        {dataElements}
      </section>
    </div>
  )
}
