import styled from 'styled-components';

const MapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 20px;
  width: 100%;

  div {
    font-weight: bold;
    font-size: 12px;
  }
`;

const MapTitleLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
  div {
    padding-left: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export { MapTitle, MapTitleLeft };
