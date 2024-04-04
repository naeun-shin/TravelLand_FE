import styled from 'styled-components';

// 여행 정보페이지

export const ReviewListTabStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 30px;
`;

export const ReviewListTabButton = styled.button`
  justify-content: center;

  background-color: white;
  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;

  width: 600px;
  height: 45px;

  cursor: pointer;

  &:active {
    background-color: black;
    color: white;
  }
`;

export const ReviewListContaier = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

export const ReviewListSection = styled.div``;
export const ReviewListLeft = styled.div`
  display: flex;
  padding: 5px;
`;

export const ReviewListRight = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 5px 20px;
    width: 60px;
  }
`;

export const ReviewListCity = styled.div`
  display: flex;
  justify-content: center;

  width: 50px;
  padding: 5px 20px;

  border-radius: 5px;
  background-color: lightgray;

  font-weight: bold;
`;

export const ReviewListTitle = styled.div`
  padding: 5px 20px;
  width: 350px;
`;

// 여행 후기 상세보기 페이지

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 16px 0;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const UserSection = styled.div`
  display: flex;
  margin: 30px 0 10px 0;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid #ddd;
`;

export const UserName = styled.span`
  font-size: 16px;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 450px;
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 20px;
`;

export const SliderDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;
