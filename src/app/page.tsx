import Aside from '@/components/Aside';
import Banner from '@/components/Banner';
import CategoryList from '@/components/CategoryList';
import Header from '@/components/Header';
import RecentPost from '@/components/RecentPost';

export default function Home() {
  return (
    <>
      <Header />
      <section className='min-h-[calc(100vh-5rem)] mt-20 md:mt-28'>
        <div className='max-w-7xl w-full mx-auto'>
          <Banner />
          <CategoryList />
          <div className='flex gap-5'>
            <RecentPost />
            <Aside />
          </div>
        </div>
      </section>
    </>
  );
}
