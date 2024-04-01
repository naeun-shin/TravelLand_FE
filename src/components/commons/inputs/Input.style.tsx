import styled from 'styled-components';
import { InputProps } from './Input';

const modernInput = styled.input<InputProps>`
  padding: 5px;
  border-radius: 5px;
  width: ${(props) => props.width + 'px'};
  border: 1px solid ${(props) => props.border};
  height: ${(props) => props.height + 'px'};
`;
export { modernInput };
