import React from 'react';

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
    <div className='flex flex-col mt-5 flex-1 '>
      <p className='text-slate-600/50'>What&apos;s host</p>
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
              <p className=' line-clamp-2'>{item.description}</p>
              <p className='text-base font-medium text-slate-600/50 flex'>
                {item.date} <p className='text-rose-600 ml-2'>{item.author}</p>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aside;
