import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    transactionTable: {
        margin: 0,
        padding: 0,
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign:'center',
        boxShadow: '0px 6px 12px 6px rgba(128, 138, 146, 0.36)',
    },

    titles:{
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 30,
        color: 'white',
        backgroundColor: 'darkgray',
    },

    titlesItem:{
        boxShadow: '0px 5px 10px 2px rgba(128, 138, 146, 0.2)',
    }
})

export default useStyles;