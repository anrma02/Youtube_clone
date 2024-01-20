'use client';

import { Video } from '@prisma/client';
import { useState } from 'react';

import dayjs from '~/vendor/dayjs';
import { comPactNumberFormat } from '~/utils/numUtils';

interface DescriptionProps {
     video: Video;
}

const Description: React.FC<DescriptionProps> = ({ video }) => {
     const [isExpanded, setIsExpanded] = useState(false);

     return (
          <div
               className={`ml-[50px] bg-neutral-800 rounded-xl max-w-[1000px] p-3 overflow-hidden ${
                    isExpanded ? 'h-fit' : 'line-clamp-2 max-h-28'
               }`}
          >
               <div className="flex gap-2 text-neutral-200 font-medium  ">
                    <p> {comPactNumberFormat(video.viewCount)} views </p>
                    <p>{dayjs(video.createdAt).format('MMM D, YYYY')} </p>
               </div>
               <div className={isExpanded ? ' ' : 'line-clamp-2'}>
                    <div className="whitespace-pre-line ">
                         {video.description.split('\n').map((line, i) => {
                              return line === '' ? <br key={i} /> : <p key={i}>{line} </p>;
                         })}
                    </div>
               </div>
               <p
                    onClick={() => {
                         setIsExpanded((isExpanded) => !isExpanded);
                    }}
                    className={`cursor-pointer ${isExpanded ? 'mt-2' : ''} `}
               >
                    {isExpanded ? 'Show less' : '...more'}
               </p>
          </div>
     );
};

export default Description;
