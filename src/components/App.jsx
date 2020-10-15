import React from 'react';


import Profile from './social-profile/Profile';
import FriendsList from './friends-list/FriendsList';
import Stats from './stats/Stats';
import TransactionHistory from './transaction-history/TransactionHistory';


import user from './social-profile/user.json';
import stats from './stats/stats.json';
import friends from './friends-list/friends.json';
import transactions from './transaction-history/transactions.json';
import './app.css';

const App = () => (
  <div className="container">
    <Profile user={{ ...user }} />
    <FriendsList friends={friends} />
    <Stats title="Upload stats" stats={stats} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;