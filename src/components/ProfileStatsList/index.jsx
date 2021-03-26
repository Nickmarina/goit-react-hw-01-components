import styles from './styles.module.scss';

const ProfileStatsList = ({ stats }) => {
  return (
    <ul className={styles.Stats}>
      <li className={styles.Item}>
        <span className={styles.Label}>Followers</span>
        <span className={styles.Quantity}> {stats.followers}</span>
      </li>
      <li>
        <span className={styles.Label}>Views</span>
        <span className={styles.Quantity}> {stats.views} </span>
      </li>
      <li>
        <span className={styles.Label}>Likes</span>
        <span className={styles.Quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStatsList;
