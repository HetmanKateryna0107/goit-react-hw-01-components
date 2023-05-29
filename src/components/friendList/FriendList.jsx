import css from './FriendList.module.css';
import PropTypes from "prop-types";
import { RxAccessibility } from 'react-icons/rx';
import { IoCloudOffline } from 'react-icons/io5';
const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className="status">
        {isOnline ? (
          <>
            <RxAccessibility />
          </>
        ) : (
          <>
            <IoCloudOffline />
          </>
        )}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes={
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired 
}
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};
FriendList.propTypes={

  friends: PropTypes.array.isRequired 
}
