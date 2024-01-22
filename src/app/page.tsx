import getTrendingVideos from '~/actions/getTrendingVideo';
import VideoCard from '~/components/VideoCard';

export default async function Home() {
     const trending = await getTrendingVideos();

     return (
          <main className="mx-12 sm:mx-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
               {trending
                    ? trending.map((trendingVideo) => {
                           return (
                                <VideoCard
                                     key={trendingVideo.id}
                                     video={trendingVideo}
                                     channel={trendingVideo.channel}
                                     channelAvatar
                                />
                           );
                      })
                    : 'No Video Found'}
          </main>
     );
}
