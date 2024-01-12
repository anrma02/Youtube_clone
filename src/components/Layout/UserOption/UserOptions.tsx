'use client';

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SignInButton } from './SignInButton';
import { CurrentUserContext } from '~/context/CurrentUserContext';
import { IconButton } from '../Header/Header';
import { MdOutlineVideoCall } from 'react-icons/md';
import { Avatar, AvatarSize } from '~/components/Avatar';
import UserMenu from './UserMenu';
import { CurrentChannelContext } from '~/context/CurrentChannelContext';
import { CreateChannelModelContext } from '~/context/CreateChannelModelContext';

export const UseOptions = () => {
     const currentUser = useContext(CurrentUserContext);
     const currentChannel = useContext(CurrentChannelContext);
     const createChannelModal = useContext(CreateChannelModelContext);

     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const router = useRouter();

     const handleUploadClick = () => {
          console.log('upload');
          if (!currentChannel) {
               createChannelModal?.onOpen();
          } else {
               router.push('/studio/upload');
          }
     };

     return currentUser ? (
          <>
               <div className="flex items-center gap-4 mr-4">
                    <IconButton onClick={handleUploadClick}>
                         <MdOutlineVideoCall className={'h-7 w-7'} />
                    </IconButton>
                    <Avatar
                         size={AvatarSize.small}
                         imageSrc={currentUser.image}
                         onClick={() => setIsMenuOpen(true)}
                    />
               </div>
               {isMenuOpen ? <UserMenu onClose={() => setIsMenuOpen(false)} /> : null}
          </>
     ) : (
          <SignInButton />
     );
};
