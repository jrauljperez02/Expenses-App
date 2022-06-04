
import Expenses from './components/Expeses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/NewExpense/ExpensesFIlter'

function App() {

  


  const expenses = [
    {id:'e1',title: 'Toilet Paper', amount: 90.12, date: new Date(2020,7,14)},
    {id:'e2',title: 'New TV', amount: 799.49, date: new Date(2021,2,12)},
    {id:'e3',title: 'Car Insurance', amount: 294.67, date: new Date(2022,2,28)},
    {id:'e4',title: 'New Desk (Wooden)', amount: 450, date: new Date(2022,3,10)},
    {id:'e5',title: 'Food ',amount:230,date: new Date(2022,2,5)}
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpensesFilter/>
      <Expenses items={expenses} />
  
    </div>
  );
}

export default App;
