import { memo, useState } from 'react';

import { Label } from '..';
import { colors } from '../../utils';

import { Container, InputContent, FormInputContainer } from './style';
export interface InputIProps {
  error?: string;
  type: 'email' | 'text';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  backgroundColor?: string;
  value: string;
  borderColor?: string;
  name?: string;
  marginBottom?: number | string;
  defaultValue?: string;
  disabled?: boolean;
}

function Input({
  error,
  type,
  onChange,
  label,
  placeholder,
  backgroundColor,
  value,
  borderColor,
  marginBottom,
  name,

  defaultValue,
  disabled = false,
}: InputIProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <FormInputContainer marginBottom={marginBottom}>
      {label && <Label text={label} />}

      <Container
        name={name}
        error={error}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        focus={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}>
        <InputContent
          disabled={disabled}
          value={value}
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </Container>
      {error && <Label text={error} color={colors.red} />}
    </FormInputContainer>
  );
}

export default memo(Input);
