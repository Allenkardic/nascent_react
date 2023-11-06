import { memo } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { H7 } from '../../styles';

import { Container, Content } from './style';

export interface PaginationIProps {
  onClickNext: () => void;
  onClickPrevious?: () => void;
  isPreviousActive?: boolean;
}

function Pagination({ onClickNext, onClickPrevious, isPreviousActive }: PaginationIProps) {
  return (
    <Container>
      <Content onClick={onClickPrevious} isPreviousActive={isPreviousActive}>
        <FiChevronLeft />
        <H7>Prev</H7>
      </Content>
      <Content onClick={onClickNext} isPreviousActive={true}>
        <H7>Next</H7>
        <FiChevronRight />
      </Content>
    </Container>
  );
}

export default memo(Pagination);
