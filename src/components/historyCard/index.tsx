import { memo } from 'react';

import { ProgressFlow } from '../../atoms';
import { H6 } from '../../styles';
import { Dictionary } from '../../types';
import { colors, capitalizeFirstLetter, getHistoryStepper } from '../../utils';

import { Container, Content, ProgressContaniner } from './style';
export interface HistoryCardIProps {
  items: Dictionary;
  onClick: () => void;
}

function HistoryCard({ onClick, items }: HistoryCardIProps) {
  const { name, firstName, lastName, tel, address, step } = items;

  return (
    <Container onClick={onClick}>
      <Content>
        <H6 color={colors.greyTwo}>First Name</H6>
        <H6 color={colors.robust}>{capitalizeFirstLetter(firstName)}</H6>
      </Content>
      <Content>
        <H6 color={colors.greyTwo}>Last Name</H6>
        <H6 color={colors.robust}>{capitalizeFirstLetter(lastName)}</H6>
      </Content>
      <Content>
        <H6 color={colors.greyTwo}>Phone number</H6>
        <H6 color={colors.robust}>{tel}</H6>
      </Content>

      <Content>
        <H6 color={colors.greyTwo}>Address</H6>
        <H6 color={colors.robust}>{capitalizeFirstLetter(address)}</H6>
      </Content>
      {items?.hasOwnProperty('name') && (
        <Content>
          <H6 color={colors.greyTwo}>Pokemon</H6>
          <H6 color={colors.robust}>{name !== null ? capitalizeFirstLetter(name) : 'N/A'}</H6>
        </Content>
      )}
      <ProgressContaniner>
        <ProgressFlow data={getHistoryStepper(step)} />
      </ProgressContaniner>
    </Container>
  );
}

export default memo(HistoryCard);
