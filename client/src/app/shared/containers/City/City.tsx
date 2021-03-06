// NB: Разрешенный игнор
/* eslint-disable react/no-danger */

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import get from 'lodash/get';
import { CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import { Row, Col } from 'antd';
import * as E from 'fp-ts/lib/Either';

import Preloader from '../../componets/Preloader';

import { useWindowSize } from '../../hooks/useWindowSize';

import { citiesCityRequest } from '../../../states/Cities/state/duck';
import {
  isFetchingCity as isFetchingCitySelector,
  dataCity as dataCitySelector,
  resultCity as resultCitySelector,
  isFetchingCategories as isFetchingCategoriesSelector,
} from '../../../states/Cities/state/selectors';

import styles from './City.module.scss';

import { DEVICE_NETBOOKS_WIDTH } from '../../constants/Defaults/constants';
import { CITIES_URL } from '../../constants/Routes/constants';

import arrowLeftImage from './assets/images/arrowLeft.svg';

interface IState {
  cityID: number;
  dataCityState: Record<string, any>;
  errorForceRedirect: boolean;
  resultCategoriesState: any[];
}

const initState: IState = {
  cityID: -1,
  dataCityState: {},
  errorForceRedirect: false,
  resultCategoriesState: [],
};

const City: React.FC<any> = props => {
  const { match } = props;
  const { params } = match;
  const { ID = -1 } = params;

  const dispatch = useDispatch();
  const isFetchingCity = useSelector(isFetchingCitySelector);
  const dataCity = useSelector(dataCitySelector);
  const resultCity = useSelector(resultCitySelector);
  const isFetchingCategories = useSelector(isFetchingCategoriesSelector);

  const [state, setState] = React.useState(initState);
  const { cityID, dataCityState, errorForceRedirect, resultCategoriesState } =
    state;
  const currentCity = get(dataCityState, `${cityID}`, {}) || {};
  const { date, name = '' } = currentCity;
  const temperature = currentCity?.main?.temp ?? '';
  const feelsLike = currentCity?.main?.feels_like ?? '';
  const pressure = currentCity?.main?.pressure ?? '';
  const humidity = currentCity?.main?.humidity ?? '';

  const formatted = get(date, 'formatted', '') || '';

  // cdM
  React.useEffect(() => {
    setState(prevState => ({
      ...prevState,
      cityID: ID,
    }));
  }, [ID]);

  // Сложить данные о статьях в стейт
  React.useEffect(() => {
    setState(prevState => ({
      ...prevState,
      dataCityState: dataCity,
    }));
  }, [dataCity]);

  // Проверить ID статьи, если ее нет в кеше, то загрузить с бекенда
  React.useEffect(() => {
    if (cityID < 0) {
      return undefined;
    }

    if (!dataCityState[cityID]) {
      dispatch({
        type: citiesCityRequest.toString(),
        payload: { id: cityID },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityID]);

  // Проверить результат на наличие ошибок
  React.useEffect(() => {
    if (E.isLeft(resultCity)) {
      setState(prevState => ({
        ...prevState,
        errorForceRedirect: true,
      }));
    }
  }, [resultCity]);

  const windowSize = useWindowSize();
  const { width = 0 } = windowSize;

  let isMobile = false;

  if (width < DEVICE_NETBOOKS_WIDTH) {
    isMobile = true;
  }

  if (errorForceRedirect) {
    return <Redirect to={CITIES_URL} />;
  }

  return (
    <>
      {isFetchingCity ? (
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
        <div className={styles.articleWrapper}>
          {/* Header */}
          <div className={styles.header}>
            <Link to={`${CITIES_URL}`}>
              <img src={arrowLeftImage} alt="Back" width={24} height={24} />
            </Link>
            <span>{name}</span>
          </div>
          {/* Date */}
          <div className={styles.date}>
            <CalendarOutlined
              style={{
                fontSize: '13px',
                color: '#73797F',
                marginRight: '5px',
              }}
            />
            <span>{moment(formatted).format('DD.MM.YY')}</span>
          </div>

          {/* Base INFO */}
          <Row gutter={15}>
            {/* City Content */}
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={16}
              className={styles.colCity}
            >
              {/* Content */}
              <div className={styles.content}>Температура: {temperature} F</div>
              <div className={styles.content}>Ощущается как: {feelsLike} F</div>
              <div className={styles.content}>Давление: {pressure} bar</div>
              <div className={styles.content}>Влажность: {humidity} %</div>
            </Col>

            {/* Aside info */}
            {!isMobile && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={8}
                className={styles.colCity}
              >
                {isFetchingCategories ? (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Preloader size="default" />
                  </div>
                ) : (
                  <div className={styles.categoriesListWrapper}>
                    {resultCategoriesState.length > 0 && (
                      <div className={styles.categoriesHeader}>Все рубрики</div>
                    )}

                    <ul>
                      {resultCategoriesState.map((item: any) => {
                        const { id, name } = item;

                        return (
                          <li key={id}>
                            <Link to={`${CITIES_URL}?filter-category-id=${id}`}>
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </Col>
            )}
          </Row>
        </div>
      )}
    </>
  );
};

export default City;
