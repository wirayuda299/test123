import { podcasts } from "@/public/constants";
import { rightArr as RightArr } from "@/public/icons";
import Image from "next/image";
import { PodcastsCard } from "../index";

const SidePodcasts = () => {
  return (
    <div className="w-full p-5 bg-white dark:bg-darkPrimary-3 shadow-md pb-2.5">
      <h3 className="display-semibold text-darkSecondary-900 dark:text-white-800 flex items-baseline pb-2.5">
        Podcasts
        <Image className="ml-2" src={RightArr} alt="rightArr" width={12} height={10} />
      </h3>

      {podcasts?.map((item) => (
        <PodcastsCard
          cardData={{ img: item.image.src, alt: item.id, title: item.title, author: item.author }}
        />
      ))}
    </div>
  );
};

export default SidePodcasts;
