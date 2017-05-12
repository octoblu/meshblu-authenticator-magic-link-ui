import styled from "styled-components"

export default styled.button`
  padding: 0 2em;

  background: #0090DD;
  color: #FFF;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  height: 2.4em;
  cursor: pointer;
  min-width: 6.25em;
  width: ${props => (props.block ? "100%" : "auto")};

  &:hover {
    background: #0075C4;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }
`
