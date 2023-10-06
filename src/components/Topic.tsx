import React from 'react';
import { categoryApi } from './CategoryList';

const Topic = () => {
  return (
    <div className='flex flex-col mt-10 w-full'>
      <div className='flex flex-col'>
        <span className='text-slate-600/60 text-base dark:text-white'>
          Discover by topic
        </span>
        <h1 className='text-xl font-semibold '>Categories</h1>
      </div>
      <div className='flex flex-wrap gap-3 mt-5 '>
        {[...categoryApi].map((item, index) => {
          return (
            <div
              key={index}
              className={`  max-w-[150px] text-center w-full py-4 rounded-xl gap-10  ${item.nameColor} hover:shadow-2xl duration-300`}
            >
              <span className='text-lg font-bold'>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topic;
