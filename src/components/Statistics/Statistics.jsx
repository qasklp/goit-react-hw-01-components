import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import styles from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
  return <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.statList}>
    {stats.map(stats => (<StatisticsItem key={stats.id} stats={stats} />))}
  </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}