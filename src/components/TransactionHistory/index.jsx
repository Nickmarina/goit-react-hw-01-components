import TrasactionHistoryBody from '../TransactionHistoryBody';
import useStyles from './useStyles';

const TransactionHistory = ({items}) => {
    const classes = useStyles();
    return(
        <table className={classes.transactionTable}>
            <thead>
                <tr className= {classes.titles}>
                    <th className={classes.titlesItem}>Type</th>
                    <th className={classes.titlesItem}>Amount</th>
                    <th className={classes.titlesItem}>Currency</th>
                </tr>
            </thead>
            <TrasactionHistoryBody items ={items} />   
        </table>
    );
}

export default TransactionHistory;