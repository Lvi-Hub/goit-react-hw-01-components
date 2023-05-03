import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ friendListItem }) => {
  console.log({ friendListItem });
  const { avatar, name, isOnline } = friendListItem;
  return (
    <li className={css.item}>
      {isOnline !== true && (
        <span className={css.status} style={{ backgroundColor: 'red' }}></span>
      )}
      {isOnline === true && (
        <span
          className={css.status}
          style={{ backgroundColor: 'green' }}
        ></span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
