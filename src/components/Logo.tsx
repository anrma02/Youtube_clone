'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
     return (
          <Link href={'/'}>
               <Image
                    src="logo.svg"
                    alt={'logo'}
                    className="hidden cursor-pointer mx-4 sm:block "
                    height={20}
                    width={90}
               />
          </Link>
     );
};
