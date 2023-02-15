
import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //Listening to the imputs.. Using Listeners.
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //listener handler functions.. Which are used to get values from "<form>".
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //SubmitHandler
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
        
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className = 'new-expense__control'>
                <label>Title</label>
                {/* Two-way binding- here we listening to both values and updating function*/ } 
                <input type = "text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
                <label>Amount</label>
                <input type = "number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className = 'new-expense__control'>
                <label>Date</label>
                <input type = "date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'> 
            <button type="submit">Add expense</button>
        </div>
    </form>
};

export default ExpenseForm;