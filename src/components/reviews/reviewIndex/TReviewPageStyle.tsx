import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 500px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

export const StepperContainer = styled.div`
  max-width: 700px;
  width: 100%;
  height: 20px;
  background-color: #eee;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ProgressBar = styled.div<{ width: string }>`
  border-radius: 10px;
  height: 100%;
  background-color: #5ac8ec;
  width: ${({ width }) => width};
`;

// 2단계 작성

export const CenteredContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 40px;
  /* margin-bottom: 500px; */

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;
// 3단계 작성
export const CenteredContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 500px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;
