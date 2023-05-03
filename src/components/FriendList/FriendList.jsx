import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from 'components/FriendList/FriendList.module.css';
export const FriendList = ({ friends }) => {
  //   console.log({ friends });
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem friendListItem={friend} key={friend.id} />
      ))}
    </ul>
  );
};
