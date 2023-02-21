import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
    return <tr className={styles.item}>
        <td className={styles.cell}>{type}</td>
        <td className={styles.cell}>{amount}</td>
        <td className={styles.cell}>{currency}</td>
    </tr>;
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}