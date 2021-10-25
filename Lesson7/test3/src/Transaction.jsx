import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const dateFormat = moment(time).format('DD MMM');
  const timeFormat = moment(time).format('HH:mm');
  const numberFormat = Intl.NumberFormat('en-GB').format(amount);

  return (
    <li className="transaction">
      <span className="transaction__date">{dateFormat}</span>
      <span className="transaction__time">{timeFormat}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{numberFormat}</span>
    </li>
  );
};

export default Transaction;
