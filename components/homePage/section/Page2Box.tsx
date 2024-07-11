

import Image from 'next/image';

interface Page2BoxProps {
  title: string;
  desc: string;
  color: string;
}

const Page2Box = ({ title, desc, color }: Page2BoxProps) => {
  return (
    <div 
      style={{ backgroundColor: color }}
      className="w-[260px] h-[349px] max-w-sm  md:w-[1000px] md:max-w-4xl px-4 md:h-[90px] my-4 rounded-lg shadowBox "  // This line has some issues
    >
      <div className="w-full h-full px-4 py-4 flex flex-col justify-between md:flex-row md:px-6">
        <div className="flex-1">
           <h1 className="text-xl leading-[48px] md:text-2xl md:leading-tight">{title}</h1>         {/*   /to do fonts */}
          <p className="text-sm leading-[28px] mt-2">{desc}</p>  {/*   /to do fonts */}
        </div>
        <div className="flex justify-end items-center">
          <Image width={20} height={20} src="/images/Arrow.svg" alt="Arrow icon" />
        </div>
      </div>
    </div>
  );
}

export default Page2Box;
