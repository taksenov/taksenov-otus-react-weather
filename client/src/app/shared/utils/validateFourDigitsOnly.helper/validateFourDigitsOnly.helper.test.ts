import { validateFourDigitsOnly } from './index';

describe('validateFourDigitsOnly.helper >', () => {
  it('Nothing input', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '',
    });

    expect(notDigits).toEqual(true);
    expect(active).toEqual(true);
    expect(errorMessages).toEqual({ notDigits: 'notDigits' });
  });

  it('Not Digits v.1', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: 'Q',
    });

    expect(notDigits).toEqual(true);
    expect(active).toEqual(true);
    expect(errorMessages).toEqual({ notDigits: 'notDigits' });
  });

  it('Not Digits v.2', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: 'QQQqqqqqqqq     rgerhsetrt dsrgsehs s ---- ',
    });

    expect(notDigits).toEqual(true);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      notDigits: 'notDigits',
      countSymbols: 'countSymbols',
    });
  });

  it('Not Digits v.3', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '------------------',
    });

    expect(notDigits).toEqual(true);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      notDigits: 'notDigits',
      countSymbols: 'countSymbols',
    });
  });

  it('Not Digits v.4', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '~`````*****dhdfjyd ',
    });

    expect(notDigits).toEqual(true);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      notDigits: 'notDigits',
      countSymbols: 'countSymbols',
    });
  });

  it('Not Digits v.5', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '                          ',
    });

    expect(notDigits).toEqual(true);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      notDigits: 'notDigits',
      countSymbols: 'countSymbols',
    });
  });

  it('Not Digits v.6', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: 'Q12345',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({});
  });

  it('Not Digits v.7', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '1234Q',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({});
  });

  it('Not Digits v.8', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '1234sdf',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({ countSymbols: 'countSymbols' });
  });

  it('Digits v.1', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '1234567',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({ countSymbols: 'countSymbols' });
  });

  it('Digits v.2', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '123456',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({});
  });

  it('Digits v.3', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '12345',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({});
  });

  it('Digits v.4', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '0000',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({});
  });

  it('Digits v.5', () => {
    const { notDigits, active, errorMessages } = validateFourDigitsOnly({
      field: '0',
    });

    expect(notDigits).toEqual(false);
    expect(active).toEqual(false);
    expect(errorMessages).toEqual({});
  });
});

describe('validateFourDigitsOnly.helper replaceToNothing >', () => {
  it('From 1234567 to 123456', () => {
    const validator = validateFourDigitsOnly({
      field: '1234567',
    });
    const value = validator.replaceToNothing();

    expect(value).toEqual('123456');
  });

  it('From 1234Q to "1234"', () => {
    const validator = validateFourDigitsOnly({
      field: '1234Q',
    });
    const value = validator.replaceToNothing();

    expect(value).toEqual('1234');
  });

  it('From 1234q to "1234"', () => {
    const validator = validateFourDigitsOnly({
      field: '1234q',
    });
    const value = validator.replaceToNothing();

    expect(value).toEqual('1234');
  });

  it('From Q1234 to "1234"', () => {
    const validator = validateFourDigitsOnly({
      field: 'Q1234',
    });
    const value = validator.replaceToNothing();

    expect(value).toEqual('1234');
  });

  it('From 1234 to 1234', () => {
    const validator = validateFourDigitsOnly({
      field: '1234',
    });
    const value = validator.replaceToNothing();

    expect(value).toEqual('1234');
  });

  it('From "~~~****1234QWERRTT---====" to "1234"', () => {
    const validator = validateFourDigitsOnly({
      field: '~~~****1234QWERRTT---====',
    });
    const value = validator.replaceToNothing();

    expect(value).toEqual('1234');
  });

  it('From "~~~****QWERRTT---====" to ""', () => {
    const validator = validateFourDigitsOnly({
      field: '~~~****QWERRTT---====',
    });
    const value = validator.replaceToNothing();

    expect(value).toEqual('');
  });
});
