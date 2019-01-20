import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => (props.primary ? '#17a2b8' : '#28a745')};
  border-color: ${props => (props.primary ? '#17a2b8' : '#28a745')};
  border-radius: 0.25em;
  border: 1px solid transparent;
  color: #fff;
  padding: 0.2em;
  text-align: center;
  line-height: 2;
  vertical-align: middle;
  min-width: 5em;
  cursor: pointer;
  :hover{
    filter: brightness(115%)
  }
  `;

export default StyledButton;
