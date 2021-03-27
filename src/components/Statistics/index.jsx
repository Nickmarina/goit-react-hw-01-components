import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList';
import styles from './styles.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      <h2>{title}</h2>
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
};
export default Statistics;
