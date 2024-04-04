import styled from 'styled-components';
import { CardProps } from './Card';

const CardBox = styled.div<CardProps>`
  width: 300px;
  height: 250px;
  border: 1px solid black;
  padding: 5px;
`;

const CardImg = styled.img`
  width: 300px;
  height: 180px;
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

export { CardBox, CardImg, CardInfo, CardInfoContent, CardInfoContentTop };
