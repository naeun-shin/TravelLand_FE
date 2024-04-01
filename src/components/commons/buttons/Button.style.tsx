import styled from 'styled-components';

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  borderColor: string;
  borderRadius?: string;
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
  gap: 30px;
  margin-top: 20px;
  width: 100%;
`;
