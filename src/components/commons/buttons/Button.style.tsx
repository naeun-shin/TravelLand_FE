import styled from 'styled-components';
import { ButtonProps } from './Button';

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  color: #000;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
`;

export { StyledButton };
