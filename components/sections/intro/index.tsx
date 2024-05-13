import React, { RefObject } from 'react';
import { motion } from 'framer-motion';

import { ISection } from '@/types/types';
import { revealAnimation } from '@/lib/utils';

interface Props extends Pick<ISection, '_id' | 'heading' | 'contentFile' | 'description'> {
  elRef?: RefObject<HTMLElement>;
}

function Intro(props: Props) {
  const { _id, elRef } = props;

  return (
    <motion.section
      id={_id}
      ref={elRef}
      {...revealAnimation}
      className="bg-red-600 snap-start h-section"
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos optio non commodi odit saepe dolor sed, ea quibusdam doloribus tempora incidunt ipsam perferendis officiis nulla dolorum iste asperiores, reiciendis exercitationem omnis ipsa unde, tenetur eum itaque dignissimos. Ipsa necessitatibus sunt tempore eius numquam ad cum, impedit quibusdam mollitia. Quae atque autem ratione quam corporis assumenda obcaecati harum deleniti saepe asperiores laborum, inventore quo commodi quisquam nulla aperiam, temporibus cumque ullam nemo quibusdam natus. Eveniet consequuntur iure accusantium veniam distinctio rerum laboriosam provident fugit, officiis autem totam nisi at tempora quam aperiam ad vitae consequatur? Quas similique cupiditate earum natus sequi!
    </motion.section>
  );
}

export default Intro;
