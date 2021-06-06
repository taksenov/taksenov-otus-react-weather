import * as t from 'io-ts';

// Контракт: "Профиль пользователя"
// Documentation: https://sandbox-api.finanso.com/#/User/api%5Cmodules%5Cv1%5Cmodules%5Cuser%5Ccontrollers%5CProfileController%3A%3AactionIndex
export const okUserProfileContract = t.interface({
  email: t.string,
  email_confirm: t.number,
  profile: t.interface({
    firstname: t.string,
    midlename: t.string,
    lastname: t.string,
    birthday: t.string,
    gender: t.string,
  }),
  lastPhone: t.interface({
    phone: t.string,
    prefix: t.string,
    code: t.string,
    number: t.string,
  }),
  phone_confirm: t.number,
  avatar: t.interface({
    avatar: t.string,
    status: t.number,
    moderation_status: t.number,
  }),
});

export const errorUserProfileContract = t.interface({
  status: t.boolean,
  message: t.string,
});
