'use client';

import { User } from '@prisma/client';
import { createContext } from 'react';

export const CurrentUserContext = createContext<User | null>(null);

interface CurrentUserProviderProps {
     user: User | null;
     children: React.ReactNode; // Add the children property
}

export const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({ user, children }) => {
     return <CurrentUserContext.Provider value={user}>{children}</CurrentUserContext.Provider>;
};
