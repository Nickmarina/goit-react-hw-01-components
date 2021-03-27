import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={styles.List}>
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className={styles.Label}>{label}</span>
          <span className={styles.Percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;
