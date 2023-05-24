import user from './user/user.json';
import statistics from './statistics/data.json'
import friendList from './friendList/friends.json'
import transactionHistory from './transactionHistory/transactions.json'
import {User} from './user/User'
import {Statistics} from './statistics/Statistics'
import {FriendList} from './friendList/FriendList'
import {TransactionHistory} from './transactionHistory/TransactionHistory'


export const App = () => {
  return (
    <div
      style={{
                display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection:'column'
      }}
    >
    <User
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={statistics} />

<FriendList friends={friendList} />

<TransactionHistory items={transactionHistory} />;
    </div>
  );
};
