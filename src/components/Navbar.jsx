import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center">
      <Link href="/">
        <h1 className="text-3xl cursor-pointer">
          Find
          <span className="text-blue-700 font-bold"> Jobs</span>
        </h1>
      </Link>
      <ul className="hidden lg:flex flex-row gap-5 items-center text-[15px]">
        <li className="text-blue-700 font-semibold">Find Talent</li>
        <li>Hire Talent</li>
        <li>More Jobs</li>
      </ul>
      <div className="flex flex-row gap-3 list-none">
        <Link href="/sign-in">
          <li className="cursor-pointer hover:text-blue-700">Login</li>
        </Link>
        <li className="text-slate-700">|</li>
        <Link href="/sign-up">
          <li className="cursor-pointer hover:text-blue-700">SignUp</li>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;