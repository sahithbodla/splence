import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Input.css';

const Input = (props) => {
  const { slNo, addPerson, setFocus, setError } = props;
  const [name, setName] = useState('');
  const [expense, setExpense] = useState('');

  const [focusName, setFocusName] = useState(false);
  const [focusExpense, setFocusExpense] = useState(false);

  const [errorName, setErrorName] = useState('');
  const [errorExpense, setErrorExpense] = useState('');

  useEffect(() => {
    addPerson({ slNo, name, expense });
  }, [name, expense, addPerson, slNo]);

  useEffect(() => {
    setFocus((state) => {
      return { ...state, [slNo]: [focusName, focusExpense] };
    });
  }, [focusName, focusExpense, setFocus, slNo]);

  useEffect(() => {
    setError((state) => {
      return { ...state, [slNo]: [errorName, errorExpense] };
    });
  }, [errorName, errorExpense, setError, slNo]);

  useEffect(() => {
    if (focusExpense && Number.isNaN(Number(expense))) {
      setErrorExpense('Please enter only Numbers');
    } else if (focusExpense && expense === '') {
      setErrorExpense('Please enter a Number');
    }
  }, [focusExpense, expense]);

  useEffect(() => {
    if (focusName && name === '') {
      setErrorName('Please enter a Name');
    }
  }, [focusName, name]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={2} className="center">
          {slNo}
        </Grid>
        <Grid item md={6}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            onChange={(e) =>
              setName((state) => {
                setFocusName(true);
                setErrorName('');
                return e.target.value;
              })
            }
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            id="standard-basic"
            label="Expense"
            variant="standard"
            name="expense"
            onChange={(e) =>
              setExpense((state) => {
                setFocusExpense(true);
                setErrorExpense('');
                return e.target.value;
              })
            }
          />
        </Grid>
      </Grid>
      <br />
    </div>
  );
};

export default Input;
