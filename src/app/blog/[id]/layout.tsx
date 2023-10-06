import Header from '@/components/Header';
 
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
   
  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-5rem)] mt-20 md:mt-28'>{children}</div>
    </>
  );
};

export default layout;
