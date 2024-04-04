import styled, { css } from 'styled-components';
import { InputProps } from './Input';

const modernInput = styled.input<InputProps>`
  padding: 5px;
  border-radius: 5px;
  width: ${(props) => props.width + 'px'};
  border: 1px solid ${(props) => props.border};
  height: ${(props) => props.height + 'px'};
`;

const PlanListInputContainer = styled.div`
  padding: 5px;
`;

const ListInputbox = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid lightgray;

  display: flex;
  align-items: center;
  flex-direction: row;

  div {
    font-weight: bold;

    width: 200px;
  }

  input {
    border-radius: 5px;
    border: 1px solid lightgray;
    width: 100%;
    padding: 15px 10px;

    font-size: 16px;
  }

  p {
    font-size: 12px;
    font-weight: lighter;
  }
`;
const ListInputboxWithOutBorder = styled.div`
  h4 {
    padding-right: 100px;
  }
`;

const ListPagenation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    padding: 10px;
    background-color: white;
    border: none;
  }
`;

export {
  modernInput,
  PlanListInputContainer,
  ListInputbox,
  ListInputboxWithOutBorder,
  ListPagenation,
};
