import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';

import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

function App() {
  return (
    <div className="container">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
