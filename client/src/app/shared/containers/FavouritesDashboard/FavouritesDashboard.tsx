import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Preloader from '../../componets/Preloader';
import FavouriteCitiesList from '../../componets/FavouriteCitiesList';

import { useWindowSize } from '../../hooks/useWindowSize';

import styles from './FavouritesDashboard.module.scss';

import { DEVICE_NETBOOKS_WIDTH } from '../../constants/Defaults/constants';

const FAVOURITES_ALL = gql`
  {
    favouriteCities {
      cityID
      date
      name
      temperature
      feelsLike
      pressure
      humidity
    }
  }
`;

export const FavouritesDashboard = () => {
  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  let isMobile = false;

  if (width < DEVICE_NETBOOKS_WIDTH) {
    isMobile = true;
  }

  const { loading, error, data } = useQuery(FAVOURITES_ALL);

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <span>Погода</span>
        {isMobile && (
          <div className={styles.subHeaderMobile}>
            <span>в избранных городах</span>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className={styles.subHeader}>
          <span>в избранных городах</span>
        </div>
      )}

      {/* Cities List */}
      <div className={styles.citiesList}>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Preloader size="large" />
          </div>
        ) : (
          <FavouriteCitiesList data={data} />
        )}
      </div>
    </>
  );
};

export default FavouritesDashboard;
