"use client";

import { jobDetails } from "@/actions/action";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { FaPlaceOfWorship } from "react-icons/fa";
import loader from "../../../public/icons/loading.png";
import { ToastContainer, toast } from "react-toastify";



const JobDetails = () => {
  const searchParams= useSearchParams();
  const job_id=searchParams.get("job_id");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await jobDetails(job_id);
      setDatas(response);
      console.log(response)
      setLoading(false);
    };
    fetchData();
  }, []);


  const handleApply=()=>{
    toast.success("Job Applied Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  if(loading) return (
    <div className="flex flex-row items-center justify-center h-screen">
      <Image
        src={loader}
        className="w-10 h-10 rounded-full animate-spin"
        alt="loading"
      />
    </div>
  );

  return (
    <div className="mt-10 px-1 lg:px-10">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-300 py-20 px-10 rounded-lg border border-slate-600 gap-5">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxvjajCpWJRroUCiNgFljtLqcWC8Thx-bQ6EFr&s=0"
            width={100}
            height={100}
            alt="logo"
            className="rounded-full"
          />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">
              {datas[0]?.job_title
                ? datas[0].job_title
                : "No job Title Available"}
            </h1>
            <div className="flex flex-col lg:flex-row gap-3 font-light">
              <div className="flex flex-row gap-2 items-center">
                <FaShoppingBag />
                <p>{datas[0]?.employer_name}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CiLocationOn />
                <p>{datas[0]?.job_city}</p>
              </div>
              <p>{datas[0]?.job_state}</p>
              <div className="flex flex-row gap-2 items-center">
                <FaPlaceOfWorship />
                <p>{datas[0]?.job_country}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="p-3 bg-blue-600 text-white  w-full" onClick={handleApply}>Apply</button>
          <p>Posted 24 Hours Ago</p>
        </div>
      </div>

      <div className="mt-10">
        <div>
          <h1 className="font-bold text-2xl">Job Description</h1>
          <p className="font-normal text-[14px] text-justify mt-2 leading-loose">
            {datas[0]?.job_description}
          </p>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-2xl ">Key Responsibilities</h1>
          <ul className="list-disc flex flex-col gap-3 ml-10 mt-5 text-[14px]">
            {datas[0]?.job_highlights?.Responsibilities ? (
              datas[0]?.job_highlights?.Responsibilities.map((item, index) => (
                <li className="leading-loose" key={index}>
                  {item}
                </li>
              ))
            ) : (
              <div>
                <h1 className="text-3xl text-red-400">
                  No Key Responsibilities Available
                </h1>
              </div>
            )}
          </ul>
        </div>
        <div className="mt-10">
          <h1 className="font-bold text-2xl">Qualification</h1>
          <ul className="list-disc flex flex-col gap-3 ml-10 mt-5 text-[14px]">
            {datas[0]?.job_highlights?.Qualifications ? (
              datas[0]?.job_highlights?.Qualifications.map((item, index) => (
                <li className="leading-loose" key={index}>
                  {item}
                </li>
              ))
            ) : (
              <div>
                <h1 className="text-3xl text-red-400">
                  No Qualifications Available
                </h1>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
