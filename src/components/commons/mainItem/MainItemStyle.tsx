import { CiBookmark } from 'react-icons/ci';
import styled from 'styled-components';

// Main List 스타일
export const MainListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  width: 1400px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const BookmarkIcon = styled(CiBookmark)`
  position: absolute;
  bottom: 20px;
  right: 12px;
  font-size: 18px;
  color: #666;
  border: 2px solid #c5f1ff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  z-index: 9;
  background-color: #c5f1ff;
  cursor: pointer;
`;

export const Rank = styled.div`
  padding: 5px 10px;
  /* margin-top: 20px; */
  color: #5ac8ec;
  font-family: 'Chab'; /* 다른 폰트 적용 */
  font-size: 36px;
  /* font-size: 3rem; */
  font-weight: lighter;
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 250px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const ImageSection = styled.div`
  position: relative;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextSection = styled.div`
  flex: 3;
  position: relative;
  padding: 15px;
  cursor: default;
`;

export const Title = styled.div`
  /* margin-top: 70px; */
  padding: 5px 10px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
  cursor: default;
`;

export const MainTitle = styled.div`
  padding: 5px 10px;
  margin-top: 10px;
  color: #000;
  font-size: 22px;
  font-weight: 600;
  cursor: default;
`;

export const Content = styled.div`
  padding: 5px 10px;
  margin: 10px 0 10px;
  color: #000;
  font-size: 17px;

  span {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 260px;
  height: 240px;
  border-radius: 10px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-top: 3px; */
  gap: 2px;
  /* height: 100px;
  overflow: hidden;*/
`;

// Main 타이틀 스타일

export const Container = styled.div`
  display: flex;
  width: 1400px;
  margin: 0 auto;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
`;

export const TripTitle = styled.h2`
  font-size: 26px;
  display: inline-flex;
  align-items: center;
`;

// List 타이틀 스타일 메인 페이지 아래 영역

export const TitleContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const HotTitleText = styled.div`
  font-weight: bold;
  font-size: 28px;
  /* margin: 0 0 10px 0; */
  /* white-space: pre-wrap; */
  text-align: left;
  margin: 50px 0 20px;
`;
export const Subtitle = styled.div`
  font-size: 20px;
  color: #000;
  font-weight: 500;
  margin-bottom: 30px;
`;
