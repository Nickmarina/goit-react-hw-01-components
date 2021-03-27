import styles from './styles.module.scss';

const ProfileDescription = ({ user }) => {
  return (
    <div className={styles.description}>
      <img src={user.avatar} alt="Аватар пользователя" />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>@{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </div>
  );
};

export default ProfileDescription;
