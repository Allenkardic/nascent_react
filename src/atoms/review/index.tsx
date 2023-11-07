import { Button } from '../../components';
import { H4, H5 } from '../../styles';
import { colors, capitalizeFirstLetter } from '../../utils';

import { Container, DateContainer, Content, DataContainer, DataContent, ImageContent } from './style';

export interface ReviewDataIProps {
  id: number;
  text: string;
  helperText: string;
}

export interface IProps {
  onClickDone?: () => void;
  data: ReviewDataIProps[];
  date: string;
  image: string;
}

function Review({ onClickDone, data, date, image }: IProps) {
  return (
    <Container>
      <Content>
        <DateContainer>
          <H4 color={colors.grey40}>{date}</H4>
        </DateContainer>
      </Content>

      <ImageContent src={image} />

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
