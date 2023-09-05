import React from 'react';
import {Dimensions, Image, ImageStyle} from 'react-native';

import {Post} from '@domain';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  return (
    <Image source={{uri: imageURL}} resizeMode="cover" style={$imageStyles} />
  );
}

const $imageStyles: ImageStyle = {
  width: Dimensions.get('screen').width,
  height: 300,
  marginHorizontal: -24,
};
