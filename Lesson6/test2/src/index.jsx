import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbpx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={[1, 2]} />, rootElement);
