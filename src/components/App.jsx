import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendList/friendList";
import { TransactionHistory } from "./transactions/transactions.jsx";
import user from './profile/user.json'
import data from './statistics/data.json'
import friends from './friendList/friends.json'
import transactions from './transactions/transactions.json'


export const App = () => {
  return (
    <div
      style={{
        paddingTop: '100px',
        height: '100vh',
        display: 'flex',
     
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions } />
    </div>
  );
};


