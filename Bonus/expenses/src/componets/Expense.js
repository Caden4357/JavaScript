import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';

const Expense = (props) => {

    const {expenses} = props
    return (
        <div className='expenses'>
            {
                expenses.map((exp, idx) => (
                        <ExpenseItem 
                        key={idx} 
                        title = {exp.title} 
                        date={exp.date} 
                        amount={exp.amount}
                        />
                    ))
            }

        </div>
    )
}
export default Expense