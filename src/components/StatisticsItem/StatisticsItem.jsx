import PropTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsItem = ({stats}) => {
    return <li className={styles.item} style={{backgroundColor: getRandomHexColor()}}>
        <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}%</span>
    </li>
}

StatisticsItem.propTypes = {
    stats: PropTypes.object.isRequired,
}