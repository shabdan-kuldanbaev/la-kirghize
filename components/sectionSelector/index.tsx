'use client';

import React from 'react';

function SectionSelector({ data }: { data: any }) {
  return (
    <section>
      <h1>{data.title}</h1>
    </section>
  );
}

export default SectionSelector;
