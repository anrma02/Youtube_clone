'use client';

import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export const SearchValue = () => {
     const [searchValue, setSearchValue] = useState<string>('');

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log(searchValue);
     };

     return (
          <form
               onSubmit={handleSubmit}
               className="flex flex-row border-[1px] border-neutral-700 rounded-full overflow-hidden w-2/5"
          >
               <input
                    className="w-full px-4 py-2 bg-neutral-900 "
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search"
               />
               <button type="submit" className=" px-3 bg-neutral-800 border-none ">
                    <IoIosSearch className="h-6 w-6 " />
               </button>
          </form>
     );
};
