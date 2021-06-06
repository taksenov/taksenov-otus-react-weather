import * as t from 'io-ts';

// Контракт: "Подписки пользователя"
// Documentation: https://sandbox-api.finanso.com/#/User/api%5Cmodules%5Cv1%5Cmodules%5Cuser%5Ccontrollers%5CSettingController%3A%3AactionIndex
const settings = t.interface({
  name: t.string,
  value: t.string,
});

export const okUserSubscriptionContract = t.array(settings);

export const errorUserSubscriptionContract = t.interface({
  status: t.boolean,
  message: t.string,
});

export const sendUserSubscriptionPutContract = t.interface({
  name: t.string,
  value: t.string,
});

export const okUserSubscriptionPutContract = t.interface({
  name: t.string,
  value: t.string,
});

export const errorUserSubscriptionPutContract = t.interface({
  status: t.boolean,
  message: t.string,
});
