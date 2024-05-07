import styled from 'styled-components';

const InvitationHeader = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
`;

const InvitationSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const InvitationSearchInput = styled.input`
  padding: 5px 15px;
  width: 450px;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 30px;
  font-size: 18px;
`;

const InvitationSearchButton = styled.button`
  border-radius: 50%;
  background-color: #5ac8ec;
  border: none;
  color: white;
  margin: 5px;
  width: 45px;
  height: 45px;
  left: 500px;
  position: absolute;
`;

const InvitationCloseButton = styled.button`
  width: 60px;
  height: 60px;

  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  /* align-items: center; */
  /* justify-content: center; */
  /* margin-left: 20px; */

  background-color: white;
  border-style: none;

  cursor: pointer;
`;

export {
  InvitationHeader,
  InvitationSearchBar,
  InvitationSearchInput,
  InvitationSearchButton,
  InvitationCloseButton,
};
