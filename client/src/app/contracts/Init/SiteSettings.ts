import * as t from 'io-ts';

// Контракт: "Настройки сайта"
// API ver. "[1.6.4]" - 2021-02-01
// Documentation: https://sandbox-api.finanso.com/#/Site%20settings/api%5Cmodules%5Cv1%5Cmodules%5Csite_settings%5Ccontrollers%5CDefaultController%3A%3AactionIndex
export const okSiteSettingsContract = t.type({
  cpa: t.array(t.string),
  recaptcha: t.interface({
    public: t.string,
  }),
  user_id: t.number,
});

// Интерфейс для typescript
export type IOkSiteSettingsContract = t.TypeOf<typeof okSiteSettingsContract>;

export const errorSiteSettingsContract = t.interface({
  status: t.boolean,
  message: t.string,
});
