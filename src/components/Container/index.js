import { blue } from '@ant-design/colors'
import styled from 'styled-components'

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}

export default Container

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${blue[2]};
  color: #fff;
`
