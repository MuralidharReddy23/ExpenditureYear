import './Card.css';

//This is a "Container Component" - which acts like a shell.
//Means this can used as a Wrapper around ExpenseItem. 
//This "Card" component can be re-used.
const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;