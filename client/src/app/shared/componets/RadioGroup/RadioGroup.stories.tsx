import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css';
import '../../../../App.scss';

import RadioGroup from './RadioGroup';

const stories = storiesOf('SelectionLoanProduct Form', module);

const currencyData = [
  { id: 1, label: 'Рубли', value: 1 },
  { id: 2, label: 'Евро', value: 2 },
  { id: 3, label: 'Доллары', value: 3 },
  { id: 4, label: 'Рубли', value: 1 },
  { id: 5, label: 'Евро', value: 2 },
  { id: 6, label: 'Доллары', value: 3 },
  { id: 7, label: 'Рубли', value: 1 },
  { id: 8, label: 'Евро', value: 2 },
  { id: 9, label: 'Доллары', value: 3 },
  { id: 10, label: 'Рубли', value: 1 },
  { id: 11, label: 'Евро', value: 2 },
  { id: 12, label: 'Доллары', value: 3 },
];

// Desctop story
stories.add('RadioGroup', () => {
  return (
    <div
      style={{
        maxWidth: '1300px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px',
      }}
    >
      {/* <RadioGroup label="" /> */}
    </div>
  );
});

// Mobile story
stories.add('RadioGroup Mobile', () => {
  return (
    <div
      style={{
        maxWidth: '375px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '15px',
      }}
    >
      <RadioGroup label="Выберите валюту" data={currencyData} />
      <RadioGroup label="Выберите валюту" data={currencyData} />
    </div>
  );
});
