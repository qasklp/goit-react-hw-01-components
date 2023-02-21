import PropTypes from 'prop-types';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return <table className={styles.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (<TransactionHistoryItem
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
            />))}
        </tbody>
    </table>;
}

TransactionHistoryItem.propTypes = {
    items: PropTypes.array.isRequired,
}