import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const RecentPost = () => {
  return (
    <div className='flex flex-col mt-5 max-w-4xl w-full pr-10'>
      <h2 className='text-3xl mb-5  font-semibold'>Recent Posts</h2>
      <div className='flex flex-col gap-10'>
        {Array(3)
          .fill(0)
          .map((_item, index) => {
            return (
              <div className='flex flex-row gap-4' key={index}>
                <Image
                  src='https://source.unsplash.com/random'
                  alt='this is image recent post'
                  className='rounded-2xl'
                  width={420}
                  height={500}
                />
                <div className='flex flex-col items-start justify-between'>
                  <p className='flex flex-row text-lg font-medium'>
                    11.02.2023 <p className='text-rose-500 ml-4'>Tranduoc</p>
                  </p>

                  <h2 className='text-3xl font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h2>
                  <p className='text-justify line-clamp-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur sequi dolorem laboriosam, nisi nesciunt alias
                    rerum sit ut eligendi tempore, non saepe voluptate iusto
                    voluptatem autem suscipit quae magnam sed.
                  </p>
                  <Button>Read more</Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RecentPost;
