import React from 'react';
import Markdown from 'react-native-markdown-renderer';

const Release = ({
  item: {
    body = '',
  } = {},
}) => <Markdown>{body}</Markdown>;

export default Release;
