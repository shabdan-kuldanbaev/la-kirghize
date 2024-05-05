'use client';

import {
  PortableText,
  PortableTextComponents,
  PortableTextProps,
} from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }): JSX.Element => (
      <p>{children}</p>
    ),
  },
};

function TextBlock({ value }: Pick<PortableTextProps, 'value'>) {
  return (
    <PortableText value={value} components={components} />
  );
}

export default TextBlock;
