import React, { FC, SyntheticEvent, useCallback } from 'react';
import PhotoCover from 'assets/icons/photo-cover.svg';
import "./avatar.scss";

interface IAvatar {
  src?: string;
  alt?: string;
}

export const Avatar: FC<IAvatar> = ({ src, alt }) => {
  const handleError = useCallback((e: SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = PhotoCover;
  }, [])

  return (
    <div className="avatar">
      <img
        onError={handleError}
        src={src}
        alt={alt ?? "avatar"}
      />
    </div>
  );
};
