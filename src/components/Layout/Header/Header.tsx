'use client';

import React, { useContext } from 'react';

import { Logo } from '~/components/Logo';
import { SearchValue } from '../SearchValue/SearchValue';
import { UseOptions } from '../UserOption/UserOptions';
import { MdMenu } from 'react-icons/md';
import NavigationHeader from './NavigationHeader';

interface IconButtonProps {
     className?: string;
     onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = ({
     children,
     className,
     onClick,
}) => {
     return (
          <div
               className={`cursor-pointer rounded-full p-2 hover:bg-neutral-800 ${className} `}
               onClick={onClick}
          >
               {children}
          </div>
     );
};

export const Header = () => {
     return (
          <div className="fixed w-full bg-stone-900 z-20 h-16 px-2 flex flex-row justify-between items-center ">
               <NavigationHeader />
               <SearchValue />
               <UseOptions />
          </div>
     );
};
