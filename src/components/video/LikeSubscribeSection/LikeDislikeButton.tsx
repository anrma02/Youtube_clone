'use client';

import { Video } from '@prisma/client';
import { MdThumbUp, MdOutlineThumbDown, MdThumbDown, MdOutlineThumbUp } from 'react-icons/md';

import { LikeDislikeStatus, useLikeDislike } from '~/hooks/useLikeDislike';
import { comPactNumberFormat } from '~/utils/numUtils';

interface LikeDislikeButtonProps {
     video: Video;
}

const LikeDislikeButton: React.FC<LikeDislikeButtonProps> = ({ video }) => {
     const { likeDislikeStatus, toggleLikeDislike } = useLikeDislike({ videoId: video.id });

     return (
          <div className=" flex items-center gap-1 bg-neutral-800 rounded-full px-3 py-2 text-white font-medium ">
               <button
                    onClick={() => toggleLikeDislike('like')}
                    className="pr-3 border-r-2 border-neutral-600 flex items-center gap-3  "
               >
                    {likeDislikeStatus === LikeDislikeStatus.Liked ? (
                         <MdThumbUp className="h-6 w-6 " />
                    ) : (
                         <MdOutlineThumbUp className="h-6 w-6 " />
                    )}
                    <p>{comPactNumberFormat(video.likeCount)}</p>
               </button>
               <button className="pl-2" onClick={() => toggleLikeDislike('dislike')}>
                    {likeDislikeStatus === LikeDislikeStatus.Disliked ? (
                         <MdThumbDown className="h-6 w-6 " />
                    ) : (
                         <MdOutlineThumbDown className="h-6 w-6 " />
                    )}
               </button>
          </div>
     );
};

export default LikeDislikeButton;
