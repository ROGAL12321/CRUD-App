import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: ${props => props.theme.fontWeightBold};
  text-decoration: none;
  color: ${props => props.theme.fontColorSecondary}
`

export default H1;