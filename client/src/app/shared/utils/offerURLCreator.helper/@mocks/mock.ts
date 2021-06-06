export const withUrlParamsInput = {
  rawUrl:
    'http://htmlbook.ru/faq/kak-otkryt-ssylku-v-novom-okne?pid=100500&offer_id=228',
  siteSettings: {
    cpa: ['sub2', 'sub1', 'sub3'],
    recaptcha: {
      public: '6LfgzvcZAAAAAAxKnuWo6KpZslCEuK9GSqPlA7s0',
    },
    user_id: 322,
  },
  pathname: '/cabinet/credit-rating',
};
export const withUrlParamsRes =
  'http://htmlbook.ru/faq/kak-otkryt-ssylku-v-novom-okne?pid=100500&offer_id=228&sub2=/cabinet/credit-rating&sub1=feed&sub3=322';

export const normalInput = {
  rawUrl: 'http://htmlbook.ru/faq/kak-otkryt-ssylku-v-novom-okne',
  siteSettings: {
    cpa: ['sub2', 'sub1', 'sub3'],
    recaptcha: {
      public: '6LfgzvcZAAAAAAxKnuWo6KpZslCEuK9GSqPlA7s0',
    },
    user_id: 322,
  },
  pathname: '/cabinet/credit-rating',
};

export const normalRes =
  'http://htmlbook.ru/faq/kak-otkryt-ssylku-v-novom-okne?sub2=/cabinet/credit-rating&sub1=feed&sub3=322';

export const nothingInput = {
  rawUrl: null,
  siteSettings: {
    cpa: ['sub2', 'sub1', 'sub3'],
    recaptcha: {
      public: '6LfgzvcZAAAAAAxKnuWo6KpZslCEuK9GSqPlA7s0',
    },
    user_id: 322,
  },
  pathname: '/cabinet/credit-rating',
};

export const nothingRes = '?sub2=/cabinet/credit-rating&sub1=feed&sub3=322';
