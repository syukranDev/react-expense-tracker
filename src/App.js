import React from 'react';
import { Header } from './components/Header'; 
import { Header2 } from './components/Header2'
import { Balance } from './components/Balance'; 
import { IncomeExpenses } from './components/IncomeExpenses'; 
import { TransactionList } from './components/TransactionList'; 
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Header2 />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
