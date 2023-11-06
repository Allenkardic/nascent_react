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
  onClickDownload?: () => void;
  onClickDone?: () => void;
  data: TransactionDataIProps[];
  date: string;
}

function Review({ onClickDownload, onClickDone, data, date = '15:50, July 10th, 2023' }: IProps) {
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

      <Button text="Download receipt" onClick={onClickDownload} />

      <BackIconContainer onClick={onClickDone}>
        <FiChevronLeft size={25} color={colors.greyDark} />

        <H4 fSize="14px" color={colors.greyDark} style={{ cursor: 'pointer' }}>
          Back Home
        </H4>
      </BackIconContainer>
    </Container>
  );
}

export default Review;
