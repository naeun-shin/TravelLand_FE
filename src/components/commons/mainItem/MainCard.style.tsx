import styled from 'styled-components';

export const CardContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 30px auto;
  gap: 10px;
  justify-content: start;
  white-space: nowrap;
`;

export const CardContainer = styled.div`
  /* width: calc(25% - 25px); */
  width: 100%;
  max-width: 300px;
  min-width: 230px;
  height: 420px;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 10px;
  /* display: inline-block; */
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 250px;
  border-radius: 15px 15px 0 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    border-radius: 10px;
  }
`;

export const TextContainer = styled.div`
  padding: 5px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 7px;
  color: #333;
  cursor: pointer;
`;

export const Price = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* align-items: center; */
  margin-top: 3px;
  gap: 4px;
  height: 100px;
  overflow: hidden;
`;
export const HashTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* align-items: center; */
  margin-top: 3px;
  gap: 4px;
  height: 100px;
  overflow: hidden;
  padding-top: 40px;
`;
