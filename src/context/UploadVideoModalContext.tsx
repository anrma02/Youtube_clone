'use client';

import { createContext, useState } from 'react';

type ModelState = {
     isOpen: boolean;
     onOpen: () => void;
     onClose: () => void;
};

export const UploadVideoModelContext = createContext<ModelState | null>(null);

type UploadVideoModelProviderProps = {
     children: React.ReactNode;
};

const UploadVideoModelProvider: React.FC<UploadVideoModelProviderProps> = ({ children }) => {
     const [isOpen, setIsOpen] = useState(false);

     return (
          <UploadVideoModelContext.Provider
               value={{ isOpen, onOpen: () => setIsOpen(true), onClose: () => setIsOpen(false) }}
          >
               {children}
          </UploadVideoModelContext.Provider>
     );
};

export default UploadVideoModelProvider;
