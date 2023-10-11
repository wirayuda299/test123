import mongoose from 'mongoose';

const meetupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  byWhome: { type: String, required: true },
  tags: {
    type: [String],
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// <div className='flex gap-4 bg-white-700 flex-col md:flex-row'>
//   <div className='flex-col flex lg:flex lg:flex-row gap-4 '>
//     <div className='w-full lg:w-1/5'>
//       <Filter />
//     </div>
//     <div className='w-full lg:w-5/6'>
//       <MeetupsWrapper />
//     </div>
//   </div>

//   <div className='flex gap-4'>
//     <div className='w-full flex flex-col gap-4 '>
//       <div>
//         <HostMeetupCard />
//       </div>
//       <div>
//         <SidePodcasts />
//       </div>
//     </div>
//   </div>
// </div>
