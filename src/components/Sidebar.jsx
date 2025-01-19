import {
  location_categories,
  time_categories,
  work_categories,
} from "@/constants";
import React from "react";
import Blows from "./utills/Blows";

const Sidebar = () => {
  return (
    <div>
      <div>
        <form action="" className="hidden lg:block">
          <h1 className="font-bold text-blue-900">Search By Categories</h1>
          <Blows />
          <div className="flex flex-col gap-3 mt-3 mb-5">
            {work_categories.map((item, index) => (
              <div key={index}>
                <label className="flex flex-row gap-5 font-normal w-fit">
                  <input type="checkbox" />
                  {item}
                </label>
              </div>
            ))}
          </div>
          <h1 className="font-bold text-blue-900">Search By Work Preference</h1>
          <Blows />

          <div className="flex flex-col gap-5 mt-3 mb-5">
            {time_categories.map((item, index) => (
              <div key={index}>
                <label className="flex flex-row gap-2 font-normal w-fit">
                  <input type="checkbox" />
                  {item}
                </label>
              </div>
            ))}
          </div>
          <h1 className="font-bold text-blue-900">Search By Work Preference</h1>
          <Blows />

          <div className="flex flex-col gap-5 mt-3 mb-5">
            {location_categories.map((item, index) => (
              <div key={index}>
                <label className="flex flex-row gap-2 font-normal w-fit">
                  <input type="checkbox" />
                  {item}
                </label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
