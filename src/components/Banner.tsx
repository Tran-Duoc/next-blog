import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='flex flex-col px-4 lg:px-0 pt-5'>
      <h1 className='text-4xl lg:text-7xl'>
        <b>Hi, I &apos; m Tran Duoc</b> Discover my stories and creative ideas.
      </h1>
      <div className='flex lg:flex-row md:mt-10  mt-5 items-center  md:items-start gap-5 flex-col-reverse'>
        <Image
          src={'https://source.unsplash.com/random'}
          alt='this is image banner'
          className='object-cover bg-contain rounded-2xl'
          width={500}
          height={500}
        />
        <div className='flex flex-col '>
          <h1 className='lg:text-[40px] text-3xl font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <span className='text-lg font-normal text-slate-800/60 dark:text-white mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            quasi dolore, porro iste possimus hic dolorum laboriosam deleniti
            dolor vel, nobis et neque. Corporis iste, iure consectetur sit dolor
            cupiditate?
          </span>
          <div>
            <Link href={'/blog/1000'}>
              <Button className='mt-5' size={'lg'}>
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
