import React from 'react'
import loader from "../../public/icons/loading.png";
import Image from 'next/image';

const loading = () => {
  return (
    <div className='w-full h-screen flex flex-row items-center justify-center'>
      <Image src={loader} className="w-10 h-10 rounded-full animate-spin" alt="loading"/>
    </div>
  );
}

export default loading