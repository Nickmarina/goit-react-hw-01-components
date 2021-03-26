import user from '../../user.json';
import ProfileDescription from '../ProfileDescription';
import ProfileStatsList from '../ProfileStatsList';
import styles from './styles.module.scss';

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <ProfileDescription user={user} />
      <ProfileStatsList stats={user.stats} />
    </div>
  );
};

export default Profile;
