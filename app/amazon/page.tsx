
import HeroCarousel from '@/components/HeroCarousel';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image';
import React from 'react'
import { getAllProducts } from '@/lib/actions';
import ProductCard from '@/components/ProductCard';
import Card from '@/components/card';
import Link from 'next/link';


export const Home = async () => {
     const allProducts=await getAllProducts();
   
  return (
    <>
     {/* <div className='container mt-10 mb-20'>
      <div className='image'></div>
      <div className='text'>
        <p>Your Content Here</p>
      </div>
    </div>
    <h3>Your Choice's</h3>
    <Link href={`/amazon`} className='product-card'>nk</Link>
    <Image
            src="/assets/images/Flipkart-Emblem.jpg"
            alt="arrow-right"
             width={376}
             height={376}
            />
            

          <Image
            src="/assets/images/myntra.jpg"
            alt="arrow-right"
             width={376}
             height={376}
            />
            <Image
            src="/assets/images/untitled.jpg"
            alt="arrow-right"
             width={376}
             height={376}
            />
            <Image
            src="/assets/images/meesho.jpg"
            alt="arrow-right"
             width={376}
             height={376}
            />


 */}
    <section className="px-5 md:px-20 py-24">
     <div className="flex max-xl:flex-col gap-16">
      <div className='flex flex-col justify-center'>

        <p className="small-text">
            Where prices meet precision.
            <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
             width={16}
             height={16}
            />
        </p>
        <h1 className="head-text">
          Unleash the power of
         <span className="text-[#000000]">  PriceWatch</span>
        </h1>
        <p className="mt-6">
        Price tracking made easy: find, compare, save.Never miss a price drop again
        </p>
        <Searchbar />
        
      </div>
      <HeroCarousel />
     </div>
    </section>
    <section className="trending-section">
      <h2 className="section-text"> Trending</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {allProducts?.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}
      </div>
      
    </section>
    </>
  )
}

export default Home;