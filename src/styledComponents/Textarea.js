import styled from 'styled-components';

const Textarea = styled.textarea`
  border: 0;
  box-shadow: 0;
  border-bottom: 1px solid ${props => props.theme.fontColorMain};
  outline: none;
  display: block;
  width: 100%;
  transition: border-bottom .3s ease;
  padding-bottom: 2px;

  &:focus {
      border-bottom: 2px solid ${props => props.theme.colorMain};
  }
`

export default Textarea;