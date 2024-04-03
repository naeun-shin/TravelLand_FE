import styled from 'styled-components';

const CalendarModalBox = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
`;

const CalendarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  div {
    padding-left: 5px;
  }
`;

export { CalendarModalBox, CalendarHeader };
