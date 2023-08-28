import React from 'react';

import {Svg, Path} from 'react-native-svg';

import {IconBase} from '../../componets/Icon/Icon';

export function CameraIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.06977 5.06154L7.09302 2.38462H12.907L14.9302 5.06154C15.4133 5.70074 16.1716 6.07692 16.9767 6.07692H17.4419C18.0841 6.07692 18.6047 6.59351 18.6047 7.23077V16.4615C18.6047 17.0988 18.0841 17.6154 17.4419 17.6154H2.55814C1.91594 17.6154 1.39535 17.0988 1.39535 16.4615V7.23077C1.39535 6.59352 1.91595 6.07692 2.55814 6.07692H3.02326C3.82845 6.07692 4.58665 5.70074 5.06977 5.06154L4.53395 4.66277L5.06977 5.06154ZM7.02326 1C6.62798 1 6.25577 1.18468 6.01861 1.49846L3.95349 4.23077C3.73389 4.52131 3.38925 4.69231 3.02326 4.69231H2.55814C1.14532 4.69231 0 5.82882 0 7.23077V16.4615C0 17.8635 1.14532 19 2.55814 19H17.4419C18.8547 19 20 17.8635 20 16.4615V7.23077C20 5.82882 18.8547 4.69231 17.4419 4.69231H16.9767C16.6108 4.69231 16.2661 4.52131 16.0465 4.23077L15.5188 4.6235L16.0465 4.23077L13.9814 1.49848L13.9814 1.49846C13.7442 1.18468 13.3721 1 12.9767 1H7.02326ZM10.0006 6.53846C7.5603 6.53846 5.58203 8.50156 5.58203 10.9231C5.58203 13.3446 7.5603 15.3077 10.0006 15.3077C12.4409 15.3077 14.4192 13.3446 14.4192 10.9231C14.4192 8.50156 12.4409 6.53846 10.0006 6.53846ZM6.97738 10.9231C6.97738 9.26625 8.33094 7.92308 10.0006 7.92308C11.6703 7.92308 13.0239 9.26626 13.0239 10.9231C13.0239 12.5799 11.6703 13.9231 10.0006 13.9231C8.33094 13.9231 6.97738 12.5799 6.97738 10.9231Z"
        fill={color}
      />
    </Svg>
  );
}
