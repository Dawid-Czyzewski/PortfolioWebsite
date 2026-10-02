import type { StaticImageData } from 'next/image';

export type ImageSource = string | StaticImageData;

export const imageSrc = (source: ImageSource): string =>
  typeof source === 'string' ? source : source.src;
