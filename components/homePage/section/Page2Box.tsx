import React from 'react';

interface Page2BoxProps {
  title: string;
  desc: string;
  color: string;
}

const Page2Box: React.FC<Page2BoxProps> = ({ title, desc, color }) => {
  return (
    <div 
      style={{ backgroundColor: `${color}4D` }}  // Adding opacity
      className="min-h-[120px] rounded-lg shadow-md max-h-[350px]  w-[320px] md:w-[1000px]"
    >
      <div className='px-10 pt-5 '>
        <div>
          <h1 className=" flex pb-9 text-[30px]  text-zinc-700 md:pb-2  ">{title}</h1>
          <p className="flex text-lg opacity-[0.9] text-zinc-700">{desc}</p>
        </div>
        <div className="flex justify-end mb-3">
          <img src="/images/Arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page2Box;
