import React from 'react';

const Result = (props) => {
  const { personsInfo } = props;
  const personsInfoArray = Object.entries(personsInfo) || [];
  const totalExpense = personsInfoArray.reduce((sum, person) => {
    return Number(person[1].expense) + sum;
  }, 0);
  const perHeadExpense = totalExpense / personsInfoArray.length;
  const excessArray = personsInfoArray
    .filter((person) => {
      if (person[1].expense - perHeadExpense > 0) {
        return person.push({ diff: person[1].expense - perHeadExpense });
      }
      return false;
    })
    .sort((a, b) => b[1].expense - a[1].expense);
  const deficitArray = personsInfoArray
    .filter((person) => {
      if (person[1].expense - perHeadExpense < 0) {
        return person.push({ diff: person[1].expense - perHeadExpense });
      }
      return false;
    })
    .sort((a, b) => a[1].expense - b[1].expense);
  const mappingObj = excessArray.reduce((mapObj, person) => {
    const defArr = [];
    for (let i = 0; i < 9; i++) {
      const val = person[2].diff + deficitArray[0][2].diff;
      if (val === 0) {
        console.log('Entered zero condition');
        const firEle = deficitArray.shift();
        defArr.push({ person: firEle[0], amount: firEle[2].diff });
        return {
          ...mapObj,
          [person[0]]: defArr,
        };
      } else if (val < 0) {
        console.log('Entered negative condition');
        const firstEle = deficitArray[0];
        deficitArray[0][2].diff = val;
        defArr.push({ person: firstEle[0], amount: person[2].diff * -1 });
        return {
          ...mapObj,
          [person[0]]: defArr,
        };
      } else if (val > 0) {
        console.log('Entered positive condition');
        const firstEle = deficitArray.shift();
        defArr.push({ person: firstEle[0], amount: firstEle[2].diff });
        person[2].diff = val;
      }
    }
    return {
      ...mapObj,
      [person[0]]: defArr,
    };
  }, {});
  console.log(excessArray, deficitArray, mappingObj);
  return <div>Result</div>;
};

export default Result;
