'use client';

import { useEffect, useState } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md';
import { toast } from 'react-hot-toast';

import { IconButton } from '~/components/Layout/Header/Header';

interface VideoPreviewProps {
     videoId: string;
     videoSrc: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoId, videoSrc }) => {
     const [videoLink, setVideoLink] = useState<string>('');

     useEffect(() => {
          setVideoLink(`${window.location.host}/video/${videoId}}`);
     }, [videoId]);

     const handleCopyLink = () => {
          navigator.clipboard
               .writeText(videoLink)
               .then(() => toast.success('Link copied to clipboard'));
     };

     return (
          <div
               className="
     w-full md:w-2/5 flex flex-col overflow-hidden rounded-md  "
          >
               <iframe src={videoSrc} />
               <div className="bg-stone-900 p-4 flex justify-between items-center ">
                    <div className="w-4/5 truncate">
                         <div className="text-sm text-zinc-400">Video link</div>
                         <a href={videoId} className="text-sky-500">
                              {videoLink}
                         </a>
                    </div>
                    <IconButton onClick={handleCopyLink}>
                         <MdOutlineContentCopy className="cursor-pointer" />
                    </IconButton>
               </div>
          </div>
     );
};

export default VideoPreview;
