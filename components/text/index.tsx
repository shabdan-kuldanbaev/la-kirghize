import { PortableText, PortableTextComponents } from '@portabletext/react';

const components:PortableTextComponents = {
  block: {
    normal: ({ children }): JSX.Element => (
      <p>{children}</p>
    ),
  },
};

function TextBlock({ value }: { value: any }) {
  return (
    <PortableText value={value} components={components} />
  );
}

export default TextBlock;
