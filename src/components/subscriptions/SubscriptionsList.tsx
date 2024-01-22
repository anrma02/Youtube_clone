'use client';

import { Channel, Video } from '@prisma/client';

import { useProtectedRouter } from '~/hooks/useProtectedRouter';
import VideoCard from '../VideoCard';

interface SubscriptionsListProps {
     videos: (Video & { channel: Channel })[];
}

const SubscriptionsList: React.FC<SubscriptionsListProps> = ({ videos }) => {
     useProtectedRouter({ checkChannel: false });

     return (
          <div className="mx-12 sm:mx-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
               {videos.map((video) => (
                    <VideoCard key={video.id} video={video} channel={video.channel} channelAvatar />
               ))}
          </div>
     );
};

export default SubscriptionsList;
