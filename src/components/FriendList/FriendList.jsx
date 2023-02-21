import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>
        {friends.map(friend => (<FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />))}
    </ul>;
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}