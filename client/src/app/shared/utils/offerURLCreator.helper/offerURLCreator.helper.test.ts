import {
  withUrlParamsInput,
  withUrlParamsRes,
  normalInput,
  normalRes,
  nothingInput,
  nothingRes,
} from './@mocks';
import { offerURLCreator } from './index';

describe('offerURLCreator.helper', () => {
  it('withUrlParamsInput', () => {
    expect(offerURLCreator(withUrlParamsInput)).toEqual(withUrlParamsRes);
  });

  it('normalInput', () => {
    expect(offerURLCreator(normalInput)).toEqual(normalRes);
  });

  // NB: Из-за того, что проверяем заведомо "сломанные" входные данные
  // пришлось поставить ts-ignore
  it('nothingInput', () => {
    // NB: Разрешенный игнор
    // eslint-disable-next-line
    // @ts-ignore
    expect(offerURLCreator(nothingInput)).toEqual(nothingRes);
  });
});
