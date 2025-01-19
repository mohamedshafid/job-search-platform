"use client";
import { jobSearchByQuery, jobSearchDefault } from "@/actions/action";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import loader from "../../public/icons/loading.png";
import { useSearchParams } from "next/navigation";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams=useSearchParams();
  const query=searchParams.get("query");
  console.log(query);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if(query==null){
        const response = await jobSearchDefault();
        console.log(response);
        setData(response);
        setLoading(false);
      }
      else{
          const response = await jobSearchByQuery(query);
          console.log(response);
          setData(response);
          setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);


  if (loading)
    return (
      <div className="flex flex-row items-center justify-center h-screen w-full flex-1">
        <Image
          src={loader}
          className="w-10 h-10 rounded-full animate-spin"
          alt="loading"
        />
      </div>
    );

  return (
    <div className="flex-shrink flex-1">
      <div>
        <h1 className="font-bold text-xl">Recommened Jobs</h1>
        <p className="font-light text-blue-600">
          Get your job from top hiring companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white gap-4 rounded-md mt-10">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div key={index} className="p-4 border shadow-m">
                <div className="flex flex-row gap-3">
                  {item.employer_logo && (
                    <Link href={`/job-details?job_id=${item.job_id}`}>
                      <Image
                        src={`${item.employer_logo}`}
                        className="w-10 h-10 rounded-full cursor-pointer"
                        width={50}
                        height={50}
                        alt="logo"
                      />
                    </Link>
                  )}
                  <h1 className="font-bold">{item.job_title}</h1>
                </div>
                <h2 className="mt-3 font-light text-slate-400">
                  {item.employer_name}
                </h2>
                <p className="line-clamp-2 text-[13px] mt-3">
                  {item.job_description}
                </p>
                <div className="flex flex-row justify-between mt-5">
                  <p className="font-light text-[14px]">{item.job_city}</p>
                  <p className="font-light text-[14px]">{item.job_state}</p>
                </div>
                <div
                  className="w-full mt-4 text-center bg-blue-300 text-white rounded-sm cursor-pointer p-2
                "
                >
                  <Link href={`${item.job_apply_link}`}>Apply</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
