import PropTypes from 'prop-types';
import styles from './UserDescription.module.css';

const UserDescription = ({ avatar, tag, name, location }) => (
  <div className={styles.descriprion}>
    <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

UserDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserDescription;
