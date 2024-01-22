'use client';

import { Channel, Video } from '@prisma/client';
import Link from 'next/link';
import { useContext } from 'react';

import { Avatar, AvatarSize } from '~/components/Avatar';
import Button from '~/components/Button';
import SubscribeButton from '~/components/SubscribeButton';
import { CurrentUserContext } from '~/context/CurrentUserContext';
import { comPactNumberFormat } from '~/utils/numUtils';
import LikeDislikeButton from './LikeDislikeButton';

interface LikeSubscribeSectionProps {
     channel: Channel;
     video: Video;
}

const LikeSubscribeSection: React.FC<LikeSubscribeSectionProps> = ({ video, channel }) => {
     const currentUser = useContext(CurrentUserContext);

     return (
          <div className="flex max-w-[1000px] justify-between items-center ml-[50px]">
               <div className="flex gap-3 items-center">
                    <Link href={`/channel/${channel.id}`}>
                         <Avatar size={AvatarSize.medium} imageSrc={channel.imageSrc} />
                    </Link>

                    <div className="flex flex-col justify-between mr-2">
                         <Link href={`/channel/${channel.id}`}>
                              <h2 className="text-lg font-semibold">{channel.name}</h2>
                         </Link>
                         <p className="text-sm text-neutral-400 ">
                              {comPactNumberFormat(channel.subscriberCount)} subscribers
                         </p>
                    </div>

                    {channel.userId === currentUser?.id ? (
                         <Link href={`/studio`}>
                              <Button type="rounded-dark">Manage videos</Button>
                         </Link>
                    ) : (
                         <SubscribeButton channelId={channel.id} />
                    )}
               </div>
               <LikeDislikeButton video={video} />
          </div>
     );
};

export default LikeSubscribeSection;
