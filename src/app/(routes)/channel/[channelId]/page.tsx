import { getChannelById } from '~/actions/getChannelById';
import { getVideosChannelById } from '~/actions/getVideoByChannelId';
import VideoCard from '~/components/VideoCard';
import ChannelHeader from '~/components/channel/ChannelHeader';

interface ChannelPageParams {
     channelId?: string;
}

export default async function ChannelPage({ params }: { params: ChannelPageParams }) {
     const { channelId } = params;
     const channel = await getChannelById({ channelId });

     const videos = await getVideosChannelById({ channelId });

     return channel ? (
          <div>
               <ChannelHeader channel={channel} videoCount={videos.length} />
               <div className="border-b-2 border-b-neutral-800 capitalize ">
                    <div className="text-center px-6 py-2  border-b-2 border-b-neutral-400 w-24 mx-auto md:mx-32 ">
                         Videos
                    </div>
                    <div className=" mx-auto sm:mx-24 py-8 grid grid-cols-1 sm:grid-clos-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
                         {videos.map((items) => (
                              <VideoCard key={items.id} video={items} />
                         ))}
                    </div>
               </div>
          </div>
     ) : (
          <div>Channel not found</div>
     );
}
