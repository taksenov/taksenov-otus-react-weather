/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import * as React from 'react';
import Dropzone from 'react-dropzone';
import get from 'lodash/get';
import toLower from 'lodash/toLower';
import { Button } from 'antd';
import { Translate } from 'react-localize-redux';

import styles from './DropZone.module.scss';
import { DropContainerStyled } from './theme';

import dropZoneDefaultImage from './assets/images/i-upload-arrow.svg';
import excelImage from './assets/images/excel.svg';
import imgImage from './assets/images/image_icons.svg';
import odsImage from './assets/images/oasis-spreadsheet.svg';
import odtImage from './assets/images/oasis-text.svg';
import pdfImage from './assets/images/PDF_file_icon.svg';
import wordImage from './assets/images/wordIcon.svg';
import defaultImage from './assets/images/default.svg';

import {
  ACCEPT_MIME_FILE_TYPES,
  IMAGE_TYPES,
  WORD_TYPES,
  XLS_TYPES,
  ODS_TYPES,
  ODT_TYPES,
  PDF_TYPES,
} from './constants';

interface IProps {
  handleSendAttachments: (files: any[]) => void;
}

const MAX_FILES_COUNT = 1;

/**
 * Дропзона для загрузки файлов в разделе "Помощь"
 *
 * Поддерживаемые типы файлов:
 * .pdf, .ods, .odt, image/png, image/jpeg, image/gif, .doc, .docx, .xls, .xlsx
 *
 * ISF-114: Временно установлено ограничение на загрузку 1 файла
 * Ограничение на одновременную загрузку: не более 1 файла
 * Ограничение на одновременную загрузку: не более 3 файлов
 *
 * @class DropZone
 * @extends {React.Component}
 */
class DropZone extends React.Component<IProps> {
  state = {
    userFiles: [],
    isFormReady: false,
  };

  getExtension = (file: any) => {
    const { name = '' } = file;
    // eslint-disable-next-line
    const extensionPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
    const checkedFileName = name.match(extensionPattern);

    return get(checkedFileName, '1', 'NO_EXTENSION');
  };

  /**
   * Используется в том, случае когда у пользователя установлена ОС
   * Windows, но на ней не установлен пакет MS Office, тогда файлы офиса
   * нужно распознавать через расширение
   *
   * @memberof DropZone
   */
  handleRejectedCheckedFiles = (files: any) => {
    if (files.length > MAX_FILES_COUNT) {
      return null;
    }

    let acceptedFiles: any = [];

    files.forEach((item: any) => {
      const { file } = item;
      const extension = this.getExtension(file);

      if (extension !== 'NO_EXTENSION') {
        if (toLower(extension) === 'xls' || toLower(extension) === 'xlsx') {
          acceptedFiles = [...acceptedFiles, file];
        }
        if (toLower(extension) === 'doc' || toLower(extension) === 'docx') {
          acceptedFiles = [...acceptedFiles, file];
        }
      }
    });

    if (acceptedFiles.length > 0) {
      this.handleChangeUserFiles(acceptedFiles);
    }

    return null;
  };

  handleChangeUserFiles = (files: any) => {
    if (files.length > MAX_FILES_COUNT) {
      this.setState({
        userFiles: [],
        isFormReady: false,
      });

      return null;
    }

    this.setState({
      userFiles: files,
      isFormReady: true,
    });
  };

  handleResetUserFiles = (event: any) => {
    event.stopPropagation();

    this.setState({
      userFiles: [],
      isFormReady: false,
    });
  };

  handleSend = () => {
    const { handleSendAttachments } = this.props;
    const { userFiles, isFormReady } = this.state;

    if (!isFormReady) {
      return null;
    }

    handleSendAttachments(userFiles);
  };

  render() {
    const { userFiles, isFormReady } = this.state;

    const userFilesStatus = userFiles.length > 0 ? true : false;

    // FIXME: Оставлено для тестов
    // console.log('RENDER userFiles=', userFiles);

    return (
      <>
        <div className={styles.wrapper}>
          <Dropzone
            onDropRejected={this.handleRejectedCheckedFiles}
            onDropAccepted={this.handleChangeUserFiles}
            accept={ACCEPT_MIME_FILE_TYPES}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              isDragAccept,
              isDragReject,
            }) => (
              <div className={styles.crossRelativeParent}>
                <DropContainerStyled
                  {...getRootProps({
                    isDragActive,
                    isDragAccept,
                    isDragReject,
                  })}
                >
                  <input {...getInputProps()} />
                  <p className={styles.DropZoneHeader}>
                    <Translate id="shared_componets_drop_zone_upload_header" />
                  </p>
                  {userFilesStatus ? (
                    <>
                      {userFiles.map((item: any) => {
                        const { name, lastModified, size, type } = item;
                        const pseudoID: number = lastModified + size;

                        let imageType = 'DEFAULT';
                        let imageSrc = defaultImage;
                        switch (true) {
                          case IMAGE_TYPES.includes(type):
                            imageType = 'IMAGE';
                            imageSrc = imgImage;
                            break;
                          case WORD_TYPES.includes(type):
                            imageType = 'WORD';
                            imageSrc = wordImage;
                            break;
                          case XLS_TYPES.includes(type):
                            imageType = 'XLS';
                            imageSrc = excelImage;
                            break;
                          case ODS_TYPES.includes(type):
                            imageType = 'ODS';
                            imageSrc = odsImage;
                            break;
                          case ODT_TYPES.includes(type):
                            imageType = 'ODT';
                            imageSrc = odtImage;
                            break;
                          case PDF_TYPES.includes(type):
                            imageType = 'PDF';
                            imageSrc = pdfImage;
                            break;

                          default:
                            imageType = 'DEFAULT';
                            imageSrc = defaultImage;
                            break;
                        }

                        return (
                          <div key={pseudoID} className={styles.choosenFile}>
                            <span
                              className={styles.btnclose}
                              onClick={this.handleResetUserFiles}
                            />
                            <img
                              src={imageSrc}
                              alt={imageType}
                              width={64}
                              height={64}
                            />
                            <span>{name}</span>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className={styles.choosenFile}>
                      <img
                        src={dropZoneDefaultImage}
                        alt="Upload file"
                        width={64}
                        height={64}
                      />
                      <span className={styles.textForFormats}>
                        pdf, ods, odt, png, jpeg, gif, doc, docx, xls, xlsx
                      </span>
                    </div>
                  )}
                </DropContainerStyled>
              </div>
            )}
          </Dropzone>
        </div>

        <div className={styles.btnWrapper}>
          <Button
            style={{
              height: '38px',
            }}
            type="primary"
            shape="round"
            onClick={this.handleSend}
            disabled={!isFormReady}
          >
            <Translate id="shared.componets.helpselectedchatfooter.send" />
          </Button>
        </div>
      </>
    );
  }
}

export default DropZone;
