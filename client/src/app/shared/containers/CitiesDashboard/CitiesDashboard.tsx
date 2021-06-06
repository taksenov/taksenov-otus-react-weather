import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Preloader from '../../componets/Preloader';
import CitiesList from '../../componets/CitiesList';

import { citiesRequest } from '../../../states/Cities/state/duck';
import {
  isFetching,
  citiesList,
  totalPages,
  currentPage,
  isFetchingSecond,
  isAlreadyChashed,
} from '../../../states/Cities/state/selectors';

import styles from './CitiesDashboard.module.scss';

import { DEVICE_NETBOOKS_WIDTH } from '../../constants/Defaults/constants';

interface IProps {
  location?: any;
}

export interface ICitiesDashboardStore {
  isFetching: boolean;
  citiesList: any;
  totalPages: number;
  currentPage: number;
  isFetchingSecond: boolean;
  isAlreadyChashed: boolean;
}

export interface ICitiesDashboardDispatch {
  citiesRequest: (params?: any) => void;
}

const mapStateToProps = (state: any) => ({
  isFetching: isFetching(state),
  citiesList: citiesList(state),
  totalPages: totalPages(state),
  currentPage: currentPage(state),
  isFetchingSecond: isFetchingSecond(state),
  isAlreadyChashed: isAlreadyChashed(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      citiesRequest,
    },
    dispatch,
  );

type ICitiesDashboardTypes = ICitiesDashboardStore &
  ICitiesDashboardDispatch &
  IProps;

export class CitiesDashboard extends Component<ICitiesDashboardTypes> {
  state = {
    isMobile: false,
    isCDM: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.checkForMobileDevice);

    this.setState(() => ({ isCDM: true }));
    this.checkForMobileDevice();

    const { citiesRequest, isAlreadyChashed } = this.props;

    if (!isAlreadyChashed) {
      citiesRequest();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkForMobileDevice);
  }

  checkForMobileDevice = () => {
    const width = document.documentElement.clientWidth;

    if (width < DEVICE_NETBOOKS_WIDTH) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  render() {
    const { isMobile, isCDM } = this.state;
    const { citiesList, isFetching } = this.props;

    return (
      <>
        {/* Header */}
        <div className={styles.header}>
          <span>Погода</span>
          {isCDM && isMobile && (
            <div className={styles.subHeaderMobile}>
              <span>в городах</span>
            </div>
          )}
        </div>
        {!(isCDM && isMobile) && (
          <div className={styles.subHeader}>
            <span>Погода в городах</span>
          </div>
        )}

        {/* Cities List */}
        <div className={styles.citiesList}>
          {isFetching ? (
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
            <CitiesList list={citiesList} />
          )}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesDashboard);
