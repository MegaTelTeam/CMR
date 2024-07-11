import React from 'react';

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    
    <div className={`flex justify-center text-[36px] font-bold ${className}`}>
      <p className='text-gradient'>{title}</p>
    </div>
  );
}

export default Title;
