import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

//All inputs collectively called as "properties - (props)"
const ExpenseItem = (props) => {
    //this is array destructuring..with meaning "title = props.title".
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        
        //This 'setTitle' not only updates the special variable..
        //But also re-evaluates the component where this function is called.
        setTitle("updated")
        console.log(title);
    };
    return (
        /*Here, Card is the Container component */
        <Card className = 'expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>update</button>
        </Card>
    );
}

export default ExpenseItem;