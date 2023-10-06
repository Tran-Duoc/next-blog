import Image from 'next/image';
import React from 'react';

export const categoryApi = [
  {
    name: 'Program',
    image: 'https://source.unsplash.com/random',
    nameColor: 'program',
  },
  {
    name: 'Technical',
    image: 'https://source.unsplash.com/random',
    nameColor: 'technical',
  },
  {
    name: 'Tips',
    image: 'https://source.unsplash.com/random',
    nameColor: 'tips',
  },
  {
    name: 'Life',
    image: 'https://source.unsplash.com/random',
    nameColor: 'life',
  },
];

const CategoryList = () => {
  return (
    <div className='py-5 flex-flex-col gap-2 mt-5 w-full px-4 lg:px-0'>
      <h2 className='text-3xl font-semibold'>Popular Categories</h2>
      <div className='flex flex-wrap flex-row gap-4 py-5 '>
        {[...categoryApi].map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-1 items-center justify-center h-36   min-w-[250px] ${item.nameColor} rounded-2xl hover:shadow-xl shadow-slate-900`}
            >
              <Image
                src={item.image}
                alt='this is category image icon'
                width={30}
                height={30}
                className='rounded-full object-fill w-8 h-8'
              />
              <span className='font-medium ml-5'> {item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
