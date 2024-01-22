'use client';

import { Channel, Video } from '@prisma/client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import VideoCard from '~/components/VideoCard';

export default function SearchPage() {
     const params = useSearchParams();
     const searchQuery = params.get('searchQuery');

     const [video, setVideo] = useState<(Video & { channel: Channel })[]>([]);

     useEffect(() => {
          axios.get('/api/videos', { params: { searchQuery } })
               .then((res) => {
                    setVideo(res.data as unknown as (Video & { channel: Channel })[]);
               })
               .catch((err) => {
                    console.log(err);
                    toast.error('Something went wrong');
               });
     }, [searchQuery]);

     return (
          <div className=" w-4/5 mx-auto flex flex-col gap-4 items-center pb-4  ">
               {video.length
                    ? video.map((items) => {
                           return (
                                <VideoCard
                                     key={items.id}
                                     isVertical={false}
                                     video={items}
                                     channel={items.channel}
                                     //   includeDescription
                                     channelAvatar
                                />
                           );
                      })
                    : 'No videos founds'}
          </div>
     );
}
