// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @ NB: DEPRECATED: КОМПОНЕНТ С ЗАПРЕДЕЛЬНО ВЫСОКИМ "ТЕХНИЧЕСКИМ ДОЛГОМ"            @
// @ Это рефакторинг версии кода, написанного первоначальной командой разработчиков. @
// @ Ни при каких условиях не использовать подходы из этого компонента               @
// @ в других частях системы. Иначе будет очень больно сопровождать.                 @
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

import isEmpty from 'lodash/isEmpty';
import filter from 'lodash/filter';
import values from 'lodash/values';
import replace from 'lodash/replace';

export const regLetters = /\D+/g;
export const regNumbers = /[0-9]/;

export const validateFourDigitsOnly = (fields: any) => {
  const result = {
    countSymbols: false,
    notDigits: false,
  };

  const errorMessages: Record<any, any> = {};
  let text = fields.field || '';

  result.countSymbols = text.length <= 6;

  if (!regNumbers.test(text)) {
    result.notDigits = true;
    errorMessages.notDigits = 'notDigits';
  }

  if (!result.countSymbols) {
    errorMessages.countSymbols = 'countSymbols';
  }

  return {
    notDigits: errorMessages.notDigits === 'notDigits',
    active: isEmpty(filter(values(result), value => !value)),
    errorMessages,
    replaceToNothing: () => {
      let confirmCode = replace(text, regLetters, '');

      if (confirmCode.length > 6) {
        confirmCode = confirmCode.substr(0, 6);
      }

      return confirmCode;
    },
  };
};
