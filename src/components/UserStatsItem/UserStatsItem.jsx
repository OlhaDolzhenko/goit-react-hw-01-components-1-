import PropTypes from 'prop-types';
import styles from './UserStatsItem.module.css';

const UserStatsItem = ({ label, quantity = 0 }) => (
  <li className={styles.statsItem}>
    <span className={styles.label}>{label}</span>
    <span className={styles.quantity}>{quantity}</span>
  </li>
);

UserStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default UserStatsItem;
