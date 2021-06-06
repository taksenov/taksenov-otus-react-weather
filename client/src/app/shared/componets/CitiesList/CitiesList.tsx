import * as React from 'react';
import { Row, Col } from 'antd';

import CityCard from '../CityCard';

import styles from './CitiesList.module.scss';

interface IProps {
  list: any;
}

/**
 * Список карточек статей
 *
 * @returns
 */
const CitiesList: React.FC<IProps> = props => {
  const { list } = props;

  return (
    <>
      <Row
        gutter={15}
        style={{
          marginLeft: '0px',
          marginRight: '0px',
        }}
      >
        {list.map((item: any) => {
          const {
            id,
            name,
            sys: { country },
          } = item;

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
              <CityCard id={id} header={name} shortText={country} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CitiesList;
