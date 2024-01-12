'use client';

import { Channel } from '@prisma/client';
import { createContext } from 'react';

export const CurrentChannelContext = createContext<Channel | null>(null);

interface CurrentChannelProviderProps {
     channel: Channel | null;
     children: React.ReactNode; // Add the children property
}

export const CurrentChannelProvider: React.FC<CurrentChannelProviderProps> = ({
     channel,
     children,
}) => {
     return (
          <CurrentChannelContext.Provider value={channel}>
               {children}
          </CurrentChannelContext.Provider>
     );
};
