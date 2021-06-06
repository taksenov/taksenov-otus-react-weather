import * as t from 'io-ts';

// Контракт:
// "Данные для подключения к каналу "Сообщения чата поддержки" сокет сервера"
// Documentation: https://sandbox-api.finanso.com/#/Support/api%5Cmodules%5Cv1%5Cmodules%5Csupport%5Ccontrollers%5CMessageController%3A%3AactionSocketAuth
export const socketInitDataContract = t.interface({
  socket: t.interface({
    proto: t.string,
    host: t.string,
    port: t.string,
  }),
  token: t.string,
  channel: t.string,
});
