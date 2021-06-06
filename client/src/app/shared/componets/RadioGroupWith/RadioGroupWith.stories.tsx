import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css';
import '../../../../App.scss';

import RadioGroupWith from './RadioGroupWith';

const stories = storiesOf('SelectionLoanProduct Form', module);

const radioBillingData = [
  {
    id: 1,
    renderElem: (
      <>
        <div>600 ₽</div>
        <div>Раз в месяц</div>
      </>
    ),
    value: 1,
  },
  {
    id: 2,
    renderElem: (
      <>
        <div>700 ₽</div>
        <div>Раз в месяц</div>
      </>
    ),
    value: 2,
  },
  {
    id: 3,
    renderElem: (
      <>
        <div>800 ₽</div>
        <div>Раз в месяц</div>
      </>
    ),
    value: 3,
  },
];

// Desctop story
stories.add('RadioGroupWith', () => {
  return (
    <div
      style={{
        maxWidth: '1300px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px',
      }}
    >
      {/* <RadioGroupWith label="" /> */}
    </div>
  );
});

// Mobile story
stories.add('RadioGroupWith Mobile', () => {
  return (
    <div
      style={{
        maxWidth: '375px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '15px',
      }}
    >
      <RadioGroupWith label="Выберите валюту" data={radioBillingData} />
      <RadioGroupWith label="Выберите валюту" data={radioBillingData} />
    </div>
  );
});
