import { PostCard, Sidebar } from '@/components/index';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Group() {
  return (
    <div className='flex h-full w-full flex-col items-center overflow-hidden bg-white-800 p-5 lg:h-screen lg:flex-row'>
      <Sidebar />
      <ScrollArea className='h-full w-full overflow-y-auto  py-5 lg:h-screen'>
        <div className='flex flex-wrap justify-center gap-5'>
          {[1, 2, 3, 4, 5, 6].map((c) => (
            <PostCard key={c} />
          ))}
        </div>
      </ScrollArea>
      <ScrollArea>
        <div className='flex flex-col gap-5 lg:sticky lg:top-0 lg:h-screen'>
          <div className=' min-h-[400px] min-w-[320px] bg-slate-400'>Hello</div>
          <div className='min-h-[400px] min-w-[320px] bg-slate-400 '>Hello</div>
        </div>
      </ScrollArea>
    </div>
  );
}
