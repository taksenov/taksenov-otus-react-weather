import * as React from 'react';
import { Row, Col } from 'antd';

import FavouriteCityCard from '../FavouriteCityCard';

import styles from './FavouriteCitiesList.module.scss';

interface IProps {
  data: any;
}

/**
 * Список городов в избранном
 *
 * @returns
 */
const FavouriteCitiesList: React.FC<IProps> = props => {
  const { data: dataTemp } = props;
  const data = dataTemp?.favouriteCities ?? [];

  return (
    <>
      <Row
        gutter={15}
        style={{
          marginLeft: '0px',
          marginRight: '0px',
        }}
      >
        LOL
        {data.map((item: any) => {
          const id = item?.cityID ?? -1;
          const name = item?.name ?? -1;
          const temperature = item?.temperature ?? -1;

          return (
            <Col
              key={id}
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={8}
              className={styles.colCity}
            >
              <FavouriteCityCard
                id={id}
                header={name}
                shortText={temperature}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default FavouriteCitiesList;
