import React, { useState, useEffect } from 'react';
import { Input, Button, Tooltip } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import './NoOfPersons.css';

const NoOfPersons = (props) => {
  const { number, setNumber } = props;
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  useEffect(() => {
    if (focused && Number.isNaN(Number(number))) {
      setDisable(true);
      setError('Please enter only Numbers');
    } else if (focused && number === '') {
      setDisable(true);
      setError('Please enter a Number');
    } else if ((focused && Number(number) < 1) || Number(number) > 10) {
      setDisable(true);
      setError('Please enter valid number between 1 and 10');
    } else {
      setDisable(false);
    }
  }, [focused, number]);

  const numberChange = (e) => {
    setError('');
    setOpenTooltip(true);
    setFocused(true);
    setNumber(e.target.value);
    setTimeout(() => {
      setOpenTooltip(false);
    }, 5000);
  };

  return (
    <div className="midPage">
      {`Please enter total number of friends (max-10)`} &nbsp;
      <Input onChange={numberChange} value={number} />
      &nbsp;&nbsp;
      <Button
        variant="contained"
        color="primary"
        disabled={!focused || disable}
      >
        Next
      </Button>
      &nbsp;&nbsp;
      <Tooltip title={error} arrow={true} open={openTooltip}>
        <InfoOutlined sx={disable ? { color: 'red' } : { color: 'blue' }} />
      </Tooltip>
    </div>
  );
};

export default NoOfPersons;
