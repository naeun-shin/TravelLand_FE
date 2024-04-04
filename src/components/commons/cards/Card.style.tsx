import styled from 'styled-components';
import { CardProps } from './Card';

const CardBox = styled.div<CardProps>`
  width: 370px;
  height: 300px;
  border: 1px solid black;
  padding: 5px;
`;

const CardImg = styled.img`
  width: 370px;
  height: 230px;
  border-radius: 10px;
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
  width: 100%;
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

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 1px solid black;
    background-color: white;
  }
`;

export {
  CardBox,
  CardImg,
  CardInfo,
  CardInfoContent,
  CardInfoContentTop,
  InvitationCardContainer,
};
