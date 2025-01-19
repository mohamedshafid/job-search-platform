'use server'
import { headers } from "@/utils";
import axios from "axios";

export async function jobSearchDefault(){
   const options = {
     method: "GET",
     url: "https://jsearch.p.rapidapi.com/search",
     params: {
       query: "developer jobs",
       page: "1",
       num_pages: "1",
       date_posted: "all",
     },
     headers
   };
   try {
     const response = await axios.request(options);
     console.log(response);
     return response.data.data;

   } catch (error) {
     console.error(error);
   }
}
export async function jobSearchByQuery(query){
  console.log("query is",query);
   const options = {
     method: "GET",
     url: "https://jsearch.p.rapidapi.com/search",
     params: {
       query: `${query}`,
       page: "1",
       num_pages: "1",
       date_posted: "all",
     },
     headers
   };
   try {
     const response = await axios.request(options);
     console.log(response);
     return response.data.data;

   } catch (error) {
     console.error(error);
   }
}



export async function jobDetails(job_id){
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/job-details",
      params: {
        job_id: `${job_id}`,
      },
      headers,
    };

    try {
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
}