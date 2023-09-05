import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>;
export function PostAction({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function postLike() {}
  function postComment() {}
  function postFavorite() {}

  return (
    <Box flexDirection="row" alignItems="center" mt="s16">
      <Item
        icon={{default: 'heart', marked: 'heartFill'}}
        marked
        onPress={postLike}
        text={reactionCount}
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        marked={false}
        onPress={postComment}
        text={commentCount}
      />
      <Item
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        marked={false}
        onPress={postFavorite}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  text: number;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}
function Item({icon, marked, onPress, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      mr="s24"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text color="backgroundContrast" preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
