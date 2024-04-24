import { PortableText, PortableTextComponents } from '@portabletext/react';
import { TypedObject } from 'sanity';

const components:PortableTextComponents = {
  block: {
    normal: ({ children }): JSX.Element => (
      <p>{children}</p>
    ),
  },
};

function TextBlock({ value }: { value: TypedObject | TypedObject[] }) {
  return (
    <PortableText value={value} components={components} />
  );
}

export default TextBlock;
