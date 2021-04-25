/* import PropTypes from 'prop-types'; */
import UserDescription from '../UserDescription/UserDescription';
import UserStats from '../UserStats/UserStats';
import styles from './UserProfile.module.css';

const UserProfile = ({ user }) => (
  <div className={styles.profile}>
    <UserDescription
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
    />
    <UserStats stats={user.stats} />
  </div>
);

export default UserProfile;
