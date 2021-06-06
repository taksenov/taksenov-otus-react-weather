import styled from 'styled-components';
import { Slider } from 'antd';

export const SliderStyled = styled(Slider)`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum', 'tnum';
  position: relative;
  height: 12px;
  margin: 10px 6px 10px;
  padding: 4px 0;
  cursor: pointer;
  touch-action: none;

  &:hover .ant-slider-track {
    background-color: #e26b84;
  }

  &:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #fff;
  }

  &.ant-slider-with-marks {
    margin-bottom: 24px;
  }

  & .ant-slider-mark-text {
    color: #73797f;
    font-family: Roboto;
    font-size: 9px;
    letter-spacing: -0.06px;
    line-height: 20px;
    text-align: center;
    width: 50px;
  }

  & .ant-slider-step {
    border-radius: 2px;
  }

  & .ant-slider-rail {
    background-color: #e0e7ed;
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #f5f5f5;
    border-radius: 2px;
    transition: background-color 0.3s;
  }

  & .ant-slider-track {
    background-color: #e26b84;
    box-shadow: inset 0 1px 3px 0 rgba(255, 255, 255, 0.7),
      0 2px 5px 0 rgba(226, 107, 132, 0.3), 0 1px 1px 0 rgba(226, 107, 132, 0.3);

    position: absolute;
    height: 4px;
    border-radius: 2px;
    transition: background-color 0.3s;
  }

  & .ant-slider-handle {
    margin-top: -7px;
    background-color: #e26b84;
    width: 20px;
    height: 20px;
    border: 3px solid #fff;
    box-shadow: 0 1px 2px 0 rgba(115, 121, 127, 0.2),
      0 2px 4px 0 rgba(115, 121, 127, 0.1),
      inset 0px 0px 2px 2px rgb(238, 240, 242);
  }

  & .ant-slider-dot:first-child {
    margin-left: -4px;
  }

  & .ant-slider-dot {
    position: absolute;
    top: 7px;
    width: 1px;
    height: 5px;
    margin-left: -4px;
    border: unset;
    border-left: 1px solid #e4e4e5;
    cursor: pointer;
  }

  & .ant-slider-dot-active {
    border-color: #e4e4e5;
  }
`;
