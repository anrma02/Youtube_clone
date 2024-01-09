'use client';

import { createContext, useState } from 'react';

type ModelState = {
     isOpen: boolean;
     onOpen: () => void;
     onClose: () => void;
};

export const CreateChannelModelContext = createContext<ModelState | null>(null);

type CreateChannelModelProviderProps = {
     children: React.ReactNode;
};

const CreateChannelModelProvider: React.FC<CreateChannelModelProviderProps> = ({ children }) => {
     const [isOpen, setIsOpen] = useState(false);

     return (
          <CreateChannelModelContext.Provider
               value={{ isOpen, onOpen: () => setIsOpen(true), onClose: () => setIsOpen(false) }}
          >
               {children}
          </CreateChannelModelContext.Provider>
     );
};

export default CreateChannelModelProvider;
