import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import Result from './components/Result/Result';
import NoOfPersons from './components/NoOfPersons/NoOfPersons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/noOfPersons" element={<NoOfPersons />} />
        <Route path="/result" element={<Result />} />
        <Route path="/form" element={<ExpenseForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
