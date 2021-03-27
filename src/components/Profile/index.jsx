import PropTypes from 'prop-types';
import ProfileDescription from '../ProfileDescription';
import ProfileStatsList from '../ProfileStatsList';
import styles from './styles.module.scss';

const Profile = ({ user }) => {
  return (
    <div className={styles.Profile}>
      <ProfileDescription user={user} />
      <ProfileStatsList stats={user.stats} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
