import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    type:{
        paddingTop:5,
        paddingBottom: 5,
        boxShadow: '0px 5px 10px 2px rgba(128, 138, 146, 0.2)',
        fontWeight: 700,
        fontSize: 22,
        color:'darkslategray',

    },
    item:{
        paddingTop:5,
        paddingBottom: 5,
        boxShadow: '0px 5px 10px 2px rgba(128, 138, 146, 0.2)',
        fontSize: 20,
        color: 'dimgray',
    },
  
})

export default useStyles;