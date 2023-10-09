import { HostMeetupCard, MeetupsWrapper, SidePodcasts } from "@/components/index";

const page = () => {
  return (
    <div className="max-container flex gap-4">
      <div className="w-1/5">
        <h1>Filter Section</h1>
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
