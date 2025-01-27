// src/components/Banner.js
import React from 'react';
import { Container} from 'react-bootstrap';
import perfumeImage from './images/hero.png'



function Banner() {
  return (
    <div className='bg-zinc-900  w-100vb'>
      {/* <hr className='text-zinc-700'></hr> */}
      <section class="bg-white dark:bg-zinc-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">A Fragrance That Defines You</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Immerse yourself in a world of captivating scents with our exclusive perfume range. Whether it's floral, woody, oriental, or fresh, we have something for everyone.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 hover:text-emerald-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Featured: Top 5 Must-Have Perfumes of 2025
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Shop Now !
            </a> 
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={perfumeImage} alt="mockup"></img>
        </div>                
    </div>
</section>
    </div>
  );
}

export default Banner;
