import { HostMeetupCard, MeetupsWrapper, SidePodcasts } from "@/components/index";
import { LeftSidebar } from "@/components/index";

export default function Home() {
  return (
    <>
      <HostMeetupCard />
      <SidePodcasts />
      <MeetupsWrapper />
      <LeftSidebar />
      <h1 className="heading1 text-darkPrimary">heading1</h1>
      <h1 className="heading1-semibold text-darkPrimary-2">heading1-semibold</h1>
    </>
  );
}
