import increaseVideoViewCount from '~/actions/increaseVideoViewCount';

interface VideoPageParams {
     videoId?: string;
}

export default async function VideoPage({ params }: { params: VideoPageParams }) {
     const { videoId } = params;
     const video = await increaseVideoViewCount({ videoId });

     return video ? (
          <div className=" flex flex-col lg:flex-row mx-6 mt-2 gap-4 ">
               <div className="w-full lg:w-3/4 flex flex-col gap-4 ">
                    <h1 className="text-2xl font-medium break-all  ">{video.title} </h1>
               </div>
               <div className="w-full lg:w-1/4 flex flex-col gap-4 pb-4 "></div>
          </div>
     ) : (
          <h1> Video not found </h1>
     );
}
