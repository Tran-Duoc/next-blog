import Banner from '@/components/Banner';
import CategoryList from '@/components/CategoryList';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <section className='min-h-[calc(100vh-5rem)] mt-20 md:mt-28'>
        <div className='max-w-7xl w-full mx-auto'>
          <Banner />
          <CategoryList />
        </div>
      </section>
    </>
  );
}
