import HomeLeftSidebar from "@/components/Home/HomeLeftSidebar";
import HomeRightSidebar from "@/components/Home/HomeRightSidebar";

export default function Home() {
  return (
    <main className='flex flex-row bg-white-700 px-[2.5%] dark:bg-darkPrimary-2'>
      <HomeLeftSidebar />
      <section>
        <div className='w-full max-w-4xl'></div>
      </section>
      {/* @ts-ignore */}
      <HomeRightSidebar />
    </main>
  );
}
