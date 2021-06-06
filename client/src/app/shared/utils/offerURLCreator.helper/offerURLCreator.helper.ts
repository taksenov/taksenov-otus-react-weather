import qs from 'qs';

import { IOkSiteSettingsContract } from '../../../contracts/Init';

import { paramsSerializerWitoutEncode } from '../paramsSerializer';

interface IOfferURLCreator {
  rawUrl: string;
  siteSettings: IOkSiteSettingsContract;
  pathname: string;
}

/**
 * Хелпер для формирования ссылки на офер, с заданными через бекенд
 * URL параметрами
 *
 * @param {*} {
 *   rawUrl,
 *   siteSettings,
 *   pathname,
 * }
 * @returns
 */
export const offerURLCreator: (p: IOfferURLCreator) => string = ({
  rawUrl,
  siteSettings,
  pathname,
}) => {
  const cpaFeedSrcUrlOne = siteSettings?.cpa[1] ?? 'sub1';
  const cpaFeedSrcUrlTwo = siteSettings?.cpa[0] ?? '';
  const cpaFeedSrcUrl3 = siteSettings?.cpa[2] ?? 'sub3';
  const userID = siteSettings?.user_id ?? -1;
  const [pureUrl, urlParams] = rawUrl ? rawUrl.split('?') : ['', null];
  const parsedOuterURLParams = urlParams ? qs.parse(urlParams) : {};

  let url = pureUrl;

  if (cpaFeedSrcUrlTwo !== '') {
    url = `${url}?${paramsSerializerWitoutEncode({
      ...parsedOuterURLParams,
      [cpaFeedSrcUrlTwo]: pathname,
      [cpaFeedSrcUrlOne]: 'feed',
      [cpaFeedSrcUrl3]: userID,
    })}`;
  }

  return url;
};
