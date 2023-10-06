import Aside from '@/components/Aside';
import CategoryList from '@/components/CategoryList';
import RecentPost from '@/components/RecentPost';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-7xl w-full mx-auto pt-5 flex flex-col'>
      <div className='text-center bg-slate-900 text-white py-3 rounded-2xl'>
        <h2 className='text-4xl font-semibold'>Blogs</h2>
      </div>
      <div>
        <CategoryList />
      </div>
      <div className='flex flex-row gap-10'>
        <RecentPost />
        <Aside />
      </div>
    </div>
  );
};

export default page;
