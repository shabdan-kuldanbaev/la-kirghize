'use client';

import { useScrollRestorer } from 'next-scroll-restorer';

function ClientSideScrollRestorer() {
  useScrollRestorer();

  return null;
}
export default ClientSideScrollRestorer;
