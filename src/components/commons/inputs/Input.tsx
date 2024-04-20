import * as S from '@/components/commons/inputs/Input.style';

export interface InputProps {
  name?: string;
  id?: string;
  type: 'text' | 'email' | 'password' | 'number';
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  placeholder?: string;
  border?: string;
  value?: string | number;
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: string;
  readonly?: boolean;
  required?: boolean;
}
export const ModernInput = (props: InputProps) => {
  return (
    <>
      <S.modernInput
        id={props.id}
        name={props.name}
        type={props.type ? props.type : 'text'}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        placeholder={props.placeholder}
        border={props.border}
        value={props.value}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}
        readOnly={props.readonly}
        required={props.required}
      />
    </>
  );
};
