"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";

const InputSearch = () => {

  const [query,setQuery]=useState('');

  return (
    <form className="relative flex items-center bg-white px-4 py-2 rounded-lg">
      <CiSearch size={30} className="text-blue-700" />
      <input
        type="text"
        placeholder="Search Jobs or keyword"
        className="flex-1 p-1 outline-none border-none bg-white text-blue-700"
        name="query"
        onChange={(e)=>setQuery(e.target.value)}
      />
      <Link href={`/?query=${query}`}>
        <button className="bg-blue-700 p-2 rounded-lg">Search</button>
      </Link>
    </form>
  );
};

export default InputSearch;
