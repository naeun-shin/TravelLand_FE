// import React from 'react';
import * as S from '@/components/commons/inputs/Input.style';

export type InputProps = {
  name?: string;
  id?: string;
  type: 'text' | 'email' | 'password';
  onChange?: (e: any) => void;
  placeholder?: string;
  border?: string;
  value?: string;
  width?: number;
  height?: number;
};

const ModernInput = (props: InputProps) => {
  return (
    <>
      <S.modernInput
        id={props.id}
        name={props.name}
        type={props.type ? props.type : 'text'}
        onChange={props.onChange}
        placeholder={props.placeholder}
        border={props.border}
        value={props.value}
        width={props.width}
        height={props.height}
      />
    </>
  );
};

export default ModernInput;
