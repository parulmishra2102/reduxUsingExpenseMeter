import React from 'react'
import Expense_List from '../../expenseList/Expense_List'
import Topfold from '../../topfold/Topfold'
import "./home.css"

function Home() {
    return (
        <div className='home'>
          <Topfold />
        <Expense_List />
        </div>
    )
}

export default Home
