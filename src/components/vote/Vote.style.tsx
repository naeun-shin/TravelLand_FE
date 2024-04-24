import styled from 'styled-components';
// Props 타입을 정의합니다.
interface VoteResultBarProps {
  percentage: number; // 퍼센티지 값은 숫자 타입입니다.
}

export const VoteTitleBox = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  padding: 35px 0px;
`;

export const VoteTitleContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const VoteTitle = styled.div`
  margin-right: 30px;
  padding: 0px 5px;
  font-size: 22px;

  :first-child {
    font-size: 16px;
    color: gray;
    padding-bottom: 5px;
  }
`;

export const VoteButtonBox = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: gray;
`;

export const VoteChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const VoteContentBox = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  img {
    padding-left: 15px;
    width: 25px;
    height: 25px;
  }

  cursor: pointer;
`;

// 투표 작성하기
export const CreateVoteTitleBox = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const CreateVoteTitle = styled.div`
  font-size: 24px;
`;

export const CreateVoteContentBox = styled.div`
  padding: 25px 0px;
`;

export const CreateVoteContentInput = styled.div`
  font-size: 16px;
  padding: 15px 0px;
`;

export const CreateVoteButtonBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const CreateVoteDateButtons = styled.div`
  padding: 15px 0px;
  font-size: 20px;
  div {
    padding-top: 10px;
  }
`;

// 상세보기 내 투표창
export const CheckVoteContainer = styled.div`
  width: 800px;
  height: 100%;

  margin: 15px 0px;
  padding: 15px 20px;
  background-color: #f3fcff;
`;

export const VoteIsClosedBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #c5f1ff;
  color: #6f7878;

  width: 130px;
  height: 40px;

  border-radius: 25px;

  margin: 15px 0px;
`;

export const VoteSubmitButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

// 상세보기 투표 결과
export const VoteResultContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VoteRusultWrapper = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`;

export const VoteResultTotalBar = styled.div`
  margin-right: 10px;
  height: 55px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  width: 460px;
  background-color: #dcf7ff;
  border-radius: 25px;
  overflow: hidden; // 넘치는 내용이 없도록 설정
`;

export const VoteResultBar = styled.div<VoteResultBarProps>`
  height: 55px;
  border-radius: 25px;
  background-image: linear-gradient(to right, #dcf7ff, #5ac8ec);
  color: white;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 15px;
  width: ${(props) => props.percentage}%;
`;

export const VoteResultPercentage = styled.div`
  margin-left: auto;
  padding-right: 10px;
  color: #6f7878;
  font-weight: bold;
`;

export const VoteResultTotalCount = styled.div`
  display: flex;
  justify-content: end;

  padding: 15px;
  font-size: 16px;
`;
