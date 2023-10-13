import { ProfileFeed, LeftSidebar, Performance } from "@/components/index";

const page = () => {
  return (
    <div className="flex flex-wrap items-start justify-between">
      <LeftSidebar />
      <ProfileFeed />
      <Performance />
    </div>
  );
};

export default page;
