import React from 'react';

import {Post} from '@domain';

import {Box, PostAction, PostButton, PostHeader, PostImage} from '@components';

interface Props {
  prop: Post;
}

export function PostItem({prop}: Props) {
  return (
    <Box mb="s32" paddingHorizontal="s24">
      <PostHeader author={prop.author} />
      <PostImage imageURL={prop.imageURL} />
      <PostAction
        commentCount={prop.commentCount}
        favoriteCount={prop.favoriteCount}
        reactionCount={prop.reactionCount}
      />
      <PostButton
        author={prop.author}
        commentCount={prop.commentCount}
        text={prop.text}
      />
    </Box>
  );
}
