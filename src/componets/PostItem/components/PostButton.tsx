import React from 'react';

import {Post} from '@domain';

import {Text, Box, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'author' | 'commentCount' | 'text'>;

export function PostButton({author, commentCount, text}: Props) {
  const commentText = getTextComment(commentCount);

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text color="gray1" mb="s8" preset="paragraphMedium">
        {text}
      </Text>
      <TouchableOpacityBox>
        {commentText && (
          <Text color="primary" preset="paragraphSmall" bold>
            {commentText}
          </Text>
        )}
      </TouchableOpacityBox>
    </Box>
  );
}

function getTextComment(comment: number): string | null {
  if (comment === 0) {
    return null;
  } else if (comment === 1) {
    return 'ver comentário';
  } else {
    return `ver ${comment} comentários`;
  }
}
