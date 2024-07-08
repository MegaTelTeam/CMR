"use client"

import { useState } from "react";
import Page2Box from "./Page2Box";


const Page2 = () => {
  const [dataCont, setData] = useState([
    {
      title: "Sind Sie ein Käseliebhaber?",
      desc: "Wir suchen Sie! Weitere Informationen sowie den Link zum Vorabinterview finden Sie hier.",
      color:'#fecaca'
    },
    {
      title: "Sie wurden von uns angerufen? / Informationen für Probanden",
      desc: "Mehr Informationen finden Sie hier.",
      color:'#9ca3af'
    },
  
  ]);

  return (
    <section className="bg-violet-200 bg-opacity-40 min-h-[500px] ">
      <div className="container mx-auto pt-[50px] ">
        <ul className=" grid gap-[20px] ">
        {dataCont.map((item)=>(
          <Page2Box key={item.title} color={item.color} title={item.title} desc= {item.desc}/>
        ))}
        </ul>
      
      </div>
    </section>
  );
};

export default Page2;
