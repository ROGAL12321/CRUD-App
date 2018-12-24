import styled from 'styled-components';

const Label = styled.label`
  color: ${props => props.theme.colorMain};
  display: block;
  font-size: 12px;
  margin-bottom: .5em;
  font-weight: ${props => props.theme.fontWeightMedium};
`

export default Label;

