'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const RecentPost = () => {
  return (
    <div className='flex flex-col mt-5 max-w-4xl w-full pr-10 px-4 lg:px-0'>
      <h2 className='text-3xl mb-5  font-semibold'>Recent Posts</h2>
      <div className='flex flex-col gap-10'>
        {Array(3)
          .fill(0)
          .map((_item, index) => {
            return (
              <div className='flex md:flex-row flex-col gap-4 ' key={index}>
                <Image
                  src='https://source.unsplash.com/random'
                  alt='this is image recent post'
                  className='rounded-2xl hidden lg:block'
                  width={420}
                  height={500}
                />
                <div className='flex flex-col items-start justify-between'>
                  <span className='flex flex-row text-lg font-medium'>
                    11.02.2023{' '}
                    <span className='text-rose-500 ml-4'>Tranduoc</span>
                  </span>

                  <h2 className='lg:text-3xl text-2xl font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h2>
                  <span className='text-justify line-clamp-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur sequi dolorem laboriosam, nisi nesciunt alias
                    rerum sit ut eligendi tempore, non saepe voluptate iusto
                    voluptatem autem suscipit quae magnam sed.
                  </span>
                  <Link href='/blog/1234'>
                    <Button className='mt-5 lg:mt-0'>Read more</Button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div className='flex items-center justify-between mt-10'>
        <Button className='px-10'>Prev</Button>
        <Button className='px-10'>Next</Button>
      </div>
    </div>
  );
};

export default RecentPost;
