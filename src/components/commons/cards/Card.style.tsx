import styled from 'styled-components';
import { CardProps } from './Card';

const CardBox = styled.div<CardProps>`
  width: 300px;
  height: 250px;
  border: 1px solid black;
  padding: 5px;
  box-sizing: border-box; // 추가했슴
`;

const CardImg = styled.img`
  width: 100%;
  height: auto;
  /* width: 300px;
  height: 180px; */
  border-radius: 10px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 10px;

  font-weight: bold;
  font-size: 16px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 25px;
  }
`;

const CardInfoContent = styled.div`
  padding: 0px 10px;
  /* width: 100%; */
  width: calc(100% - 60px); // 이걸로 바꿈
`;

const CardInfoContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const InvitationCardContainer = styled.div`
  border-radius: 25px;
  padding: 5px;
  border: 1px solid lightgray;
  width: 90px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-right: 20px;
  }
`;
// 이거 버튼 위에 있었는데
// 콘솔에 자꾸 에러떠서 스타일드 컴포넌트 props형식에 맞추라해서 그냥 뺴놨어여!
const StyledButton = styled.button<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 100%;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;

  border-color: ${(props) => props.borderColor || 'black'};
`;

export {
  CardBox,
  CardImg,
  CardInfo,
  CardInfoContent,
  CardInfoContentTop,
  InvitationCardContainer,
  StyledButton,
};
