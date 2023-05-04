import css from 'components/FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
