import React from 'react';

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    
    <div className={`flex justify-center text-[36px] font-bold ${className}`}>
      <p className='text-4xl font-extrabold bg-gradient-to-r from-cmr-gray-500 to-cmr-red-500 bg-clip-text text-transparent'>{title}</p>
    </div>
  );
}

export default Title;
