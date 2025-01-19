import React from 'react';
import InputSearch from './utills/InputSearch';

const Header = () => {
  return (
    <header className="w-full mt-5 flex flex-row items-center justify-center bg-gradient-to-r from-blue-400 to-blue-900 px-2 py-10 rounded-lg">
      <div className='text-center lg:px-10 flex flex-col gap-4 text-white'>
        <h1 className='text-2xl lg:text-4xl'>Find Your Suited Jobs here</h1>
        <p className='max-sm:line-clamp-2 text-[15px] font-light max-w-[800px]'>
          Discover your dream job with ease! Filter opportunities by location
          and keyword to find the perfect fit for your career. Start exploring
          now and take the first step toward your future
        </p>
        <InputSearch/>
      </div>
    </header>
  );
}

export default Header;