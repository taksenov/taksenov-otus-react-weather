import * as t from 'io-ts';

// Контракт: "Сообщение от сервера: чат "Поддержка", сервер: Веб сокетов"
// Documentation: https://www.wrike.com/open.htm?id=586134326
const messages = t.interface({
  id: t.number,
  is_from_service: t.number,
  created_at: t.string,
  value: t.interface({
    value: t.string,
    type: t.string,
  }),
});

export const soketServerMsgContract = t.interface({
  data: t.interface({ messages: t.array(messages) }),
});
