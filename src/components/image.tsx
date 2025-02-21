import React from 'react';
import { StyledIcon } from '@/styles/imageStyles';

type IconProps = {
  path: string;
};

export function Icon({ path }: IconProps) {
  return <StyledIcon src={path} alt="image" />;
}
