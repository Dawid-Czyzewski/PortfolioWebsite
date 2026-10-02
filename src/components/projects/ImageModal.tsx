'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { imageSrc } from '@/lib/image';
import type { SelectedImage } from '@/types';

type ImageModalProps = {
  selectedImage: SelectedImage | null;
  onClose: () => void;
};

const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!selectedImage) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImage]);

  if (!selectedImage) return null;

  return (
    <div className="case-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" className="case-modal-close" onClick={onClose} aria-label="Zamknij">
        <X size={18} />
      </button>
      <img
        src={imageSrc(selectedImage.image)}
        alt={selectedImage.alt}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};

export default ImageModal;
