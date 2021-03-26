import styles from './styles.module.scss';

const ProfileDescription = ({ user }) => {
  return (
    <div className={styles.Description}>
      <img src={user.avatar} alt="Аватар пользователя" />
      <p className={styles.Name}>{user.name}</p>
      <p className={styles.Tag}>@{user.tag}</p>
      <p className={styles.Location}>{user.location}</p>
    </div>
  );
};

export default ProfileDescription;
