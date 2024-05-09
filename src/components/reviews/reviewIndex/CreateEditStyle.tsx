import styled from 'styled-components';

// 1.2.3단계 공통 스타일

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
`;

export const ReviewBoxWithSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding-left: 5px;
  }
`;

export const ReviewBox = styled.div`
  display: flex;
  align-items: 'flex-start';
  padding: 10px 0px;
`;

export const ReviewContent = styled.div`
  display: flex;
  padding: 5px;
`;

export const ReviewBottomSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
`;

export const ReviewNextButton = styled.button`
  background-color: #5ac8ec;
  color: white;
  justify-content: center;
  border: none;
  width: 160px;
  height: 50px;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: #cff4ff;
  }
`;

export const Title = styled.div`
  margin-left: 10px;
`;

export const TitleWithCircle = styled.span`
  position: relative;
  margin-right: 5px;

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #f43b3b;
    border-radius: 50%;
    top: -3px;
    right: -10px;
  }
`;

// 2단계 작성 수정 페이지 스타일

export const ReviewBackButton = styled.button`
  background-color: #5ac8ec;
  color: white;
  justify-content: center;
  border: none;
  width: 160px;
  height: 50px;
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 500px;

  &:hover {
    background-color: #cff4ff;
  }
`;

export const Title2 = styled.div`
  margin-top: 50px;
`;

export const BringPlanBtn = styled.button`
  width: 700px;
  height: 60px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  background-color: #cff4ff;
  color: #238bad;
  cursor: pointer;
  margin: 30px 0 0 0;
`;

export const PhotoText = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 250px;
  color: #238bad;
  margin-bottom: 50px;
`;

export const ReviewBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const PhotoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin: 10px auto;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 20px;
  margin-top: 40px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #fff;
  }
`;

// 3단계 작성 수정 페이지 스타일

export const HashTagContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 0 0 0;
`;

export const HashTagTitle = styled.div`
  font-weight: bold;
  margin-right: 20px;
`;

export const HashTagDescription = styled.div`
  color: #238bad;
  font-weight: 600;
`;
export const CategoryButtonContainer = styled.div`
  display: flex;
  width: 400px;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0 80px 90px;
`;

export const ContentTextarea = styled.textarea`
  width: 700px;
  height: 150px;
  padding: 10px;
  font-size: 15px;
  margin: 10px 0;
  border-radius: 4px;
  border: none;
  resize: none;
`;
