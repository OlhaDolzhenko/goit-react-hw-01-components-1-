/* import PropTypes from 'prop-types'; */
import styles from './UserStats.module.css';
import UserStatsItem from '../UserStatsItem/UserStatsItem';

const UserStats = ({ stats }) => (
  <ul className={[styles.stats, 'list'].join(' ')}>
    {Object.entries(stats).map(entry => {
      return (
        <UserStatsItem key={entry[0]} label={entry[0]} quantity={entry[1]} />
      );
    })}
  </ul>
);

export default UserStats;
