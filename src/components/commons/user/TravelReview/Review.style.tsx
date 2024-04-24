import styled, { css } from 'styled-components';

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

// interface DotProps {
//   active?: boolean;
// }

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 16px 0;
  margin-top: 60px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const UserSection = styled.div`
  display: flex;
  margin: 15px 0 10px 0;
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

export const Dot = styled.div<{ active: boolean }>`
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    width 0.3s ease,
    border-radius 0.3s ease;

  // active prop에 따라 스타일 적용
  ${(props) =>
    props.active &&
    css`
      background-color: #000; // active 상태일 때의 색상
      width: 30px;
      border-radius: 10px;
    `}
`;

// 수정 / 삭제 버튼

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  Button:nth-child(2) {
    margin-left: 15px;
  }
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
