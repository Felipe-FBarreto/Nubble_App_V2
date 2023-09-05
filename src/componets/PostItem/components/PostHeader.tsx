import React from 'react';
import {Image, ImageStyle} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box mb="s16" flexDirection="row" alignItems="center">
      <Image source={{uri: author.profileURL}} style={$imageStyle} />
      <Text ml="s12" preset="paragraphMedium" semiBold>
        {author.name}
      </Text>
    </Box>
  );
}

const $imageStyle: ImageStyle = {
  width: 32,
  height: 32,
  borderRadius: 14,
};
