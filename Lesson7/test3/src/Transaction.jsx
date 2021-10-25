import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const transactionTime = time;
  const dateFormat = date => moment(date).format('DD MMM');
  const timeFormat = date => moment(date).format('HH:mm');

  return (
    <li className="transaction">
      <span className="transaction__date">{dateFormat(transactionTime)}</span>
      <span className="transaction__time">{timeFormat(transactionTime)}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amount}</span>
    </li>
  );
};

export default Transaction;
