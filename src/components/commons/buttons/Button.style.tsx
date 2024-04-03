import { before } from 'node:test';
import styled from 'styled-components';

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  borderColor: string;
  borderRadius?: string;
}

interface ToggelButtonProps {
  latestSort: boolean;
  beforeText: string;
  afterText: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius || '30px'};
  color: #000;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

export const BtnWrapper = styled.div`
  position: relative;
`;

export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ButtonLabel = styled.label<ToggelButtonProps>`
  display: block;
  width: 60px;
  height: 34px;
  border: 1px solid black;
  background-color: ${(props) => (props.latestSort ? 'white' : 'black')};
  border-radius: 34px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;
