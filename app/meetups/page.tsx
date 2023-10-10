import { Filter, HostMeetupCard, MeetupsWrapper, SidePodcasts } from "@/components/index";

const page = () => {
  return (
    <div className="flex gap-4 bg-white-700">
      <div className="w-1/5">
        <Filter />
      </div>
      <div className="w-5/6">
        <MeetupsWrapper />
      </div>
      <div className="">
        <HostMeetupCard />
        <SidePodcasts />
      </div>
    </div>
  );
};

export default page;
