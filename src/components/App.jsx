 import user from './card/user.json';
import statistics from './statistics/data.json'
import friendList from './friendList/friends.json'
import transactionHistory from './transactionHistory/transactions.json'
import {Statistics} from './statistics/Statistics'
import {FriendList} from './friendList/FriendList'
import {TransactionHistory} from './transactionHistory/TransactionHistory'
 import {Profile} from './card/User.jsx'


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
     <Profile 
  username={user.username}
     tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
/> 
<Statistics title="Upload stats" stats={statistics} />
<FriendList friends={friendList} />
<TransactionHistory items={transactionHistory} />
    </div>
  );
};
