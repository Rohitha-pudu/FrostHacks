import HeroCarousel from '@/components/HeroCarousel';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image';
import React from 'react'
import { getAllProducts } from '@/lib/actions';
import ProductCard from '@/components/ProductCard';
import Searchbar2 from '@/components/searchbar2';
import Link from 'next/link';
import { useRouter,Router } from 'next/router';
import { revalidatePath } from 'next/cache';
import Home from './amazon/page';


export const Home2 = async () => {
     const allProducts=await getAllProducts();

  return (
    <>
      <div className='container mb-20 pl-10 pr-10'>
      <div className='image'></div>
      <div className='text'>
        <h1 className="head-txt">Unlock Smart Shopping with every price detail</h1>
        <p className="body-txt">TrackWatch, your ultimate destination for seamless and insightful price tracking,<br></br> ensuring you never miss a deal again.</p>
      </div>
    </div>
 
    <p  className="home-text">Pick your shop <span>...</span></p>

<div className="mt-5 pl-6">
  <div className="mt-30">
    <Image
            src="/assets/images/Amazon.png"
            alt="arrow-right"
            className='x'
            width={270}
            height={270}
           
            />
</div>

            <div  className='flex pl-40'>
            <Link href={`/amazon`}>
             <button  type="button"/*  id='card-btn1' */ className="searchbar-btn">
            Track</button> 
            </Link>
            
           </div>
  </div>        
           <div>
          <Image
            src="/assets/images/myntra3.jpg"
            alt="arrow-right"
             width={376}
             height={376}
             className='y'
            />
            
             <button  type="button" id='card-btn2' className="searchbar-btn">
           Track
             </button>
             </div>
             
            <div> 
            <Image
            src="/assets/images/Flipkart-Emblem.jpg"
            alt="arrow-right"
             width={376}
             height={376}
             className='z'
            />
          
            <Link href={`/amazon`} className='product-card'>
             <button  type="button" id='card-btn3' className="searchbar-btn">Track</button>
             </Link>

             </div>

             <div>
            <Image
            src="/assets/images/untitled.jpg"
            alt="arrow-right"
             width={376}
             height={376}
             className='p'
            />
             <button  type="button" id='card-btn4' className="searchbar-btn">Track</button>
             </div>
             
             
       
   
             

    </>
  )
}

export default Home2;

