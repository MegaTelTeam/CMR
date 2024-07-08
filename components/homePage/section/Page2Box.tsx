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
      className="min-h-[120px] rounded-lg shadow-md"
    >
      <div className='px-10 pt-5'>
        <div>
          <h1 className="text-[20px] font-semibold text-zinc-700">{title}</h1>
          <p className="text-lg text-zinc-700">{desc}</p>
        </div>
        <div className="flex justify-end mb-3">
          <img src="/images/Arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page2Box;
