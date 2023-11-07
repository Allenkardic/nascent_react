import { memo } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export interface NavProps {
  count: number;
}

function Loader({ count }: NavProps) {
  return (
    <>
      <Skeleton count={count} />
    </>
  );
}

export default memo(Loader);
