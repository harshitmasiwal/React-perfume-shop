
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function NavigationBar() {
  return (
    <div className=' p-4 bg-zinc-900 text-emerald-400 flex items-center justify-between'>

        <h1 className='lg:text-2xl  text-emerald-500 font-extrabold tracking-tight leading-nonetext-xl'>The Perfume Co. </h1>

        <div className='links flex lg:gap-10 gap-0.5'>
            <a className='ml-1 underline-none hover:underline hover:text-amber-300 duration-600' href="/">Home</a>
            <a className='ml-1 hover:underline hover:text-amber-300 duration-600' href="/about">About</a>
            <a className='ml-1 hover:underline hover:text-amber-300 duration-600' href="/contact">Contact</a>
            <div className=' bg-yellow-400 rounded-full w-6 h-6 animate-ping text-center'>❤️</div>
        </div>
        
    </div>
  );
}



export default NavigationBar;






