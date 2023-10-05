import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Banner = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-[80px]'>
        <b>Hi, I &apos; m Tran Duoc</b> Discover my stories and creative ideas.
      </h1>
      <div className='flex flex-row mt-10 items-center gap-5'>
        <Image
          src={'https://source.unsplash.com/random'}
          alt='this is image banner'
          className='object-cover bg-contain rounded-2xl'
          width={500}
          height={500}
        />
        <div className='flex flex-col '>
          <h1 className='text-[40px] font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className='text-lg font-normal text-slate-800/60 dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            quasi dolore, porro iste possimus hic dolorum laboriosam deleniti
            dolor vel, nobis et neque. Corporis iste, iure consectetur sit dolor
            cupiditate?
          </p>
          <div>
            <Button className='mt-5' size={'lg'}>
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
