'use client';

import { PiUserSquareFill, PiYoutubeLogo, PiSignOut } from 'react-icons/pi';

import MenuItem from './MenuItem';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
     onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onClose }) => {
     return (
          <>
               <div className="h-screen w-screen fixed z-30 " onClick={onClose} />
               <div className="absolute rounded-r-md shadow-md w-72 bg-zinc-800 right-2 top-16 text-sm flex flex-col overflow-hidden z-40 ">
                    <MenuItem
                         logo={<PiUserSquareFill className={'h-7 w-7 mr-4'} />}
                         label="Your Channel"
                    />
                    <MenuItem
                         logo={<PiYoutubeLogo className={'h-7 w-7 mr-4'} />}
                         label="Youtube Studio"
                    />
                    <MenuItem
                         logo={<PiSignOut className={'h-7 w-7 mr-4'} />}
                         label="Sign Out"
                         onClick={() => {
                              signOut();
                              onClose();
                         }}
                    />
               </div>
          </>
     );
};

export default UserMenu;
