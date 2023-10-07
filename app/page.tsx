import { HostMeetupCard, SidePodcasts } from "@/components/index";

export default function Home() {
  return (
    <>
      <h1 className="heading1 text-darkPrimary">heading1</h1>
      <h1 className="heading1-semibold text-darkPrimary-2">heading1-semibold</h1>

      <div className="w-1/3 mx-auto">
        <HostMeetupCard />
        <br />

        <SidePodcasts />
      </div>
    </>
  );
}
