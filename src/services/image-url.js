import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url, width = 600, height = 400) => {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL');
  }

  if (typeof width !== 'number' || width <= 0) {
    throw new Error('Invalid width');
  }

  if (typeof height !== 'number' || height <= 0) {
    throw new Error('Invalid height');
  }

  const target = 'media/';
  const index = url.indexOf(target);

  if (index === -1) {
    return noImage; 
  }

  const twigUrl = url.slice(0, index) + 'crop/' + width + '/' + height + '/' + url.slice(index);

  return twigUrl;
};

export default getCroppedImageUrl;