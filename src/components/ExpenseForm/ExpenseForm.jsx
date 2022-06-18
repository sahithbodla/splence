import React, { useEffect, useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import Input from '../Input';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [focus, setFocus] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    const focusBool = Object.values(focus).flat().includes(false);
    const errorBool = Object.values(error)
      .flat()
      .map((x) => {
        if (x) {
          return true;
        }
        return false;
      })
      .includes(true);
    setDisabled(focusBool || errorBool);
  }, [focus, error]);

  const number = Number(props.noOfPersons);
  const arr = Array(number)
    .fill()
    .map((_, i) => i + 1);

  return (
    <div className="midPage">
      <h2>Please enter below details</h2>
      {arr.map((slNo) => (
        <Input key={slNo} slNo={slNo} setFocus={setFocus} setError={setError} />
      ))}
      <div className="buttonDiv">
        <Button variant="contained" color="success" disabled={disabled}>
          Check the Result
        </Button>
        <Tooltip
          title={
            disabled
              ? 'Please fill out all the fields'
              : 'Click to know the result'
          }
          arrow={true}
        >
          <InfoOutlined />
        </Tooltip>
      </div>
    </div>
  );
};

export default ExpenseForm;
