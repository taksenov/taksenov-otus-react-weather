import { createSelector } from 'reselect';

export const pathname = createSelector(
  (store: any) => store.router.location.pathname,
  pathname => pathname,
);

export const query = createSelector(
  (store: any) => store.router.location.query,
  query => query,
);

export const key = createSelector(
  (store: any) => store.router.location.key,
  key => key,
);
