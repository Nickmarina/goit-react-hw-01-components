import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}</span>
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
