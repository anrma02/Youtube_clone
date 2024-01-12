/* eslint-disable react/no-children-prop */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toast, Toaster } from 'react-hot-toast';

import './style.css';
import { Header } from '~/components/Layout/Header/Header';
import { CurrentUserProvider } from '~/context/CurrentUserContext';
import getCurrentUser from '~/actions/getCurrentUser';
import CreateChannelModelProvider from '~/context/CreateChannelModelContext';
import CreateChannelModal from '../components/Layout/Modal/CreateChannelModal';
import getCurrentChannel from '~/actions/getCurrentChannel';
import { CurrentChannelProvider } from '~/context/CurrentChannelContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
     title: 'Create Next App',
     description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
     const currentUser = await getCurrentUser();
     const currentChannel = await getCurrentChannel();

     return (
          <html lang="en">
               <body className={inter.className}>
                    <CreateChannelModelProvider>
                         <Toaster toastOptions={{ position: 'top-right' }} />
                         <CreateChannelModal />
                         <CurrentUserProvider user={currentUser}>
                              <CurrentChannelProvider channel={currentChannel}>
                                   <Header />
                                   <div className="pt-16"> {children}</div>
                              </CurrentChannelProvider>
                         </CurrentUserProvider>
                    </CreateChannelModelProvider>
               </body>
          </html>
     );
}
