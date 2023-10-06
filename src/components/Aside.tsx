import React from 'react';
import Topic from './Topic';
import Menu from './Menu';

const asideApi = [
  {
    categoryType: 'Program',
    nameColor: 'program',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quaerat doloribus inventore ullam aliquam alias atque natus veritatis dolorem consequatur, similique amet quod delectus officia quas consequuntur dolore vitae!',
    date: '11.02.2023',
    author: 'TranDuoc',
  },
  {
    categoryType: 'Life',
    nameColor: 'life',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quaerat doloribus inventore ullam aliquam alias atque natus veritatis dolorem consequatur, similique amet quod delectus officia quas consequuntur dolore vitae!',
    date: '11.02.2023',
    author: 'TranDuoc',
  },
  {
    categoryType: 'Tips',
    nameColor: 'tips',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quaerat doloribus inventore ullam aliquam alias atque natus veritatis dolorem consequatur, similique amet quod delectus officia quas consequuntur dolore vitae!',
    date: '11.02.2023',
    author: 'TranDuoc',
  },
];

const Aside = () => {
  return (
    <div className='hidden lg:block flex-1'>
      <div className='flex flex-col mt-5  '>
        <span className='text-slate-600/60 dark:text-white'>
          What&apos;s host
        </span>
        <h2 className='text-2xl font-semibold'>Most Popular</h2>
        <div className='flex flex-col'>
          {[...asideApi].map((item, index) => {
            return (
              <div className='flex flex-col gap-2 mt-6' key={index}>
                <span
                  className={`px-2 py-1 rounded-full ${item.nameColor} text-center font-semibold  max-w-[100px] `}
                >
                  {item.categoryType}
                </span>
                <span className=' line-clamp-2'>{item.description}</span>
                <span className='text-base font-medium text-slate-600/50  dark:text-white flex'>
                  {item.date}{' '}
                  <span className='text-rose-600 ml-2'>{item.author}</span>
                </span>
              </div>
            );
          })}
        </div>
        <Topic />
        <Menu />
      </div>
    </div>
  );
};

export default Aside;
