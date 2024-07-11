


import Page1Box from "./Page1Box";

const Page1 =() => {
  const dataCont = [
    {
      icon: "icon1.svg",
      desc: "Globalisierung und der Übergang zur Informationsgesellschaft gehen mit einem tiefgreifenden Wandel an gesellschaftlichen und ökonomischen Prozessen einher.",
    },
    {
      icon: "icon2.svg",
      desc: "Fundierte Informationen und deren Ableitungen  gewinnen für den Erfolg von Unternehmen umso mehr an Bedeutung, je spezifischer eine Zielgruppe oder je gesättigter Märkte sind.",
    },
    {
      icon: "icon3.svg",
      desc: "Marktforschung kann die richtigen Fragen stellen und Informationen liefern, die die Grundlage für Ihre Entscheidungen sind.",
    },
  ];
  return (
    <section className="pt-[190px] mb-[40px] ">
      <div className="container mx-auto  ">
        <div className="text-center text-[40px] font-bold">
          <h1 className="text-gradient ">Für die richtige Entscheidung </h1> {/*   /to do fonts */}
        </div>
        <div className="pt-[100px] px-[20px] pb-[100px]">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
            {dataCont.map((item) => (
              <Page1Box key={item.icon} desc={item.desc} icon={item.icon} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page1;