
import Page2Box from "./Page2Box";


const Page2 = () => {
  const dataCont =[
    {
      title: "Sind Sie ein Käseliebhaber?",
      desc: "Wir suchen Sie! Weitere Informationen sowie den Link zum Vorabinterview finden Sie hier.",
      color: '#9415301A'
    },
    {
      title: "Sie wurden von uns angerufen? / Informationen für Probanden",
      desc: "Mehr Informationen finden Sie hier.",
      color: '#80808026'
    }
  ];


  return (
    <section className="bg-[#EDEDF9] min-h-[400px] md:min-w-[1100px]">
      <div className="container mx-auto pt-[50px]">
        <ul className="grid gap-[50px] p-[40px] place-items-center md:place-items-start grid-cols-1 ">
          {dataCont.map((item) => (
            <Page2Box key={item.title} color={item.color} title={item.title} desc={item.desc} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page2;