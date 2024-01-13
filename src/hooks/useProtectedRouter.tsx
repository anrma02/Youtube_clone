import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { CurrentChannelContext } from '~/context/CurrentChannelContext';
import { CurrentUserContext } from '~/context/CurrentUserContext';

interface UseProtectedRouterProps {
     checkChannel?: boolean;
}

export const useProtectedRouter = ({ checkChannel = true }: UseProtectedRouterProps = {}) => {
     const currentUser = useContext(CurrentUserContext);
     const currentChannel = useContext(CurrentChannelContext);

     const router = useRouter();

     useEffect(() => {
          if (!currentUser || (checkChannel && !currentChannel)) {
               router.push('/');
          }
     }, [checkChannel, currentChannel, currentUser, router]);
};
