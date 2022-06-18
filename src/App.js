import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import Result from './components/Result';
import NoOfPersons from './components/NoOfPersons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoOfPersons />} />
        <Route path="/noOfPersons" element={<NoOfPersons />} />
        <Route path="/result" element={<Result />} />
        <Route path="/form" element={<ExpenseForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
