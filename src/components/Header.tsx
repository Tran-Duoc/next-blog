'use client';
import React from 'react';
import { ModeToggle } from './ToggleMode';
import { Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { UserButton, useUser } from '@clerk/nextjs';

const navApi = [
  {
    name: 'HomePage',
    link: '/',
  },
  {
    name: 'Blog',
    link: '/',
  },
  {
    name: 'Contact',
    link: '/',
  },
];

const Header = () => {
  const { user } = useUser();

  return (
    <section className='py-4 fixed top-0 left-0 right-0 bg-white'>
      <header className='flex items-start justify-between max-w-7xl mx-auto px-3 lg:px-0'>
        <div className='flex gap-2 items-center'>
          <Link href={'/'}>
            <Facebook className='text-white bg-blue-600 w-10 h-10 p-2 rounded-xl' />
          </Link>
          <Link href={'/'}>
            <Youtube className='text-white bg-red-600 w-10 h-10 p-2 rounded-xl' />
          </Link>
        </div>
        <div className='hidden md:block'>
          <div className='flex flex-col items-center justify-center'>
            <Link href={'/'}>
              <h2 className='text-2xl md:text-4xl font-semibold'>
                TranDuocBlog
              </h2>
            </Link>

            <nav className=' pt-5  gap-20 font-medium text-xl '>
              {[...navApi].map((item, index) => {
                return (
                  <Link
                    href={item.link}
                    key={index}
                    className='hover:underline duration-300 mx-10'
                  >
                    {item.name.toString()}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <ModeToggle />
          {user ? (
            <UserButton afterSignOutUrl='/' />
          ) : (
            <Button asChild>
              <Link href={'/sign-in'}>Login</Link>
            </Button>
          )}
        </div>
      </header>
    </section>
  );
};

export default Header;
