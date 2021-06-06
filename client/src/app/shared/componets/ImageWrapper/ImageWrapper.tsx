import React, { Suspense } from 'react';
import { useImage } from 'react-image';

import BrokenImage from '../../constants/BrokenImage/BrokenImage.svg';
import FallbackImage from '../../constants/FallbackImage/FallbackImage.svg';

interface IImageProps {
  image: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Image: React.FC<IImageProps> = ({
  image,
  alt,
  width = -1,
  height = -1,
  ...rest
}) => {
  const { src } = useImage({
    srcList: [image, BrokenImage],
  });

  return <img src={src} alt={alt} width={width} height={height} {...rest} />;
};

/**
 * Обертка над изображением, с фоллбеком и отображением картинки заглушки,
 * если картинка не загрузилась по причине ошибки
 *
 * @param {*} {
 *   image {string},
 *   alt {string},
 *   width = -1,
 *   height = -1,
 * }
 * @returns
 */
const ImageWrapper: React.FC<IImageProps> = ({
  image,
  alt,
  width = -1,
  height = -1,
  ...rest
}) => {
  return (
    <Suspense
      fallback={
        <img
          src={FallbackImage}
          alt={alt}
          width={width}
          height={height}
          {...rest}
        />
      }
    >
      <Image image={image} alt={alt} width={width} height={height} {...rest} />
    </Suspense>
  );
};

export default ImageWrapper;
