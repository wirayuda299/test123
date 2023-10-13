"use client";

import { useState } from "react";

import { optionBar } from "@/constant";
const demoFeeds = [1, 2, 3, 4];

const ProfileFeed = () => {
  const [feed, setFeed] = useState<string>("");

  return (
    <main className="flex flex-col gap-[30px]">
      <div className="inline-flex items-start gap-[10px] rounded-[20px] bg-white px-[30px] py-[19px] dark:bg-darkPrimary-3 md:max-w-[785px]">
        {optionBar.map((option) => (
          <button
            key={option}
            className="heading3 rounded-3xl px-5 py-2 text-darkSecondary-800 focus:bg-secondary-red-80 focus:text-white dark:text-white-700"
          >
            {option}
          </button>
        ))}
      </div>

      {demoFeeds.map((feed, i) => (
        <div key={i} className="h-[196px] w-[785px] rounded-2xl bg-[orange]">
          Something here
        </div>
      ))}
    </main>
  );
};

export default ProfileFeed;
