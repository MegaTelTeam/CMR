import React from 'react';
import Image from 'next/image';

interface Page1BoxProps {
  desc: string;
  icon: string;
}

const Page1Box: React.FC<Page1BoxProps> = ({ desc, icon }) => {
  return (
    <div>
      <div className='w-[50px] h-[50px] mb-[40px]'>
        <Image className='w-full h-full' src={`/images/${icon}`} alt="" width={50} height={50} />
      </div>
      <div>
        <p className='font-medium opacity-[0.8] text-[17px] pb-[15px] text-lg max-w-[400px]'>{desc}</p>
      </div>
    </div>
  );
}

export default Page1Box;
