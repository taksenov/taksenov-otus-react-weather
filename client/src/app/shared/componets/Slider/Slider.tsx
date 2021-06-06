import * as React from 'react';
import zipObject from 'lodash/zipObject';

import { SliderStyled } from './theme';

interface IProps {
  min: number;
  max: number;
  numPoints: number[];
  suffix: string;
  isRange: boolean;
  defaultValue: any;
  isPseudoLabel: boolean;
  onChange?: (v: any) => void;
  value?: number | [number, number];
}

/**
 * Кастомный слайдер для работы внутри Formik
 *
 * @returns
 */
const Slider: React.FC<IProps> = props => {
  const {
    min,
    max,
    numPoints,
    suffix,
    isRange,
    defaultValue,
    isPseudoLabel,
    onChange,
    value,
  } = props;

  const marks = zipObject(numPoints, [
    ...numPoints.map(i => `${String(i)} ${suffix}`),
  ]);

  return (
    <>
      <SliderStyled
        style={{ marginTop: isPseudoLabel ? '30px' : '0px' }}
        range={isRange}
        min={min || 0}
        max={max || 100}
        marks={marks}
        defaultValue={defaultValue}
        onChange={onChange}
        tipFormatter={null}
        value={value}
      />
    </>
  );
};

export default Slider;
