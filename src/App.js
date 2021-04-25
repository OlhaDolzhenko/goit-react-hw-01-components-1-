import UserProfile from './components/UserProfile/UserProfile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statistics from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
/* import './App.css'; */

function App() {
  return (
    <>
      <UserProfile user={user} />
      <Statistics stats={statistics} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
