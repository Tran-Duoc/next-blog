import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex max-w-7xl w-full mx-auto mt-10 pb-32 px-4 flex-col  lg:flex-row'>
      <div className='flex-1 flex flex-col'>
        <div className='flex gap-5 items-center'>
          <Image
            src='https://source.unsplash.com/random'
            width={100}
            height={100}
            className='object-cover w-14 h-14 rounded-full'
            alt='this is avatar'
          />
          <span className='text-2xl font-medium'>TranDuoc</span>
        </div>
        <span className='mt-4 text-slate-600 dark:text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          eius tenetur nam modi a consequuntur aliquid, sint culpa distinctio,
          mollitia iure? Inventore, libero. Ea fugiat animi esse incidunt vel
          minima?
        </span>
      </div>
      <div className='flex-1 '>
        <div className='w-full flex flex-row items-start lg:justify-center justify-start gap-10 mt-10 lg:mt-0'>
          <div className='flex flex-col'>
            <h2 className='text-xl font-semibold pb-5'>Links</h2>
            <Link href={'/'} className='hover:underline text-lg my-2'>
              HomePage
            </Link>
            <Link href={'/'} className='hover:underline text-lg my-2'>
              Blog
            </Link>
            <Link href={'/'} className='hover:underline text-lg my-2'>
              Contact
            </Link>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl font-semibold pb-5'>Tag</h2>
            <Link href={'/'} className='hover:underline text-lg my-2'>
              Program
            </Link>
            <Link href={'/'} className='hover:underline text-lg my-2'>
              Life
            </Link>
            <Link href={'/'} className='hover:underline text-lg my-2'>
              Technicals
            </Link>
            <Link href={'/'} className='hover:underline text-lg my-2'>
              Tips
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
