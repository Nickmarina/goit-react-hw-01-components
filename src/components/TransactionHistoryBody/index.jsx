import PropTypes from 'prop-types';
import useStyles from './useStyles';

const TrasactionHistoryBody = ({items}) =>{
    const classes = useStyles();
    return(
        <tbody>
        {items.map(({id, type, amount, currency}) => (
            <tr key ={id}>
                <td className = {classes.type}>{type}</td>
                <td className = {classes.item}>{amount}</td>
                <td className = {classes.item}>{currency}</td>
            </tr>
        ))}  
    </tbody>
    )
}

TrasactionHistoryBody.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
    
}

export default TrasactionHistoryBody;