import styled from "styled-components"

interface IProps {
  centered?: boolean
}

const H2 = styled.h2`
  color: ${props => props.theme.colorMain};
  font-size: ${props => props.theme.fontSizeLarge};
  text-align: ${(props: IProps) => props.centered ? 'center' : 'left'};
  font-weight: ${props => props.theme.fontWeightMedium};
  border-bottom: 1px solid #E0E0E0;
  padding-bottom: 16px;
`

export default H2;
