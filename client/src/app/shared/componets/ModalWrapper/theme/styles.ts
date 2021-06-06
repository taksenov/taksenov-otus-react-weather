import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalStyled = styled(Modal)`
  max-width: calc(100vw - 0px);
  padding: 0;

  /* Удаление дефолтных margin ant-design и установка нужного margin-top */
  margin: 30px 0 0;

  .ant-modal-content {
    background: transparent;
    box-shadow: unset;
  }

  .ant-modal-close {
    display: none;
  }

  .ant-modal-header {
    background: transparent;
    border-bottom: unset;
  }

  .ant-modal-title {
    & .customPhoneHeader {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & .customPhoneIcon {
      border: 2px solid #ffffff;
      height: 14px;
      width: 22px;
      border-radius: 3px;
      margin-bottom: 8px;
    }

    & .customPhoneTitle {
      color: #ffffff;
      font-family: 'Open Sans', sans-serif;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 13px;
    }
  }

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-footer {
    border-top: unset;
    justify-content: center;
    display: flex;

    & .ant-btn {
      border: none;
    }
  }

  .ant-card {
    border-radius: 0;
  }
`;
