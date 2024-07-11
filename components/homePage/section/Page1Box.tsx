import React from 'react';
import Image from 'next/image';

interface Page1BoxProps {
  desc: string;
  icon: string;
}



function Page1Box({ desc, icon }: Page1BoxProps) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="mb-[40px] flex justify-center md:justify-start">
        <Image  src={`/images/${icon}`} alt="" width={50} height={50} />
      </div>
      <div>
        <p className="font-medium opacity-80 text-[17px] pb-[15px] text-lg max-w-[400px] text-center md:text-left"> {/*   /to do fonts */}
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Page1Box;
