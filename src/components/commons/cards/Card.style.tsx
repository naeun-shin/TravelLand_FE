import styled from 'styled-components';

const CardImg = styled.img`
  width: 370px;
  height: 230px;
  border-radius: 10px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 370px;
`;

const CardInfoRight = styled.div`
  display: flex;
  flex-direction: row;
`;
export { CardImg, CardInfo, CardInfoRight };
