import PropTypes from 'prop-types';
import styles from  './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const fullClassName = isOnline ? `${styles.status} ${styles.online}` : `${ styles.status } ${styles.offline}`;
    return <li className={styles.item}>
        <span className={fullClassName}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>;
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}