import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;