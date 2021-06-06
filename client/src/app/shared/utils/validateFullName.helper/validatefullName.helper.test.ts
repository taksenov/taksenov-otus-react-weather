import { nothingInput, lastAndNotCorrectName } from './@mocks';
import { validateFullName } from './index';

describe('validatefullName.helper >', () => {
  it('Nothing input', () => {
    const { active, errorMessages } = validateFullName({
      full_name: '',
    });

    expect(active).toEqual(nothingInput.active);
    expect(errorMessages).toEqual(nothingInput.errorMessages);
  });

  it('One lastname', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'Аксенов',
    });

    expect(active).toEqual(nothingInput.active);
    expect(errorMessages).toEqual(nothingInput.errorMessages);
  });

  it('One symbol in lastname', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'А',
    });

    expect(active).toEqual(nothingInput.active);
    expect(errorMessages).toEqual(nothingInput.errorMessages);
  });

  it('Only spacebars', () => {
    const { active, errorMessages } = validateFullName({
      full_name: '         ',
    });

    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      moreOneSymbolFirstName: 'moreOneSymbolFirstName',
      moreOneSymbolLastName: 'moreOneSymbolLastName',
    });
  });
  it('NULL', () => {
    const { active, errorMessages } = validateFullName({
      full_name: null,
    });

    expect(active).toEqual(nothingInput.active);
    expect(errorMessages).toEqual(nothingInput.errorMessages);
  });

  it('Empty object', () => {
    const { active, errorMessages } = validateFullName({});

    expect(active).toEqual(nothingInput.active);
    expect(errorMessages).toEqual(nothingInput.errorMessages);
  });

  it('Lastname and not full name', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'Аксенов Т',
    });

    expect(active).toEqual(lastAndNotCorrectName.active);
    expect(errorMessages).toEqual(lastAndNotCorrectName.errorMessages);
  });

  it('All capitalize', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'АКСЕНОВ ТИМОФЕЙ',
    });

    expect(active).toEqual(true);
    expect(errorMessages).toEqual({});
  });

  it('All capitalize full', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'АКСЕНОВ ТИМОФЕЙ СЕРГЕЕВИЧ',
    });

    expect(active).toEqual(true);
    expect(errorMessages).toEqual({});
  });

  it('All lower case', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'аксенов тимофей',
    });

    expect(active).toEqual(true);
    expect(errorMessages).toEqual({});
    expect(
      validateFullName({
        full_name: 'аксенов тимофей',
      }).replaceToUpperCaseFirstSymbol(),
    ).toEqual('Аксенов Тимофей');
  });

  it('All lower case full', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'аксенов тимофей сергеевич',
    });

    expect(active).toEqual(true);
    expect(errorMessages).toEqual({});
    expect(
      validateFullName({
        full_name: 'аксенов тимофей сергеевич',
      }).replaceToUpperCaseFirstSymbol(),
    ).toEqual('Аксенов Тимофей Сергеевич');
    expect(
      validateFullName({
        full_name: 'АКСЕНОВ ТИМОФЕЙ СЕРГЕЕВИЧ',
      }).replaceToUpperCaseFirstSymbol(),
    ).toEqual('Аксенов Тимофей Сергеевич');
  });

  it('Hard variant', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'рАШкуев Абдул-вагап бук-МАГОмеДовиЧ',
    });

    expect(active).toEqual(true);
    expect(errorMessages).toEqual({});
    expect(
      validateFullName({
        full_name: 'рАШкуев Абдул-вагап бук-МАГОмеДовиЧ',
      }).replaceToUpperCaseFirstSymbol(),
    ).toEqual('Рашкуев Абдул-вагап Бук-магомедович');
  });

  it('Very long', () => {
    const { active, errorMessages } = validateFullName({
      full_name:
        'рАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуеврАШкуев Абдул-вагап бук-МАГОмеДовиЧ',
    });

    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      countSymbols: 'countSymbols',
    });
  });

  it('Non started from hyphen V.1', () => {
    const { active, errorMessages } = validateFullName({
      full_name: '-Азаза Олололо трололоевич',
    });

    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      firstSymbolNotBeAHyphen: 'firstSymbolNotBeAHyphen',
    });
  });

  it('Non started from hyphen V.2', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'Азаза -Олололо трололоевич',
    });

    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      firstSymbolNotBeAHyphen: 'firstSymbolNotBeAHyphen',
    });
  });

  it('Non started from hyphen V.3', () => {
    const { active, errorMessages } = validateFullName({
      full_name: 'Азаза Олололо -трололоевич',
    });

    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      firstSymbolNotBeAHyphen: 'firstSymbolNotBeAHyphen',
    });
  });

  it('Non started from hyphen V.4', () => {
    const { active, errorMessages } = validateFullName({
      full_name: '-Азаза -Олололо -трололоевич',
    });

    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      firstSymbolNotBeAHyphen: 'firstSymbolNotBeAHyphen',
    });
  });

  it('Non started from hyphen V.5', () => {
    const { active, errorMessages } = validateFullName({
      full_name: '- - -',
    });

    expect(active).toEqual(false);
    expect(errorMessages).toEqual({
      firstSymbolNotBeAHyphen: 'firstSymbolNotBeAHyphen',
      moreOneSymbolFirstName: 'moreOneSymbolFirstName',
      moreOneSymbolLastName: 'moreOneSymbolLastName',
    });
  });
});
