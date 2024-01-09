'use client';

import React, { PropsWithChildren, useMemo } from 'react';

interface ButtonProps {
     onClick?: React.MouseEventHandler<HTMLButtonElement>;
     type: 'primary' | 'secondary' | 'box' | 'rounded' | 'rounded-dark';
     classNames?: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
     onClick,
     type,
     children,
     classNames,
}) => {
     const typeClassName = useMemo(() => {
          switch (type) {
               case 'primary':
                    return 'text-blue-400 uppercase text-sm ';
               case 'secondary':
                    return 'text-neutral-400 uppercase text-sm ';
               case 'box':
                    return 'text-neutral-900 uppercase font-medium bg-sky-500 rounded-sm px-4 py-2 ';
               case 'rounded':
                    return 'text-stone-950 uppercase font-medium bg-zinc-300 rounded-sm px-3 py-2 ';
               case 'rounded-dark':
                    return 'text-white uppercase font-medium bg-neutral-800 rounded-full px-3 py-2 ';
               default:
                    return;
          }
     }, [type]);

     return (
          <button onClick={onClick} className={`${typeClassName} ${classNames}`}>
               {children}
          </button>
     );
};

export default Button;
