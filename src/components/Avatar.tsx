import Image from 'next/image';
import React from 'react';

export enum AvatarSize {
     extraSmall = 24,
     small = 32,
     medium = 40,
     large = 128,
}

interface AvatarProps {
     className?: string;
     onClick?: () => void;
     size?: AvatarSize;
     imageSrc?: string | null;
}

export const Avatar: React.FC<AvatarProps> = ({
     className,
     onClick,
     size = AvatarSize.medium,
     imageSrc,
}) => {
     return (
          <Image
               alt="Avatar"
               className={`rounded-full aspect-square object-contain ${
                    onClick && 'cursor-pointer'
               }${className} `}
               height={size}
               width={size}
               onClick={onClick}
               src={imageSrc || '/images/avatar.png'}
          />
     );
};
