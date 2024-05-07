import styled from 'styled-components';

interface ButtonProps {
  width: string;
  height: string;
  color: string;
  borderColor: string;
  borderRadius?: string;
  textColor?: string;
  hoverColor?: string;
  marginRight?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius || '30px'};
  color: ${(props) => props.textColor};
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || props.color}; // 호버 시 색상 변경
  }
  margin-right: ${(props) => props.marginRight || '0px'};

  button:disabled {
    background-color: #c5f1ff; // 연한 하늘색
    color: #ffffff; // 텍스트 색상을 흰색으로 변경
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 10px;
  /* justify-content: center; */
`;

// 카테고리 버튼 스타일
export const CategoryButtonStyle = styled.button<{
  hoverColor?: string;
  selected?: boolean;
  cursor?: string;
}>`
  display: flex;
  width: fit-content;
  height: 40px;
  font-weight: 600;
  color: #444;
  border-radius: 20px;
  border: none;
  margin: 5px 0 0px;
  padding: 0 20px;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: ${(props) => (props.cursor ? 'pointer' : '')};
  white-space: nowrap;
  overflow: hidden;
  margin-right: 3px;
  background-color: ${(props) => (props.selected ? '#5ac8ec' : '#eee')};
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || 'rgba(90, 200, 236, 0.8)'};
  }
`;
