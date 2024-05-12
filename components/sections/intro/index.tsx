import React, { RefObject } from 'react';

import Reveal from '@/components/ui/reveal-animation';

import { ISection } from '@/types/types';

interface Props extends Pick<ISection, '_id' | 'heading' | 'contentFile' | 'description'> {
  elRef?: RefObject<HTMLElement>;
}

function Intro(props: Props) {
  const { _id, elRef } = props;

  return (
    <Reveal>
      <section id={_id} ref={elRef} className="bg-red-600 snap-start h-section">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio non commodi odit saepe dolor sed, ea quibusdam doloribus tempora incidunt ipsam perferendis officiis nulla dolorum iste asperiores, reiciendis exercitationem omnis ipsa unde, tenetur eum itaque dignissimos. Ipsa necessitatibus sunt tempore eius numquam ad cum, impedit quibusdam mollitia. Quae atque autem ratione quam corporis assumenda obcaecati harum deleniti saepe asperiores laborum, inventore quo commodi quisquam nulla aperiam, temporibus cumque ullam nemo quibusdam natus. Eveniet consequuntur iure accusantium veniam distinctio rerum laboriosam provident fugit, officiis autem totam nisi at tempora quam aperiam ad vitae consequatur? Quas similique cupiditate earum natus sequi!
      </section>
    </Reveal>
  );
}

export default Intro;
