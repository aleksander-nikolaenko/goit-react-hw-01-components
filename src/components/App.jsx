import { Container } from './Container';
import user from '../data/user.json';
import { Profile } from './Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics';
import friends from '../data/friends.json';
import { FriendList } from './FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './Transactions';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
