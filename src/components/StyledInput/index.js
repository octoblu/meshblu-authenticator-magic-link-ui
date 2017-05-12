import styled from 'styled-components'


export default styled.input`
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 2px;
  background-color: #ffffff;
  border: solid 1px ${props => props.error ? '#c92e27' : '#dbdbdb'};
  padding: 0 12px;
  font-size: 13px;
  min-width: 300px;

  &:focus {
    box-shadow: 0 0 0 3px rgba(82, 157, 222, 0.1);
    border-color: #539dde;
    outline: none;
  }

  &.invalid {
    border-color: #c92e27;
  }

  &:disabled {
    background-color: #f2f2f2;
    box-shadow: inset 0 3px 3px 0 #ececec;
    border-color: #d8d8d8;
  }
`
