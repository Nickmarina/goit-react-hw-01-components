import {createUseStyles} from 'react-jss';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json'

const useStyles = createUseStyles({
  container:{
    width: 1000,
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'whitesmoke',
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items ={transactions} />
    </div>
  );
}

export default App;
