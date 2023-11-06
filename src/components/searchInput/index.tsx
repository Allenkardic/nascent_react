import React, { memo } from 'react';

import { FiSearch } from 'react-icons/fi';

import { BorderedText } from '../';
import { colors, spacing } from '../../utils';

import { InputContainer, InputContent, BtnContainer, Container } from './style';

interface IProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  backgroundColor?: string;
  value: string;
  borderColor?: string;
  onClickSearch?: () => void;
}

function SearchInput({ name, onChange, onClickSearch, placeholder, backgroundColor, value, borderColor }: IProps) {
  return (
    <Container style={{ marginBottom: spacing.xxsmall, marginTop: spacing.xxsmall }}>
      <InputContainer borderColor={borderColor} backgroundColor={backgroundColor}>
        <InputContent placeholder={placeholder} name={name} type={'text'} onChange={onChange} value={value} />
        <FiSearch color={colors.grey} size={'20px'} />
      </InputContainer>

      <BtnContainer>
        <BorderedText text="Search" onClick={onClickSearch} />
      </BtnContainer>
    </Container>
  );
}

export default memo(SearchInput);
