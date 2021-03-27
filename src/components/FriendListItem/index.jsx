import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const FriendListItem = ({ name, avatar, status }) => (
    <li className ={styles.item}>
        <span>{status}</span>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
    </li>
)


FriendListItem.defaultProps={
    avatar: "https://tanzolymp.com/images/default-non-user-no-photo-1-300x300.jpg"
}

FriendListItem.propTypes ={
    avatar:  PropTypes.string,
    name:  PropTypes.string.isRequired,
    status:  PropTypes.bool.isRequired,
}

export default FriendListItem;
