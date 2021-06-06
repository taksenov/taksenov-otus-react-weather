import * as React from 'react';
import { storiesOf } from '@storybook/react';
import 'antd/dist/antd.css';
import '../../../../App.scss';

import Slider from './Slider';

const stories = storiesOf('SelectionLoanProduct Form', module);

// Desctop story
stories.add('Slider', () => {
  return (
    <div
      style={{
        maxWidth: '1300px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '20px',
      }}
    >
      <Slider
        min={0}
        max={50}
        numPoints={[1, 5, 15, 40]}
        suffix="%"
        isRange
        defaultValue={[12, 42]}
        isPseudoLabel={false}
      />
    </div>
  );
});

// Mobile story
stories.add('Slider Mobile', () => {
  return (
    <div
      style={{
        maxWidth: '375px',
        borderRight: '1px solid #c1c1c1',
        borderBottom: '1px solid #c1c1c1',
        padding: '15px',
      }}
    >
      <Slider
        min={0}
        max={50}
        numPoints={[1, 5, 15, 40]}
        suffix="%"
        isRange={false}
        defaultValue={20}
        isPseudoLabel={false}
      />
      <Slider
        min={0}
        max={50}
        numPoints={[1, 5, 15, 40]}
        suffix="%"
        isRange
        defaultValue={[12, 42]}
        isPseudoLabel={false}
      />
    </div>
  );
});
