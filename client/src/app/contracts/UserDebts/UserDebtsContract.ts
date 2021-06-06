import * as t from 'io-ts';

// Контракт: "Профиль пользователя"
// Documentation: https://sandbox-api.finanso.com/#/User/api%5Cmodules%5Cv1%5Cmodules%5Cuser%5Ccontrollers%5CLimitsController%3A%3AactionView
export const okUserDebtsLimitsContract = t.interface({
  key: t.string,
  value: t.number,
  updated_at: t.string,
  will_reset_at: t.string,
});

export const errorUserDebtsLimitsContract = t.interface({
  status: t.boolean,
  message: t.string,
});

export const okUserDebtsUpdateContract = t.interface({
  form: t.interface({
    name: t.string,
    is_valid: t.boolean,
    fields: t.array(t.interface({})),
    result: t.interface({
      key: t.string,
      value: t.number,
      updated_at: t.string,
      will_reset_at: t.string,
    }),
    error: t.string,
  }),
});

export const errorUserDebtsUpdateContract = t.interface({
  status: t.boolean,
  message: t.string,
});
