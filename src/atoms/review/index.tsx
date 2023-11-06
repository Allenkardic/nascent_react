import { FiChevronLeft } from 'react-icons/fi';

import { Button } from '../../components';
import { HA, H4, H5 } from '../../styles';
import { colors, capitalizeFirstLetter } from '../../utils';

import { Container, DateContainer, Content, DataContainer, DataContent, BackIconContainer } from './style';

export interface ReviewDataIProps {
  id: number;
  text: string;
  helperText: string;
}

export interface IProps {
  onClickDone?: () => void;
  data: ReviewDataIProps[];
  date: string;
}

function Review({ onClickDone, data, date }: IProps) {
  return (
    <Container>
      <Content>
        <DateContainer>
          <H4 color={colors.grey40}>{date}</H4>
        </DateContainer>
      </Content>

      <DataContent>
        {data?.map((item: ReviewDataIProps, index: number) => (
          <DataContainer key={index}>
            <H5 color={colors.greyTwo}>{item?.helperText}</H5>
            <H5 color={colors.robust}>{capitalizeFirstLetter(item?.text)}</H5>
          </DataContainer>
        ))}
      </DataContent>

      <Button text="Done" onClick={onClickDone} />
    </Container>
  );
}

export default Review;
