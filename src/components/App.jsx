import { Profile } from "./Profile/Profile";
import user from './Profile/user.json'

import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';

import { FriendList } from "./FriendList/FriendList";
import friends from './FriendList/friends.json';

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from './TransactionHistory/transactions.json';
import { Box } from "./Box";

export const App = () => {
  return (
    <Box
      bg="background"
      color='text'
      width="containerWidth"
      position="relative"
      p={32}
      my={0}
      mx="auto"
      boxShadow="containerShadow"
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data}/> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </Box>
  );
};
