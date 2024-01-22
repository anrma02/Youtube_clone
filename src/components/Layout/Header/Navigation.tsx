import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from './Header';

import getCurrentSubscriptions from '~/actions/getCurrentSubscriptions';

const Navigation = async () => {
     const subscriptions = await getCurrentSubscriptions();
     return (
          <>
               <Sidebar subscribedChannels={subscriptions} />
               <Header />
          </>
     );
};

export default Navigation;
