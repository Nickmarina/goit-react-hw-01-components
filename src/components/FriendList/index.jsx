import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import styles from './styles.module.scss';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({id, avatar, name, isOnline}) =>(
      <FriendListItem key ={id}
      name={name}
      avatar ={avatar}
      status ={isOnline}/>
    ))} 
  </ul>
);


FriendList.propTypes ={
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}


export default FriendList;
