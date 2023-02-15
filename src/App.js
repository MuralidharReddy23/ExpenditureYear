import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { title : "Health Insurance", amount : 291.12, date : new Date(2022, 2, 5)},
    { title : "Office Chair", amount : 88.12, date : new Date(2022, 5, 10)},
    { title : "Study Table", amount : 60, date : new Date(2022, 7, 15)},
    { title : "Maintainance", amount : 75, date : new Date(2022, 11, 20)}
  ];

  const addExpenseHandler = (expense)=> {
    console.log('in app.js');
    console.log(expense);
  };
  
  return (
    <div>
      <h2>Expenditures of the YEAR - 2022</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      {/* Here, expenses constant is sent into ExpenseItem */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
