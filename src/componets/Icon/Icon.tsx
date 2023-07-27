import React from 'react';
import {EyeOnIcon} from '../../assets/Icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/Icons/EyeOffIcon';

interface IconProps {
  name: IconName;
}

export function Icon({name}: IconProps) {
  const SVGIcon = iconRegitry[name];

  return <SVGIcon />;
}

const iconRegitry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegitry;
type IconName = keyof IconType;
