import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <div className='h-screen flex items-center justify-center'>{children}</div>
  );
};

export default layout;
