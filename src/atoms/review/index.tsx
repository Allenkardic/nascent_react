import { FiChevronLeft } from 'react-icons/fi';

import { Button } from '../../components';
import { HA, H4, H5 } from '../../styles';
import { colors, spacing } from '../../utils';

import { Container, DateContainer, Content, DataContainer, DataContent, BackIconContainer } from './style';

export interface TransactionDataIProps {
  text: string;
  helperText: string;
}

export interface IProps {
  onClickDone?: () => void;
  data: TransactionDataIProps[];
  date: string;
}

function Review({ onClickDone, data, date = '15:50, July 10th, 2023' }: IProps) {
  return (
    <Container>
      <Content>
        <DateContainer>
          <H4 color={colors.grey40}>{date}</H4>
        </DateContainer>
      </Content>

      <DataContent>
        {data?.map((item: TransactionDataIProps, index: number) => (
          <DataContainer key={index}>
            <H5 color={colors.greyTwo}>{item?.helperText}</H5>
            <H5 color={item.text === 'Successful' ? colors.green : colors.robust}>{item?.text}</H5>
          </DataContainer>
        ))}
      </DataContent>

      <Button text="Done" onClick={onClickDone} />
    </Container>
  );
}

export default Review;
