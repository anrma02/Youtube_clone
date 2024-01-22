'use client';

import { useContext } from 'react';
import { MdMenu } from 'react-icons/md';

import { IconButton } from './Header';
import { Logo } from '~/components/Logo';
import { SidebarContext } from '~/context/SidebaContext';

const NavigationHeader = () => {
     const sidebar = useContext(SidebarContext);
     return (
          <div className="flex items-center">
               <IconButton
                    onClick={() => (sidebar?.isOpen ? sidebar.onClose() : sidebar?.onOpen())}
               >
                    <div className="flex flex-row items-center  ">
                         <MdMenu className="h-6 w-6 " />
                    </div>
               </IconButton>
               <Logo />
          </div>
     );
};

export default NavigationHeader;
