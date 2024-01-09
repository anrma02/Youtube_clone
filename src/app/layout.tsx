/* eslint-disable react/no-children-prop */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './style.css';
import { Header } from '~/components/Layout/Header/Header';
import { CurrentUserProvider } from '~/context/CurrentUserContext';
import getCurrentUser from '~/actions/getCurrentUser';
import CreateChannelModelProvider from '~/context/CreateChannelModelContext';
import CreateChannelModal from './components/Modal/CreateChannelModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
     title: 'Create Next App',
     description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
     const currentUser = await getCurrentUser();

     return (
          <html lang="en">
               <body className={inter.className}>
                    <CreateChannelModelProvider>
                         <CreateChannelModal />
                         <CurrentUserProvider user={currentUser}>
                              <Header />
                              <div className="pt-16"> {children}</div>
                         </CurrentUserProvider>
                    </CreateChannelModelProvider>
               </body>
          </html>
     );
}
